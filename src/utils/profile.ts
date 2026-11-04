/**
 * Single source of truth for the identity shown across the site.
 *
 * TODO(nlp): `status`, `tagline` and `location` are drafts written to fill
 * the layout — edit them to taste, they are not sourced from anywhere.
 */
export const profile = {
  name: "Naing Linn Phyo",
  role: "Head of Department",
  tagline: "Business logic & delivery",
  location: "Yangon, MM",
  company: { name: "xsphere.co", href: "https://xsphere.co" },
  /** Rendered by components/ui/ProductList.tsx — add one here and the hero
      and About page both pick it up. */
  products: [
    { name: "FARY", href: "https://farytaxi.com" as string | null },
    { name: "Getbak", href: null as string | null },
    { name: "Room Social", href: "https://room.com.mm" as string | null },
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
  { value: "3", label: "Roles, one company" },
  { value: "3", label: "Products led" },
];

/** The two halves of the current job, used on the home page. */
export const focus = [
  {
    label: "Engineering",
    body: "The business logic layer: domain models, service boundaries and the contracts between them. One rule, one home.",
  },
  {
    label: "Product",
    body: "Roadmap, scoping and sprint planning — turning commercial goals into specs a team can build from without guessing.",
  },
  {
    label: "People",
    body: "Hiring, mentoring and a review culture, so quality does not depend on any one person being in the room.",
  },
];
