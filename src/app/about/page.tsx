import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About us",
  description:
    "A non-denominational, non-profit preschool on the grounds of Kilohana United Methodist Church, serving East Honolulu since 1966.",
};

const goals = [
  ["01", "#4F7737", "To provide a nurturing, relaxed and secure environment where self-concepts are enhanced, independence is encouraged, free-choice decisions are offered, and individuality is respected."],
  ["02", "#2A7E7B", "To encourage each child to develop a positive self-image and a positive attitude toward school."],
  ["03", "#8A6417", "To provide opportunities to develop physical skills and coordination through active play."],
  ["04", "#DF5026", "To help your child develop good listening skills, learn the importance of cooperation and taking turns, acquire social skills and respect for himself or herself as well as others."],
  ["05", "#4F7737", "To work in harmony with parents to provide supportive services if needed."],
  ["06", "#2A7E7B", "To nurture each child's spiritual, emotional, social, and physical well-being."],
];

const staff = [
  {
    name: "Auntie Lori",
    title: "Preschool Director",
    src: "/assets/staff-lori.webp",
  },
  {
    name: "Ms. Naomi",
    title: "Red Door Teacher (2 and 3 year olds)",
    src: "/assets/staff-naomi.webp",
  },
  {
    name: "Ms. Gwynne",
    title: "Green Door Teacher (3 and 4 year olds)",
    src: "/assets/staff-gwynne.webp",
  },
  {
    name: "Ms. Soo",
    title: "Yellow Door Teacher (4 and 5 year olds)",
    src: "/assets/staff-soo.webp",
  },
  {
    name: "Ms. J",
    title: "Afternoon Aide",
    src: "/assets/staff-j.webp",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About us"
        crumb="About us"
        lede="A non-denominational, non-profit preschool on the grounds of Kilohana United Methodist Church, serving East Honolulu since 1966."
        image="/assets/photo-yard.jpg"
        objectPosition="center 60%"
      />

      <section className="mx-auto max-w-[1180px] px-6 pt-20">
        <div className="grid grid-cols-1 items-start gap-[52px] md:grid-cols-2">
          <div>
            <div className="mb-3.5 text-[12.5px] font-semibold uppercase tracking-[0.18em] text-leaf">
              History
            </div>
            <h2 className="mb-5 font-heading text-[clamp(28px,3.4vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
              Sixty years in Niu Valley
            </h2>
            <p className="mb-[18px] text-lg leading-[1.7] text-muted">
              Kilohana Preschool was established in 1966 because of the desire of
              Kilohana United Methodist Church to be in ministry to young
              families in the new community of Niu Valley.
            </p>
            <p className="m-0 text-lg leading-[1.7] text-muted">
              It continues to be a non-denominational, non-profit school providing
              educational service to the communities of East Honolulu.
            </p>
          </div>
          <div className="grid gap-5">
            <div className="border border-border bg-white p-7">
              <div className="mb-3 text-[12.5px] font-semibold uppercase tracking-[0.16em] text-leaf">
                Location
              </div>
              <p className="mb-3.5 text-[17px] leading-[1.65] text-muted">
                Kilohana Preschool is located on the grounds of Kilohana United
                Methodist Church near the entrance to Niu Valley in East Oahu.
              </p>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-semibold text-leaf hover:text-hibiscus"
              >
                Directions can be found here →
              </a>
            </div>
            <div className="border border-border bg-white p-7">
              <div className="mb-3 text-[12.5px] font-semibold uppercase tracking-[0.16em] text-leaf">
                Licensing
              </div>
              <p className="m-0 text-[17px] leading-[1.65] text-muted">
                Kilohana Preschool is licensed by the Child Care Licensing
                Division of the Hawaii Department of Human Services (DHS).
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mt-20 overflow-hidden bg-sand">
        <Image
          src="/assets/leaf-a.png"
          alt=""
          width={200}
          height={131}
          className="absolute right-[-54px] bottom-9 w-[200px] opacity-20"
        />
        <div className="relative mx-auto max-w-[1180px] px-6 py-20">
          <div className="mb-3.5 text-[12.5px] font-semibold uppercase tracking-[0.18em] text-leaf">
            Philosophy
          </div>
          <h2 className="mb-5 max-w-[26ch] font-heading text-[clamp(28px,3.6vw,40px)] font-bold leading-[1.12] tracking-[-0.02em]">
            Every child arrives with their own strengths
          </h2>
          <p className="mb-10 max-w-[66ch] text-lg leading-[1.7] text-muted">
            We believe that each child brings to the early childhood center his or
            her own unique experiences and strengths. Believing the physical,
            emotional, mental and spiritual development of each child is
            interrelated, we have the following goals:
          </p>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {goals.map(([num, color, body]) => (
              <div key={num} className="border border-border bg-white p-7">
                <div
                  className="mb-3.5 font-heading text-[13px] font-extrabold tracking-[0.1em]"
                  style={{ color }}
                >
                  {num}
                </div>
                <p className="m-0 text-[16.5px] leading-[1.65] text-navy">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-6 pt-20">
        <div className="grid grid-cols-1 items-center gap-[52px] md:grid-cols-2">
          <Image
            src="/assets/photo-room.jpg"
            alt="Block center in a Kilohana classroom"
            width={4281}
            height={2759}
            className="block h-[400px] w-full object-cover"
          />
          <div>
            <div className="mb-3.5 text-[12.5px] font-semibold uppercase tracking-[0.18em] text-leaf">
              Program
            </div>
            <h2 className="mb-5 font-heading text-[clamp(28px,3.4vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
              Teacher-directed and child-initiated
            </h2>
            <p className="mb-[18px] text-lg leading-[1.7] text-muted">
              We offer our students an integrated program in language arts,
              awareness of the world and other cultures, music, art, physical
              skills and pre-reading readiness that is balanced between
              teacher-directed and child-initiated activities.
            </p>
            <p className="mb-[26px] text-lg leading-[1.7] text-muted">
              Our goal is to help your child reach his or her potential
              physically, mentally, emotionally, socially and spiritually in an
              atmosphere of love, security, acceptance and success.
            </p>
            <Link
              href="/our-day"
              className="inline-block bg-leaf px-[22px] py-[15px] font-heading text-base font-bold text-white hover:opacity-90"
            >
              See a day at Kilohana
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-6 pt-20">
        <div className="mb-3.5 text-[12.5px] font-semibold uppercase tracking-[0.18em] text-leaf">
          Our staff
        </div>
        <h2 className="mb-3.5 font-heading text-[clamp(28px,3.4vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
          The teachers your child will know by name
        </h2>
        <p className="mb-8 max-w-[62ch] text-lg leading-[1.7] text-muted">
          Each classroom has one teacher, and class sizes stay small —
          6 to 16 children, grouped by age.
        </p>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {staff.map((person) => (
            <article
              key={person.name}
              className="overflow-hidden border border-border bg-white"
            >
              <Image
                src={person.src}
                alt={person.name}
                width={800}
                height={1000}
                className="aspect-[4/5] w-full object-cover object-top"
              />
              <div className="p-5">
                <h3 className="mb-1 font-heading text-lg font-semibold text-navy">
                  {person.name}
                </h3>
                <p className="m-0 text-[15px] leading-snug text-muted">
                  {person.title}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand
        title="Want to see it for yourself?"
        body="Call the office and we will set up a visit while the children are outside."
        secondary={{ href: "/admissions", label: "Admissions" }}
      />
    </>
  );
}
