import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-[#d8e0e8]">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-10 px-6 pb-7 pt-[60px] sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/assets/logo-full.png"
            alt="Kilohana Preschool"
            width={150}
            height={136}
            className="mb-[18px] w-[150px] brightness-0 invert"
          />
          <p className="m-0 text-[15.5px] leading-[1.65] text-[#9fb0bf]">
            A non-denominational, non-profit preschool serving East Honolulu since
            1966.
          </p>
        </div>
        <div>
          <div className="mb-4 font-heading text-sm font-semibold tracking-[0.08em] text-white">
            EXPLORE
          </div>
          <div className="grid gap-2.5 text-[15.5px]">
            <Link href="/about" className="text-[#d8e0e8] hover:text-gold">
              About us
            </Link>
            <Link href="/our-day" className="text-[#d8e0e8] hover:text-gold">
              Daily schedule
            </Link>
            <Link href="/contact" className="text-[#d8e0e8] hover:text-gold">
              Contact
            </Link>
            <Link href="/admissions" className="text-[#d8e0e8] hover:text-gold">
              Admissions
            </Link>
          </div>
        </div>
        <div>
          <div className="mb-4 font-heading text-sm font-semibold tracking-[0.08em] text-white">
            FAMILIES
          </div>
          <div className="grid gap-2.5 text-[15.5px]">
            <a
              href={site.pdfs.packet2026}
              className="text-[#d8e0e8] hover:text-gold"
              target="_blank"
              rel="noopener noreferrer"
            >
              2026–27 packet
            </a>
            <a
              href={site.umcUrl}
              className="text-[#d8e0e8] hover:text-gold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kilohana UMC
            </a>
          </div>
        </div>
        <div>
          <div className="mb-4 font-heading text-sm font-semibold tracking-[0.08em] text-white">
            CONTACT
          </div>
          <div className="text-[15.5px] leading-[1.75] text-[#d8e0e8]">
            {site.addressLines[0]}
            <br />
            {site.addressLines[1]}
            <br />
            <a href={`tel:${site.phoneTel}`} className="font-semibold text-white">
              {site.phoneDisplay}
            </a>
            <br />
            <a href={`mailto:${site.email}`} className="text-[#d8e0e8] hover:text-gold">
              {site.email}
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1180px] flex-wrap justify-between gap-x-6 gap-y-2.5 border-t border-white/12 px-6 pb-10 pt-5 text-[13.5px] text-[#7e8f9e]">
        <span>© 2026 Kilohana Preschool. All rights reserved.</span>
        <span className="font-heading font-semibold tracking-[0.14em] text-[#7fc0be]">
          GROWING · LEARNING · TOGETHER
        </span>
      </div>
    </footer>
  );
}
