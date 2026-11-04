import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import SpotlightCard from "./ui/SpotlightCard";
import { currentRole } from "@/utils/exp";
import { focus } from "@/utils/profile";

/**
 * Home-page summary of the job as it stands today: the live role, then the
 * three sides of it. The full history lives on /work.
 */
export default function Currently() {
  return (
    <section className="space-y-6">
      <SectionHeading index="01" title="Currently" hint="the job today" />

      <Reveal className="space-y-3">
        <SpotlightCard>
          <div className="flex flex-wrap items-start justify-between gap-4 p-5">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-2 text-xs text-accent">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-accent motion-safe:animate-ping" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                {currentRole.workDate}
              </span>
              <h3 className="text-lg font-bold tracking-tightest max-sm:text-base">
                {currentRole.title}
              </h3>
              <p className="text-sm text-muted">{currentRole.company}</p>
            </div>

            <Link
              href="/work"
              className="group inline-flex items-center gap-1.5 rounded-full border border-line/80 px-3.5 py-1.5 text-sm text-muted transition-colors duration-300 hover:border-accent/40 hover:text-accent"
            >
              Full history
              <FiArrowUpRight
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          {currentRole.summary ? (
            <p className="border-t border-line/60 px-5 py-4 text-sm leading-relaxed text-muted">
              {currentRole.summary}
            </p>
          ) : null}
        </SpotlightCard>

        <div className="grid gap-3 sm:grid-cols-3">
          {focus.map((item) => (
            <SpotlightCard key={item.label}>
              <div className="space-y-2 p-5">
                <h4 className="text-xs uppercase tracking-[0.18em] text-accent">
                  {item.label}
                </h4>
                <p className="text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
