"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef, useState } from "react";
import { nav } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href.startsWith("/#")) return false;
  return pathname === href;
}

function EnrollLink({
  onNavigate,
  className = "",
}: {
  onNavigate: () => void;
  className?: string;
}) {
  return (
    <Link
      href="/admissions"
      onClick={onNavigate}
      className={`inline-flex items-center justify-center bg-hibiscus px-[18px] text-center font-heading text-sm font-bold tracking-wide text-white hover:opacity-90 ${className}`}
    >
      Enroll for 2026–27
    </Link>
  );
}

function NavLinks({
  pathname,
  onNavigate,
  mobile,
}: {
  pathname: string;
  onNavigate: () => void;
  mobile?: boolean;
}) {
  const links = nav.map((item) => {
    const active = isActive(pathname, item.href);
    return (
      <Link
        key={item.href}
        href={item.href}
        onClick={onNavigate}
        className={`${
          mobile ? "w-full text-center text-[28px] leading-tight" : "text-[15.5px]"
        } ${
          active
            ? "border-b-2 border-leaf pb-0.5 font-bold text-leaf"
            : "font-semibold text-navy hover:text-leaf"
        }`}
      >
        {item.label}
      </Link>
    );
  });

  if (mobile) {
    return (
      <div className="flex w-full flex-1 flex-col items-center justify-center gap-7 text-center">
        {links}
      </div>
    );
  }

  return (
    <>
      {links}
      <EnrollLink onNavigate={onNavigate} className="py-3" />
    </>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [menuTop, setMenuTop] = useState(0);
  const [showIcon, setShowIcon] = useState(!isHome);
  const [hideNav, setHideNav] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const lastY = useRef(0);

  useLayoutEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open && headerRef.current) {
      setMenuTop(headerRef.current.getBoundingClientRect().bottom);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useLayoutEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    lastY.current = window.scrollY;

    const update = () => {
      const headerBottom = headerRef.current?.getBoundingClientRect().bottom ?? 0;
      const banner = document.getElementById("top");

      if (isHome && banner) {
        setShowIcon(banner.getBoundingClientRect().bottom <= headerBottom);
      } else {
        setShowIcon(true);
      }

      if (!mq.matches || open) {
        setHideNav(false);
        lastY.current = window.scrollY;
        return;
      }

      const y = window.scrollY;
      const delta = y - lastY.current;
      lastY.current = y;
      const bannerPast = banner ? banner.getBoundingClientRect().bottom <= 0 : false;

      if (!bannerPast) {
        setHideNav(false);
        return;
      }
      if (Math.abs(delta) < 4) return;
      setHideNav(delta > 0);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    mq.addEventListener("change", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      mq.removeEventListener("change", update);
    };
  }, [isHome, open]);

  return (
    <header
      ref={headerRef}
      className="relative sticky top-0 z-20 border-b border-border bg-cream"
    >
      <div
        className={`grid transition-[grid-template-rows] duration-200 ${
          hideNav ? "grid-rows-[0fr]" : "grid-rows-[1fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-6 py-3">
            <Link
              href="/"
              aria-label="Kilohana Preschool home"
              className="flex items-center"
              onClick={() => setOpen(false)}
            >
              <span
                className={`overflow-hidden transition-[max-width,opacity,margin] duration-200 ${
                  showIcon ? "mr-3 max-w-[90px] opacity-100" : "max-w-0 opacity-0"
                }`}
                aria-hidden={!showIcon}
              >
                <Image
                  src="/assets/icon-tree.png"
                  alt=""
                  width={5087}
                  height={2761}
                  sizes="85px"
                  quality={100}
                  className="h-[46px] w-auto max-w-none"
                  priority
                />
              </span>
              <Image
                src="/assets/wordmark.png"
                alt="Kilohana Preschool"
                width={4548}
                height={678}
                sizes="132px"
                quality={100}
                className="h-auto w-[132px]"
                priority
              />
            </Link>

            <div className="flex items-center gap-3 lg:hidden">
              <div className="hidden md:block lg:hidden">
                <EnrollLink
                  onNavigate={() => setOpen(false)}
                  className="h-11"
                />
              </div>
              <button
                type="button"
                className="inline-flex h-11 min-w-11 items-center justify-center border border-border px-5 font-heading text-sm font-bold"
                aria-expanded={open}
                aria-controls="site-nav"
                onClick={() => setOpen((v) => !v)}
              >
                {open ? "Close" : "Menu"}
              </button>
            </div>

            <nav className="hidden items-center gap-x-[26px] gap-y-2 lg:flex lg:flex-wrap">
              <NavLinks pathname={pathname} onNavigate={() => setOpen(false)} />
            </nav>
          </div>
        </div>
      </div>

      <EnrollLink
        onNavigate={() => setOpen(false)}
        className="w-full py-3 md:hidden"
      />

      <nav
        id="site-nav"
        className={`${open ? "flex" : "hidden"} fixed inset-x-0 bottom-0 z-20 flex-col items-center overflow-y-auto bg-cream px-6 pt-8 pb-[max(5rem,calc(env(safe-area-inset-bottom)+3.5rem))] lg:hidden`}
        style={open ? { top: menuTop } : undefined}
      >
        <NavLinks
          pathname={pathname}
          onNavigate={() => setOpen(false)}
          mobile
        />
      </nav>
    </header>
  );
}
