"use client";

import { childAges } from "@/lib/site";
import { requestTour, type TourState } from "@/lib/request-tour";
import { useActionState } from "react";

const initial: TourState = { status: "idle" };

export function TourForm() {
  const [state, action, pending] = useActionState(requestTour, initial);

  if (state.status === "ok") {
    return (
      <p className="m-0 text-lg leading-relaxed text-navy">
        Thank you. The office will call you back with a time. A confirmation
        email is on its way.
      </p>
    );
  }

  return (
    <form action={action} className="grid gap-4">
      <label className="grid gap-1.5">
        <span className="text-[13px] font-semibold uppercase tracking-[0.1em] text-muted">
          Parent name
        </span>
        <input
          required
          name="parentName"
          type="text"
          autoComplete="name"
          placeholder="Your full name"
          className="border border-[#d6d2c4] bg-white px-3.5 py-[13px] text-base text-navy"
        />
      </label>
      <label className="grid gap-1.5">
        <span className="text-[13px] font-semibold uppercase tracking-[0.1em] text-muted">
          Email
        </span>
        <input
          required
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@email.com"
          className="border border-[#d6d2c4] bg-white px-3.5 py-[13px] text-base text-navy"
        />
      </label>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5">
          <span className="text-[13px] font-semibold uppercase tracking-[0.1em] text-muted">
            Phone
          </span>
          <input
            required
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="808 000 0000"
            className="box-border w-full border border-[#d6d2c4] bg-white px-3.5 py-[13px] text-base text-navy"
          />
        </label>
        <label className="grid gap-1.5">
          <span className="text-[13px] font-semibold uppercase tracking-[0.1em] text-muted">
            Child&apos;s age
          </span>
          <select
            name="childAge"
            defaultValue="2 years"
            className="box-border w-full border border-[#d6d2c4] bg-white px-3.5 py-[13px] text-base text-navy"
          >
            {childAges.map((age) => (
              <option key={age} value={age}>
                {age}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="grid gap-1.5">
        <span className="text-[13px] font-semibold uppercase tracking-[0.1em] text-muted">
          Anything we should know?
        </span>
        <textarea
          name="notes"
          rows={4}
          placeholder="Preferred days, schedule, questions"
          className="resize-y border border-[#d6d2c4] bg-white px-3.5 py-[13px] text-base text-navy"
        />
      </label>
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <input name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      {state.status === "error" ? (
        <p className="m-0 text-[15px] text-hibiscus">{state.message}</p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="cursor-pointer border-0 bg-hibiscus px-[22px] py-4 font-heading text-base font-bold text-white hover:opacity-90 disabled:cursor-wait disabled:opacity-70"
      >
        {pending ? "Sending…" : "Send request"}
      </button>
    </form>
  );
}
