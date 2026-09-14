import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Applications are open year-round for the following school year, and admission is continual as space allows.",
};

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        title="Admissions"
        crumb="Admissions"
        lede="Applications are open year-round for the following school year, and admission is continual as space allows."
        image="/assets/photo-tree.jpg"
        objectPosition="center 40%"
      />

      <section className="mx-auto max-w-[1180px] px-6 pt-[76px]">
        <div className="grid grid-cols-1 items-start gap-[52px] md:grid-cols-2">
          <div>
            <div className="mb-3.5 text-[12.5px] font-semibold uppercase tracking-[0.18em] text-leaf">
              Information
            </div>
            <h2 className="mb-5 font-heading text-[clamp(28px,3.4vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
              Who we can enroll
            </h2>
            <p className="mb-[18px] text-lg leading-[1.7] text-muted">
              Kilohana Preschool is licensed to admit 68 pupils from two to six
              years of age, who are toilet trained, on a non-discriminatory basis
              without regard to race, color or religion.
            </p>
            <p className="mb-[18px] text-lg leading-[1.7] text-muted">
              Applications are available throughout the year for the following
              school year and admission is open on a continual basis, space
              permitting.
            </p>
            <p className="mb-[18px] text-lg leading-[1.7] text-muted">
              All applications are processed in the order in which they are
              received with preference given to returning students.
            </p>
            <p className="m-0 text-lg leading-[1.7] text-muted">
              A non-refundable registration fee is due with the application form.
              A tuition deposit is paid upon entrance and will be applied to the
              child&apos;s last month&apos;s tuition provided a one-month notice
              is given.
            </p>
          </div>
          <div className="grid gap-5">
            <div className="bg-sand p-7">
              <div className="mb-2 font-heading text-[32px] font-extrabold leading-none">
                68
              </div>
              <div className="text-[16.5px] text-muted">
                Licensed enrollment, ages two to six
              </div>
            </div>
            <div className="bg-sand p-7">
              <div className="mb-2 font-heading text-[32px] font-extrabold leading-none">
                12–20
              </div>
              <div className="text-[16.5px] text-muted">
                Children per class, grouped by age, with a teacher and an aide in
                each room
              </div>
            </div>
            <div className="bg-sand p-7">
              <div className="mb-2 font-heading text-[32px] font-extrabold leading-none">
                Year-round
              </div>
              <div className="text-[16.5px] text-muted">
                Applications accepted any time; returning students first
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mt-[76px] overflow-hidden bg-sand">
        <Image
          src="/assets/leaf-a.png"
          alt=""
          width={190}
          height={125}
          className="absolute right-[-56px] bottom-10 w-[190px] opacity-20"
        />
        <div className="relative mx-auto max-w-[1180px] px-6 py-[76px]">
          <h2 className="mb-9 font-heading text-[clamp(28px,3.4vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
            Four steps, start to first day
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {[
              ["STEP ONE", "#4F7737", "Come see us", "Call the office to arrange a visit. Bring your child and walk the yard with a teacher."],
              ["STEP TWO", "#2A7E7B", "Send the application", "Download the packet below, or ask us to mail one. Return it to the office with the registration fee."],
              ["STEP THREE", "#D19329", "Hold your spot", "A tuition deposit is paid upon entrance and applies to your child's last month, with one month's notice."],
              ["STEP FOUR", "#DF5026", "Start school", "Pick a schedule, pack a lunch, and meet your child's teacher on the first morning."],
            ].map(([step, color, title, body]) => (
              <div
                key={step}
                className="border border-border border-t-4 bg-white p-7"
                style={{ borderTopColor: color }}
              >
                <div
                  className="mb-3.5 font-heading text-[13px] font-extrabold tracking-[0.1em]"
                  style={{ color }}
                >
                  {step}
                </div>
                <h3 className="mb-2.5 font-heading text-[19px] font-semibold">
                  {title}
                </h3>
                <p className="m-0 text-base leading-[1.65] text-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="forms" className="mx-auto max-w-[1180px] px-6 pt-[76px]">
        <div className="mb-3.5 text-[12.5px] font-semibold uppercase tracking-[0.18em] text-leaf">
          Forms
        </div>
        <h2 className="mb-8 font-heading text-[clamp(28px,3.4vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
          Download and print
        </h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <a
            href={site.pdfs.packet2026}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-navy p-[30px] hover:bg-[#16273a]"
          >
            <div className="mb-3 text-[11.5px] tracking-[0.14em] text-gold">PDF</div>
            <div className="mb-2 font-heading text-xl font-bold leading-snug text-white">
              2026–27 Enrollment Packet
            </div>
            <div className="text-[15.5px] text-[#b9c6d2]">
              Current school year application →
            </div>
          </a>
          <a
            href={site.pdfs.packet2025}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-border bg-white p-[30px] hover:border-leaf"
          >
            <div className="mb-3 text-[11.5px] tracking-[0.14em] text-[#8a9aa8]">
              PDF
            </div>
            <div className="mb-2 font-heading text-xl font-bold leading-snug text-navy">
              2025–26 Enrollment Application
            </div>
            <div className="text-[15.5px] text-[#6b7a88]">
              Prior year, for reference →
            </div>
          </a>
          <a
            href={site.pdfs.brochure}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-border bg-white p-[30px] hover:border-leaf"
          >
            <div className="mb-3 text-[11.5px] tracking-[0.14em] text-[#8a9aa8]">
              PDF
            </div>
            <div className="mb-2 font-heading text-xl font-bold leading-snug text-navy">
              Informational Brochure
            </div>
            <div className="text-[15.5px] text-[#6b7a88]">
              Program overview to take home →
            </div>
          </a>
        </div>
      </section>

      <CtaBand
        title="Questions about the application?"
        body="The director answers the phone most mornings and is happy to walk you through it."
        secondary={{
          href: `mailto:${site.email}`,
          label: "Email the director",
          external: true,
        }}
      />
    </>
  );
}
