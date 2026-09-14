import { site } from "@/lib/site";

export function UtilityBar() {
  return (
    <div className="hidden bg-navy text-[13.5px] text-[#d8e0e8] lg:block">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-2">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <span>{site.address}</span>
          <span className="text-[#7fc0be]">{site.neighborhood}</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <a href={`tel:${site.phoneTel}`} className="font-semibold text-white">
            {site.phoneDisplay}
          </a>
          <a href={`mailto:${site.email}`} className="text-[#d8e0e8] hover:text-white">
            {site.email}
          </a>
        </div>
      </div>
    </div>
  );
}
