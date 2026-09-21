import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Daily schedule",
  description:
    "Pick the day length that fits your family. Outside first, then circle, centers, lunch and rest.",
};

const day = [
  ["Morning playground", ""],
  ["Circle time", ""],
  ["Morning snack", "provided by the school"],
  ["Morning recess", "30–45 minutes"],
  ["Learning centers", ""],
  ["Arts and crafts", ""],
  ["Music and sing-a-longs", ""],
  ["Story time", ""],
  ["Lunch", "brought from home"],
  ["Nap time", "12:00 to 1:00 or 2:00pm, or pick-up"],
  ["Afternoon snack", "provided by the school"],
  ["Afternoon recess", "free play or guided activities"],
  ["Going home", "at 2:30, or by 5:00pm"],
];

export default function OurDayPage() {
  return (
    <>
      <PageHero
        title="Daily schedule"
        crumb="Daily schedule"
        lede="Pick the day length that fits your family. The rhythm inside is the same either way: outside first, then circle, centers, lunch and rest."
        image="/assets/photo-swings.jpg"
        objectPosition="center 45%"
      />

      <section className="mx-auto max-w-[1180px] px-6 pt-[76px]">
        <div className="mb-3.5 text-[12.5px] font-semibold uppercase tracking-[0.18em] text-leaf">
          Schedule options
        </div>
        <h2 className="mb-2.5 font-heading text-[clamp(28px,3.4vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
          8:00am – 5:00pm, Monday through Friday
        </h2>
        <p className="mb-9 max-w-[60ch] text-lg leading-[1.7] text-muted">
          Two day lengths, plus early arrival for parents who start work before
          eight.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="border border-border border-t-4 border-t-leaf bg-white p-[30px]">
            <div className="mb-2.5 font-heading text-[26px] font-extrabold">
              8:00am – 2:30pm
            </div>
            <div className="mb-3.5 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-leaf">
              Half day plus rest
            </div>
            <p className="m-0 text-[16.5px] leading-[1.65] text-muted">
              Nap time from 12:00 to 1:00 or 2:00pm, then pick-up at 2:30.
            </p>
          </div>
          <div className="border border-border border-t-4 border-t-teal bg-white p-[30px]">
            <div className="mb-2.5 font-heading text-[26px] font-extrabold">
              8:00am – 5:00pm
            </div>
            <div className="mb-3.5 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-teal">
              Full day
            </div>
            <p className="m-0 text-[16.5px] leading-[1.65] text-muted">
              Same as above, with afternoon outdoor free play or guided
              activities.
            </p>
          </div>
          <div className="border border-border border-t-4 border-t-plumeria bg-white p-[30px]">
            <div className="mb-2.5 font-heading text-[26px] font-extrabold">
              7:45am – 8:00am
            </div>
            <div className="mb-3.5 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-[#8a6417]">
              Early arrival
            </div>
            <p className="m-0 text-[16.5px] leading-[1.65] text-muted">
              Available for an additional fee. Ask the office when you enroll.
            </p>
          </div>
        </div>
      </section>

      <section className="relative mt-[76px] overflow-hidden bg-sand">
        <Image
          src="/assets/leaf-b.png"
          alt=""
          width={190}
          height={125}
          className="absolute bottom-10 -left-[60px] w-[190px] opacity-20"
        />
        <div className="relative mx-auto max-w-[1180px] px-6 py-[76px]">
          <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
            <div>
              <div className="mb-3.5 text-[12.5px] font-semibold uppercase tracking-[0.18em] text-leaf">
                Daily classroom schedule
              </div>
              <h2 className="mb-5 font-heading text-[clamp(28px,3.4vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
                How the day moves
              </h2>
              <p className="mb-[26px] text-lg leading-[1.7] text-muted">
                Snacks are provided by the school, morning and afternoon. Lunch
                comes from home. The order stays predictable so children know
                what happens next.
              </p>
              <Image
                src="/assets/photo-lanai.jpg"
                alt="Covered lanai at Kilohana Preschool"
                width={4496}
                height={3000}
                className="mb-[18px] block h-[280px] w-full object-cover"
              />
              <div className="border border-border bg-white p-6">
                <h3 className="mb-2.5 font-heading text-lg font-semibold">
                  Rainy day? Still outside.
                </h3>
                <p className="m-0 text-base leading-[1.65] text-muted">
                  A large covered lanai keeps the day going in any weather — a
                  dry outdoor space for play, easels, and special programs.
                </p>
              </div>
            </div>
            <div className="bg-navy p-[34px]">
              <ol className="grid gap-3.5">
                {day.map(([item, note], i) => (
                  <li
                    key={item}
                    className={`flex items-baseline gap-3.5 text-[17px] text-[#e8edf2] ${
                      i < day.length - 1
                        ? "border-b border-white/10 pb-3"
                        : ""
                    }`}
                  >
                    <span className="min-w-[22px] font-heading text-xs font-bold text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      {item}
                      {note ? (
                        <span className="text-[15px] text-[#9fb0bf]"> {note}</span>
                      ) : null}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-6 pt-[76px]">
        <div className="mb-3.5 text-[12.5px] font-semibold uppercase tracking-[0.18em] text-leaf">
          Good to know
        </div>
        <h2 className="mb-8 font-heading text-[clamp(28px,3.4vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
          Before the first day
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {[
            ["#4F7737", "Pack a lunch and a water bottle", "A nutritious lunch comes from home. Both snacks are provided by the school."],
            ["#2A7E7B", "Dress for comfort", "Play clothes for running, jumping, climbing and possibly getting messy. Shorts need to be worn under skirts and dresses."],
            ["#D19329", "Rest things", "A blanket and a small comfort item for nap time, labeled with your child's name."],
            ["#DF5026", "Toilet trained", "Required for enrollment, for children two to six years of age."],
          ].map(([color, title, body]) => (
            <div key={title} className="border border-border bg-white p-7">
              <div className="mb-[18px] h-[3px] w-8" style={{ background: color }} />
              <h3 className="mb-2.5 font-heading text-lg font-semibold">{title}</h3>
              <p className="m-0 text-base leading-[1.65] text-muted">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand
        title="Ready to talk about days and times?"
        body="The office can walk you through which schedule has space for your child's age group."
        secondary={{ href: "/admissions", label: "Admissions" }}
      />
    </>
  );
}
