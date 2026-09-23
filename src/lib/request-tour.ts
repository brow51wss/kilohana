"use server";

import { Resend } from "resend";
import { childAges, site } from "@/lib/site";
import { officeTourEmail, parentTourEmail } from "@/lib/tour-email";

export type TourState =
  | { status: "idle" }
  | { status: "ok" }
  | { status: "error"; message: string };

function str(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function requestTour(
  _prev: TourState,
  formData: FormData,
): Promise<TourState> {
  if (str(formData, "company")) {
    return { status: "ok" };
  }

  const parentName = str(formData, "parentName");
  const email = str(formData, "email");
  const phone = str(formData, "phone");
  const childAge = str(formData, "childAge");
  const notes = str(formData, "notes");

  if (parentName.length < 2 || parentName.length > 80) {
    return { status: "error", message: "Please enter a parent name." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 120) {
    return { status: "error", message: "Please enter a valid email address." };
  }
  if (phone.length < 7 || phone.length > 30) {
    return { status: "error", message: "Please enter a phone number." };
  }
  if (!childAges.includes(childAge as (typeof childAges)[number])) {
    return { status: "error", message: "Please choose your child's age." };
  }
  if (notes.length > 2000) {
    return { status: "error", message: "Please shorten your note." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      status: "error",
      message:
        "Tour requests are not sending yet. Please call the office or email the director.",
    };
  }

  const from = process.env.RESEND_FROM;
  if (!from) {
    return {
      status: "error",
      message:
        "Tour requests are not sending yet. Please call the office or email the director.",
    };
  }

  const inbox = process.env.TOUR_INBOX ?? site.email;
  const resend = new Resend(apiKey);
  const details = { parentName, email, phone, childAge, notes };
  const office = officeTourEmail(details);

  const { error } = await resend.emails.send({
    from,
    to: inbox,
    replyTo: email,
    subject: office.subject,
    html: office.html,
    text: office.text,
  });

  if (error) {
    return {
      status: "error",
      message:
        "The request could not be sent. Please call the office or try again.",
    };
  }

  const parent = parentTourEmail(parentName);
  const { error: parentError } = await resend.emails.send({
    from,
    to: email,
    replyTo: inbox,
    subject: parent.subject,
    html: parent.html,
    text: parent.text,
  });

  if (parentError) {
    console.error("Parent tour confirmation failed", parentError);
  }

  return { status: "ok" };
}
