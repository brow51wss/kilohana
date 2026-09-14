import Link from "next/link";
import { site } from "@/lib/site";

type CtaBandProps = {
  title: string;
  body: string;
  secondary?: { href: string; label: string; external?: boolean };
};

export function CtaBand({ title, body, secondary }: CtaBandProps) {
  return (
    <div className="mt-20 bg-leaf">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-8 px-6 py-16 md:grid-cols-2">
        <div>
          <h2 className="mb-3 font-heading text-[clamp(26px,3.4vw,38px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
            {title}
          </h2>
          <p className="m-0 max-w-[44ch] text-lg leading-relaxed text-[#e6efdd]">
            {body}
          </p>
        </div>
        <div className="flex flex-wrap gap-3.5">
          <a
            href={`tel:${site.phoneTel}`}
            className="bg-white px-[26px] py-[17px] font-heading text-base font-bold text-navy hover:text-leaf"
          >
            Call {site.phoneDisplay}
          </a>
          {secondary ? (
            secondary.external ? (
              <a
                href={secondary.href}
                className="btn-ghost px-6 py-4 font-heading text-base font-semibold text-white"
              >
                {secondary.label}
              </a>
            ) : (
              <Link
                href={secondary.href}
                className="btn-ghost px-6 py-4 font-heading text-base font-semibold text-white"
              >
                {secondary.label}
              </Link>
            )
          ) : null}
        </div>
      </div>
    </div>
  );
}
