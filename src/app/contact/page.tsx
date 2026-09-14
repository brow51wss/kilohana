import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { TourForm } from "@/components/TourForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Kilohana United Methodist Church Preschool, near the entrance to Niu Valley in East Oahu.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        crumb="Contact"
        lede="Kilohana United Methodist Church Preschool, near the entrance to Niu Valley in East Oahu."
        image="/assets/photo-yard.jpg"
        objectPosition="center 70%"
      />

      <section className="mx-auto max-w-[1180px] px-6 pt-[76px]">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
          <div>
            <div className="mb-3.5 text-[12.5px] font-semibold uppercase tracking-[0.18em] text-leaf">
              Preschool office
            </div>
            <h2 className="mb-[26px] font-heading text-[clamp(28px,3.4vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
              Kilohana United Methodist Church Preschool
            </h2>
            <div className="mb-7 grid gap-3">
              <div className="border border-border bg-white px-6 py-[22px]">
                <div className="mb-1.5 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-[#6b7a88]">
                  Address
                </div>
                <div className="text-lg leading-normal">
                  {site.addressLines[0]}
                  <br />
                  {site.addressLines[1]}
                </div>
              </div>
              <div className="border border-border bg-white px-6 py-[22px]">
                <div className="mb-1.5 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-[#6b7a88]">
                  Phone
                </div>
                <a
                  href={`tel:${site.phoneTel}`}
                  className="font-heading text-[22px] font-bold text-leaf hover:text-hibiscus"
                >
                  {site.phoneDisplay}
                </a>
              </div>
              <div className="border border-border bg-white px-6 py-[22px]">
                <div className="mb-1.5 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-[#6b7a88]">
                  Fax
                </div>
                <div className="text-lg">{site.faxDisplay}</div>
              </div>
              <div className="border border-border bg-white px-6 py-[22px]">
                <div className="mb-1.5 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-[#6b7a88]">
                  Email
                </div>
                <a
                  href={`mailto:${site.email}`}
                  className="text-lg text-leaf hover:text-hibiscus"
                >
                  {site.email}
                </a>
              </div>
              <div className="border border-border bg-white px-6 py-[22px]">
                <div className="mb-1.5 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-[#6b7a88]">
                  Office hours
                </div>
                <div className="text-lg leading-normal">
                  Monday – Friday, 7:45am – 5:00pm
                </div>
              </div>
            </div>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-leaf px-[22px] py-[15px] font-heading text-[15.5px] font-bold text-white hover:opacity-90"
            >
              Get directions
            </a>
          </div>

          <div className="bg-sand p-[34px]">
            <h3 className="mb-2 font-heading text-[22px] font-bold">
              Request a tour
            </h3>
            <p className="mb-6 text-[16.5px] leading-relaxed text-muted">
              Tell us a little about your child and we will call you back with a
              time.
            </p>
            <TourForm />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-6 pt-[76px]">
        <div className="mb-3.5 text-[12.5px] font-semibold uppercase tracking-[0.18em] text-leaf">
          Our location
        </div>
        <h2 className="mb-[26px] font-heading text-[clamp(28px,3.4vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
          On the church grounds, off Mahimahi Street
        </h2>
        <div className="border border-border bg-white">
          <iframe
            src={site.mapsEmbed}
            title="Map of Kilohana Preschool"
            className="block h-[420px] w-full border-0"
            loading="lazy"
          />
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="border border-border bg-white p-[26px]">
            <h3 className="mb-2.5 font-heading text-lg font-semibold">Parking</h3>
            <p className="m-0 text-base leading-[1.65] text-muted">
              Use the church lot off Mahimahi Street. Drop-off and pick-up happen
              at the preschool gate.
            </p>
          </div>
          <div className="border border-border bg-white p-[26px]">
            <h3 className="mb-2.5 font-heading text-lg font-semibold">
              Best time to visit
            </h3>
            <p className="m-0 text-base leading-[1.65] text-muted">
              Mid-morning, while the children are outside and the classrooms are
              in centers.
            </p>
          </div>
          <div className="border border-border bg-white p-[26px]">
            <h3 className="mb-2.5 font-heading text-lg font-semibold">The church</h3>
            <p className="m-0 text-base leading-[1.65] text-muted">
              The preschool is non-denominational and independent of worship
              programs.{" "}
              <a
                href={site.umcUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-leaf hover:text-hibiscus"
              >
                Kilohana UMC →
              </a>
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        title="We would love to meet your family"
        body="Call the office, or send the enrollment packet in whenever you are ready."
        secondary={{ href: "/admissions", label: "Admissions" }}
      />
    </>
  );
}
