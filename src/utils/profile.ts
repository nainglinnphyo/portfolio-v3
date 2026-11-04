/**
 * Single source of truth for the identity shown across the site.
 *
 * TODO(nlp): `status`, `tagline` and `location` are drafts written to fill
 * the layout — edit them to taste, they are not sourced from anywhere.
 */
export const profile = {
  name: "Naing Linn Phyo",
  role: "Team Lead",
  tagline: "Backend engineer & team lead",
  location: "Yangon, MM",
  company: { name: "xsphere.co", href: "https://xsphere.co" },
  products: [
    { name: "Fary Taxi", href: "https://farytaxi.com" },
    { name: "Getbak", href: null as string | null },
  ],
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/dev-nainglinnphyo" },
    { label: "GitHub", href: "https://github.com/nainglinnphyo" },
    { label: "Email", href: "mailto:nainglinnphyo24@gmail.com" },
  ],
  /** Shown as the hero's live status chip. */
  status: "Open to interesting backend problems",
};

/* Derived from utils/exp.ts — bump these when that list changes. */
export const metrics = [
  { value: "4+", label: "Years shipping" },
  { value: "2", label: "Products led" },
  { value: "4", label: "Languages in anger" },
];
