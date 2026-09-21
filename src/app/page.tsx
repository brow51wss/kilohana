import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section id="top" className="bg-cream">
        <div className="mx-auto grid max-w-[1180px] items-center gap-6 px-6 py-[84px] lg:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)] lg:grid-rows-[auto_auto_1fr] lg:gap-x-14 lg:gap-y-0 lg:py-[92px]">
          <div className="lg:col-start-1">
            <div className="mb-6 inline-flex items-center gap-2.5">
              <Image
                src="/assets/leaf-b.png"
                alt=""
                width={34}
                height={22}
                className="w-[34px]"
              />
              <span className="text-[13px] font-semibold uppercase tracking-[0.18em] text-gold">
                A Niu Valley preschool since 1966
              </span>
            </div>
          </div>
          <h1 className="mb-2 font-heading text-[clamp(40px,6vw,68px)] font-extrabold leading-[1.02] tracking-[-0.025em] text-navy lg:col-start-1 lg:mb-[22px]">
            Shade, sand,
            <br />
            and room to grow
          </h1>
          <div className="overflow-visible lg:col-start-2 lg:row-span-3 lg:row-start-1">
            <Image
              src="/assets/icon-tree.png"
              alt=""
              width={5087}
              height={2761}
              priority
              className="h-auto w-[68%] origin-center lg:w-full lg:scale-[1.4]"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
          <div className="lg:col-start-1">
            <p className="mb-8 text-xl leading-relaxed text-muted md:w-[68%] lg:w-full">
              Kilohana Preschool is a non-profit, non-denominational school for
              keiki ages two to six, on a grassy campus shaded by monkeypod trees
              at the entrance to Niu Valley.
            </p>
            <div className="mb-10 flex flex-wrap gap-3.5">
              <Link
                href="/contact"
                className="bg-hibiscus px-7 py-[17px] font-heading text-base font-bold text-white hover:opacity-90"
              >
                Schedule a tour
              </Link>
              <Link
                href="/admissions"
                className="btn-ghost px-[26px] py-4 font-heading text-base font-semibold text-navy"
              >
                Enrollment packet
              </Link>
            </div>
            <p className="m-0 text-base font-bold leading-relaxed text-navy">
              Ages 2–6
              <span className="mx-3.5 font-normal" aria-hidden>
                ·
              </span>
              8:00am – 5:00pm, Mon–Fri
              <span className="mx-3.5 font-normal" aria-hidden>
                ·
              </span>
              DHS licensed
              <span className="mx-3.5 font-normal" aria-hidden>
                ·
              </span>
              Snacks provided
            </p>
          </div>
        </div>
      </section>

      <section className="bg-leaf">
        <div className="mx-auto grid max-w-[1180px] grid-cols-2 gap-7 px-6 py-[34px] lg:grid-cols-4">
          {[
            ["1966", "Serving East Honolulu families"],
            ["1:6", "Staff ratio for two-year-olds"],
            ["3", "Bright classrooms plus a nap room"],
            ["68", "Licensed enrollment, small by design"],
          ].map(([stat, label]) => (
            <div key={stat}>
              <div className="font-heading text-[34px] font-extrabold leading-none text-white">
                {stat}
              </div>
              <div className="mt-1.5 text-[15px] text-[#e6efdd]">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-[1180px] px-6 pt-[88px]">
        <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2">
          <div>
            <div className="mb-4 text-[12.5px] font-semibold uppercase tracking-[0.18em] text-leaf">
              Welcome
            </div>
            <h2 className="mb-[22px] font-heading text-[clamp(30px,3.8vw,44px)] font-bold leading-[1.1] tracking-[-0.02em]">
              A balanced program, a nurturing place
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
            <div className="border-l-[3px] border-plumeria py-1.5 pl-[18px] text-[17px] leading-relaxed text-navy">
              Established in 1966 by Kilohana United Methodist Church to serve
              young families in Niu Valley, and still a non-denominational,
              non-profit school today.
            </div>
          </div>
          <div className="relative">
            <Image
              src="/assets/photo-play.jpg"
              alt="Children's family drawings on the classroom wall"
              width={3786}
              height={2700}
              className="block h-[420px] w-full object-cover"
            />
            <Image
              src="/assets/leaf-a.png"
              alt=""
              width={120}
              height={79}
              className="absolute -right-[18px] -bottom-7 w-[120px] opacity-85"
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["#4F7737", "Independence, encouraged", "A relaxed, secure environment where self-concepts are enhanced, free-choice decisions are offered, and individuality is respected."],
            ["#2A7E7B", "Skills through active play", "Physical skills and coordination develop outdoors, every day, on two shaded acres of grass and sand."],
            ["#D19329", "Listening and taking turns", "Children learn the importance of cooperation, acquire social skills, and build respect for themselves and others."],
            ["#DF5026", "In harmony with parents", "We work with families to provide supportive services when they are needed, and keep you in the loop day to day."],
          ].map(([color, title, body]) => (
            <div key={title} className="border border-border bg-white p-[30px]">
              <div className="mb-[18px] h-[3px] w-8" style={{ background: color }} />
              <h3 className="mb-2.5 font-heading text-[19px] font-semibold">{title}</h3>
              <p className="m-0 text-base leading-[1.65] text-muted">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="day" className="relative mt-[88px] overflow-hidden bg-sand">
        <Image
          src="/assets/leaf-b.png"
          alt=""
          width={200}
          height={131}
          className="absolute bottom-10 -left-[66px] w-[200px] opacity-20"
        />
        <div className="relative mx-auto max-w-[1180px] px-6 py-[84px]">
          <div className="mb-4 text-[12.5px] font-semibold uppercase tracking-[0.18em] text-leaf">
            Our day
          </div>
          <h2 className="mb-10 max-w-[22ch] font-heading text-[clamp(30px,3.8vw,44px)] font-bold leading-[1.1] tracking-[-0.02em]">
            Outside first, then everything else
          </h2>
          <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-3">
            <div className="border border-border bg-white p-8">
              <h3 className="mb-5 font-heading text-xl font-semibold">
                Schedule options
              </h3>
              <div className="mb-3.5 border-b border-[#efede5] pb-3.5">
                <div className="font-heading text-base font-bold text-navy">
                  8:00am – 2:30pm
                </div>
                <div className="mt-1 text-[15.5px] leading-[1.55] text-muted">
                  Nap time from 12:00 to 1:00 or 2:00pm
                </div>
              </div>
              <div className="mb-3.5 border-b border-[#efede5] pb-3.5">
                <div className="font-heading text-base font-bold text-navy">
                  8:00am – 5:00pm
                </div>
                <div className="mt-1 text-[15.5px] leading-[1.55] text-muted">
                  Same as above, with afternoon outdoor free play or guided
                  activities
                </div>
              </div>
              <div>
                <div className="font-heading text-base font-bold text-navy">
                  7:45am – 8:00am
                </div>
                <div className="mt-1 text-[15.5px] leading-[1.55] text-muted">
                  Early arrival, additional fee
                </div>
              </div>
              <div className="mt-[22px] text-[14.5px] text-[#6b7a88]">
                Monday through Friday.
              </div>
            </div>
            <div className="bg-navy p-8">
              <h3 className="mb-5 font-heading text-xl font-semibold text-white">
                A day in the classroom
              </h3>
              <ol className="grid gap-[11px] text-base text-[#e8edf2]">
                {[
                  "Morning playground",
                  "Circle time",
                  "Morning snack, provided by the school",
                  "Morning recess, 30–45 minutes",
                  "Learning centers",
                  "Arts and crafts",
                  "Music and sing-a-longs",
                  "Story time",
                  "Lunch, brought from home",
                  "Nap time, or pick-up",
                  "Afternoon snack, provided by the school",
                  "Afternoon recess, free play or guided activities",
                  "Going home at 2:30, or by 5:00pm",
                ].map((item, i) => (
                  <li key={item} className="flex items-baseline gap-3">
                    <span className="min-w-5 font-heading text-xs font-bold text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="grid gap-5">
              <Image
                src="/assets/photo-lanai.jpg"
                alt="Covered lanai at Kilohana Preschool"
                width={4496}
                height={3000}
                className="block h-[260px] w-full object-cover"
              />
              <div className="border border-border bg-white p-[26px]">
                <h3 className="mb-2.5 font-heading text-lg font-semibold">
                  Rainy day? Still outside.
                </h3>
                <p className="m-0 text-base leading-[1.65] text-muted">
                  A large covered lanai keeps the day going in any weather — a
                  dry outdoor space for play, easels, and special programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="facility" className="mx-auto max-w-[1180px] px-6 pt-[88px]">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
          <div>
            <div className="mb-4 text-[12.5px] font-semibold uppercase tracking-[0.18em] text-leaf">
              Our facility
            </div>
            <h2 className="mb-[22px] font-heading text-[clamp(30px,3.8vw,44px)] font-bold leading-[1.1] tracking-[-0.02em]">
              Three classrooms, two shaded acres
            </h2>
            <p className="mb-[18px] text-lg leading-[1.7] text-muted">
              We have three large, bright classrooms plus a napping room for our
              children. Classes are divided by age, with the youngest children
              having the smallest class size — 6 to 16 students, with one
              teacher in each classroom.
            </p>
            <p className="mb-[18px] text-lg leading-[1.7] text-muted">
              Our playground is spacious, grassy and naturally shaded by large
              trees. It includes an ample sandbox, swings, an area for riding
              tricycles, and a modern play structure designed specifically for
              preschool-age children.
            </p>
            <p className="mb-7 text-lg leading-[1.7] text-muted">
              Children attend children's chapel twice a month.
            </p>
            <h3 className="mb-3 font-heading text-lg font-semibold">
              Staff to child ratios
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                ["1:6", "Two-year-olds"],
                ["1:10", "Three- to four-year-olds"],
                ["1:14", "Four- to five-year-olds"],
              ].map(([ratio, ages]) => (
                <div key={ratio} className="border border-border bg-white p-5">
                  <div className="font-heading text-[22px] font-bold">{ratio}</div>
                  <div className="mt-1 text-[14.5px] text-[#6b7a88]">{ages}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/photo-slide.webp"
              alt="Child climbing the playground slide"
              width={1600}
              height={1067}
              className="col-span-2 block h-[210px] w-full object-cover"
            />
            <Image
              src="/assets/photo-swings.jpg"
              alt="Swings under the trees"
              width={4496}
              height={3000}
              className="block h-[180px] w-full object-cover"
            />
            <Image
              src="/assets/photo-toys.jpg"
              alt="Classroom shelves"
              width={4496}
              height={3000}
              className="block h-[180px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="relative mt-[88px] bg-[#45371c]">
        <Image
          src="/assets/photo-mural.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/66" />
        <div className="relative mx-auto max-w-[1180px] px-6 py-[76px] text-center">
          <div className="mb-[18px] inline-flex items-center gap-4">
            <Image src="/assets/leaf-b.png" alt="" width={38} height={25} className="w-[38px]" />
            <span className="font-heading text-[13px] font-semibold tracking-[0.18em] text-gold">
              GROWING · LEARNING · TOGETHER
            </span>
            <Image src="/assets/leaf-a.png" alt="" width={38} height={25} className="w-[38px]" />
          </div>
          <p className="mx-auto max-w-[24ch] font-heading text-[clamp(22px,3vw,32px)] font-semibold leading-[1.35] text-white">
            Nearly sixty years of Niu Valley keiki have grown up under these trees.
          </p>
        </div>
      </section>

      <section id="admissions" className="mx-auto max-w-[1180px] px-6 pt-[88px]">
        <div className="mb-4 text-[12.5px] font-semibold uppercase tracking-[0.18em] text-leaf">
          Admissions
        </div>
        <h2 className="mb-3.5 font-heading text-[clamp(30px,3.8vw,44px)] font-bold leading-[1.1] tracking-[-0.02em]">
          How enrollment works
        </h2>
        <p className="mb-11 max-w-[62ch] text-lg leading-[1.7] text-muted">
          Kilohana Preschool is licensed to admit 68 pupils from two to six years
          of age, who are toilet trained, on a non-discriminatory basis without
          regard to race, color or religion.
        </p>
        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {[
            ["STEP ONE", "#4F7737", "Come see us", "Call the office to arrange a visit. Bring your child and walk the yard with a teacher."],
            ["STEP TWO", "#2A7E7B", "Send the application", "Applications are available throughout the year for the following school year, and admission is open on a continual basis, space permitting."],
            ["STEP THREE", "#D19329", "Hold your spot", "A non-refundable registration fee is due with the application form. A tuition deposit is paid upon entrance."],
            ["GOOD TO KNOW", "#DF5026", "Order of arrival", "All applications are processed in the order received, with preference given to returning students."],
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
              <h3 className="mb-2.5 font-heading text-[19px] font-semibold">{title}</h3>
              <p className="m-0 text-base leading-[1.65] text-muted">{body}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 items-center gap-7 bg-sand p-[34px] md:grid-cols-2">
          <div>
            <h3 className="mb-2 font-heading text-[22px] font-bold">
              Forms
            </h3>
            <p className="m-0 text-base leading-relaxed text-muted">
              Download, print and return to the office, or ask us to mail you a
              packet.
            </p>
          </div>
          <div className="grid gap-2.5">
            <a
              href={site.pdfs.packet2026}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-hibiscus px-5 py-[15px] font-heading text-[15.5px] font-bold text-white hover:opacity-90"
            >
              2026–27 Enrollment Packet (PDF)
            </a>
            <a
              href={site.pdfs.packet2025}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-[#d6d2c4] bg-white px-5 py-3.5 font-heading text-[15.5px] font-semibold text-navy hover:border-leaf hover:text-leaf"
            >
              2025–26 Enrollment Application (PDF)
            </a>
          </div>
        </div>
      </section>

      <section id="visit" className="mx-auto max-w-[1180px] px-6 pt-[88px]">
        <div className="grid grid-cols-1 items-stretch gap-12 md:grid-cols-2">
          <div>
            <div className="mb-4 text-[12.5px] font-semibold uppercase tracking-[0.18em] text-leaf">
              Visit
            </div>
            <h2 className="mb-[22px] font-heading text-[clamp(30px,3.8vw,44px)] font-bold leading-[1.1] tracking-[-0.02em]">
              Come walk the yard
            </h2>
            <p className="mb-[30px] max-w-[48ch] text-lg leading-[1.7] text-muted">
              We are on the grounds of Kilohana United Methodist Church near the
              entrance to Niu Valley in East Oahu. Call or email and we will find
              a morning that works.
            </p>
            <div className="mb-[26px] grid gap-0.5 border border-border bg-border">
              {[
                ["Address", site.address],
                ["Phone", site.phoneDisplay],
                ["Fax", site.faxDisplay],
                ["Email", site.email],
                ["Licensing", "Hawaii DHS, Child Care Licensing Division"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex flex-wrap justify-between gap-x-5 gap-y-1.5 bg-white px-[22px] py-5"
                >
                  <span className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[#6b7a88]">
                    {label}
                  </span>
                  {label === "Phone" ? (
                    <a href={`tel:${site.phoneTel}`} className="text-[16.5px] font-semibold">
                      {value}
                    </a>
                  ) : label === "Email" ? (
                    <a href={`mailto:${site.email}`} className="text-[16.5px] text-leaf hover:text-hibiscus">
                      {value}
                    </a>
                  ) : (
                    <span className="text-[16.5px]">{value}</span>
                  )}
                </div>
              ))}
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
          <div className="relative flex min-h-[380px] items-end p-8">
            <Image
              src="/assets/photo-yard.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-navy/35" />
            <div className="relative max-w-[330px] bg-navy/90 px-[26px] py-6">
              <div className="mb-2 font-heading text-lg font-bold text-white">
                Office hours
              </div>
              <p className="m-0 text-base leading-relaxed text-[#d8e0e8]">
                Monday through Friday, 7:45am to 5:00pm. Tours are best
                mid-morning, while the children are outside.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Spots for 2026–27 are open now"
        body="Applications are processed in the order they arrive. Returning families first, then everyone else."
        secondary={{
          href: `mailto:${site.email}`,
          label: "Email the director",
          external: true,
        }}
      />
    </>
  );
}
