import Image from "next/image";
import Link from "next/link";

type PageHeroProps = {
  title: string;
  lede: string;
  crumb: string;
  image: string;
  objectPosition?: string;
};

export function PageHero({
  title,
  lede,
  crumb,
  image,
  objectPosition = "center",
}: PageHeroProps) {
  return (
    <div className="relative overflow-hidden bg-navy">
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover"
        style={{ objectPosition }}
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/92 to-navy/55" />
      <div className="relative mx-auto max-w-[1180px] px-6 py-14 md:py-[56px]">
        <div className="mb-4 text-[13.5px] text-[#9fb0bf]">
          <Link href="/" className="text-gold hover:text-white">
            Home
          </Link>
          &nbsp;/&nbsp; {crumb}
        </div>
        <h1 className="mb-4 font-heading text-[clamp(34px,5vw,56px)] font-extrabold leading-[1.05] tracking-[-0.025em] text-white">
          {title}
        </h1>
        <p className="m-0 max-w-[54ch] text-[19px] leading-relaxed text-[#e8edf2]">
          {lede}
        </p>
      </div>
    </div>
  );
}
