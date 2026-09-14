export const site = {
  name: "Kilohana Preschool",
  tagline: "Growing · Learning · Together",
  phoneDisplay: "808.373.4434",
  phoneTel: "+18083734434",
  faxDisplay: "808.373.3372",
  email: "director@kilohanapreschool.com",
  address: "5829 Mahimahi Street, Honolulu, HI 96821",
  addressLines: ["5829 Mahimahi Street", "Honolulu, HI 96821"] as const,
  neighborhood: "Niu Valley, East Honolulu",
  mapsUrl:
    "https://www.google.com/maps/place/Kilohana+Preschool/@21.2828179,-157.7354589,17z",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.713312424583!2d-157.73545888506305!3d21.282812885861272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c00129153c98d77%3A0x276e52b7f94803e0!2sKilohana+Preschool!5e0!3m2!1sen!2sus!4v1520976550043",
  umcUrl: "https://kilohanaumc.org",
  pdfs: {
    packet2026:
      "https://kilohanapreschool.com/wp-content/uploads/2026/01/Kilohana-Enrollment-2026-27-Web-1.pdf",
    packet2025:
      "https://kilohanapreschool.com/wp-content/uploads/2025/02/Kilohana-Enrollment-Web.pdf",
    brochure:
      "https://kilohanapre.wpenginepowered.com/wp-content/uploads/2018/05/Kilohan_Preschool_Brochure_May2018.pdf",
  },
} as const;

export const nav = [
  { href: "/about", label: "About" },
  { href: "/our-day", label: "Our Day" },
  { href: "/#facility", label: "Facility" },
  { href: "/admissions", label: "Admissions" },
  { href: "/contact", label: "Visit" },
] as const;

export const childAges = [
  "2 years",
  "3 years",
  "4 years",
  "5 years",
  "6 years",
] as const;
