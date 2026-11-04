/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/ui/SpotlightCard";
import SplitText from "@/components/ui/SplitText";
import { profile } from "@/utils/profile";

export const metadata: Metadata = {
  title: "About",
  description:
    "Naing Linn Phyo — backend developer and team lead working on real-time, event-driven systems.",
};

/* TODO(nlp): placeholder voice — rewrite in your own words before shipping. */
const principles = [
  {
    title: "Boring where it counts",
    body: "Clever is a cost you pay at 3am. Predictable data flow, explicit boundaries, and a store chosen for the access pattern rather than the hype cycle.",
  },
  {
    title: "Measure, then move",
    body: "Bottlenecks live where you did not look. Profile the query, read the plan, watch the p99 — then change one thing.",
  },
  {
    title: "Lead by unblocking",
    body: "A team lead's throughput is the team's. Review fast, write the thing down once, and hand over context instead of tickets.",
  },
  {
    title: "Ship it visible",
    body: "Small, reversible releases behind flags beat a quarter-long branch. Every deploy should be a non-event.",
  },
];

export default function About() {
  return (
    <div className="flex flex-col gap-16 py-10 max-sm:gap-12">
      <section className="space-y-6">
        <h1 className="text-[clamp(1.9rem,6vw,3.25rem)] font-bold leading-[1] tracking-tightest">
          <SplitText text="About" />
        </h1>

        <Reveal className="max-w-[60ch] space-y-4 text-base leading-relaxed text-muted max-sm:text-sm">
          <p>
            I'm {profile.name}, a backend developer and team lead at{" "}
            <Link href={profile.company.href} className="link-accent">
              {profile.company.name}
            </Link>
            . Most of my day is spent on the unglamorous half of real-time products:
            message fan-out, idempotency, presence, sync, and the schema decisions that
            decide whether any of it still works at ten times the traffic.
          </p>
          <p>
            I work mainly in TypeScript and Go, with PHP and SQL where the ground is
            older. I'm comfortable on the frontend too — this site is Next.js, Tailwind
            and a hand-written GLSL point cloud — but my centre of gravity is services,
            data stores and the seams between them.
          </p>
          <p>
            Lately that has meant leading{" "}
            <Link href={profile.products[0].href ?? "#"} className="link-accent">
              {profile.products[0].name}
            </Link>{" "}
            and Getbak: gRPC between services, Redis on the hot paths, and a
            Postgres/Scylla split chosen per access pattern rather than per preference.
          </p>
        </Reveal>
      </section>

      <section className="space-y-6">
        <SectionHeading index="01" title="How I work" hint="four opinions" />

        <Reveal stagger={0.08} className="grid gap-3 sm:grid-cols-2">
          {principles.map((p) => (
            <SpotlightCard key={p.title}>
              <div className="space-y-2 p-5">
                <h3 className="text-sm font-bold tracking-tightest">{p.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{p.body}</p>
              </div>
            </SpotlightCard>
          ))}
        </Reveal>
      </section>

      <section className="space-y-6">
        <SectionHeading index="02" title="Elsewhere" />

        <Reveal className="flex flex-wrap gap-2">
          {profile.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="rounded-full border border-line/80 px-4 py-2 text-sm text-muted transition-colors duration-300 hover:border-accent/40 hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </Reveal>
      </section>
    </div>
  );
}
