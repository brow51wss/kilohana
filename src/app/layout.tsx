import type { Metadata } from "next";
import { Montserrat, Source_Sans_3 } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { UtilityBar } from "@/components/UtilityBar";
import { site } from "@/lib/site";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-source",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kilohanapreschool.com"),
  title: {
    default: `${site.name} | Niu Valley, Honolulu`,
    template: `%s | ${site.name}`,
  },
  description:
    "A non-profit, non-denominational preschool for keiki ages two to six in Niu Valley, East Honolulu. Serving families since 1966.",
  icons: {
    icon: "/assets/favicon.png",
    apple: "/assets/favicon.png",
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "A preschool for ages 2–6 in Niu Valley",
    images: [
      {
        url: "/assets/opengraph.jpg",
        width: 1024,
        height: 700,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A preschool for ages 2–6 in Niu Valley",
    images: ["/assets/opengraph.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-cream text-navy">
        <UtilityBar />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
