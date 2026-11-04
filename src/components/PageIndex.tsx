import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import Reveal from "./ui/Reveal";

const pages = [
  { href: "/work", index: "02", title: "Work", blurb: "Three roles, one company, and what each actually involved." },
  { href: "/stack", index: "03", title: "Stack", blurb: "The languages, stores and platform pieces I reach for." },
  { href: "/about", index: "04", title: "About", blurb: "Longer form: how I work, and the opinions behind it." },
];

/**
 * The home page's way out to the rest of the site. Rows rather than cards —
 * they read as a table of contents, which is what they are.
 */
export default function PageIndex() {
  return (
    <nav aria-label="Sections" className="border-t border-line/70">
      <ul>
        {pages.map((page, i) => (
          <li key={page.href}>
            <Reveal delay={i * 0.06}>
              <Link
                href={page.href}
                className="group flex items-center gap-5 border-b border-line/70 py-6 transition-colors duration-500 hover:border-accent/30"
              >
                <span className="text-xs tabular-nums text-muted transition-colors duration-300 group-hover:text-accent">
                  {page.index}
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-lg font-bold tracking-tightest transition-transform duration-500 ease-swift group-hover:translate-x-1 max-sm:text-base">
                    {page.title}
                  </span>
                  <span className="mt-0.5 block text-sm text-muted">{page.blurb}</span>
                </span>

                <FiArrowUpRight
                  aria-hidden="true"
                  className="shrink-0 text-muted transition-all duration-500 ease-swift group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                />
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>
    </nav>
  );
}
