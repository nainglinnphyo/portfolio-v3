/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { profile } from "@/utils/profile";

export const metadata: Metadata = {
  title: "About",
  description:
    "Naing Linn Phyo — Head of Department at xsphere.co, working across the business logic layer, delivery planning and the team.",
};

/* TODO(nlp): placeholder voice — rewrite in your own words before shipping. */
const principles = [
  {
    title: "One rule, one home",
    body: "A business rule re-implemented in three clients is three rules that will disagree by Friday. The logic layer exists so behaviour has exactly one place to live, and every surface reads it from there.",
  },
  {
    title: "Boring where it counts",
    body: "Clever is a cost you pay at 3am. Predictable data flow, explicit boundaries, and a store chosen for the access pattern rather than the hype cycle.",
  },
  {
    title: "A spec is a kindness",
    body: "Most of what looks like an engineering problem is an unanswered product question. Doing the PM work properly — scope, edge cases, what we are not building — is what stops the team guessing in code review.",
  },
  {
    title: "Measure, then move",
    body: "Bottlenecks live where you did not look. Profile the query, read the plan, watch the p99 — then change one thing. The same goes for process.",
  },
  {
    title: "Lead by unblocking",
    body: "A department's throughput is not the lead's output. Review fast, write the thing down once, and hand over context instead of tickets.",
  },
  {
    title: "Ship it visible",
    body: "Small, reversible releases behind flags beat a quarter-long branch. Every deploy should be a non-event, and the boring ones are the point.",
  },
];

export default function About() {
  return (
    <div className="flex flex-col gap-14 py-10 max-sm:gap-12">
      <PageHeader
        index="04"
        title="About"
        kicker="longer form"
        lede="Backend engineer by training, now responsible for the layer every product shares and the plan that decides what goes into it."
      />

      <Reveal className="max-w-[60ch] space-y-4 text-base leading-relaxed text-muted max-sm:text-sm">
        <p>
          I'm {profile.name}, {profile.role} at{" "}
          <Link href={profile.company.href} className="link-accent">
            {profile.company.name}
          </Link>
          . My remit is the business logic layer across our product line — the
          domain models, the service boundaries, and the contracts between them —
          so that a rule lives in one place instead of being re-implemented, slightly
          differently, in every client that needs it.
        </p>
        <p>
          The role picked up the product-management half of delivery along the way:
          roadmap, scoping, sprint planning, and sitting between the commercial side
          and the engineers to turn one into something the other can build. A fair
          amount of the job is saying what we are <em>not</em> doing this quarter,
          and being able to explain why.
        </p>
        <p>
          I came up through backend. Most of my hands-on years went on the
          unglamorous half of real-time products: message fan-out, idempotency,
          presence, sync, and the schema decisions that decide whether any of it
          still works at ten times the traffic. I work mainly in TypeScript and Go,
          with PHP and SQL where the ground is older, and I am comfortable on the
          frontend too — this site is Next.js, Tailwind and a hand-written GLSL point
          cloud — but my centre of gravity is services, data stores and the seams
          between them.
        </p>
        <p>
          Before this I led development on{" "}
          <Link href={profile.products[0].href ?? "#"} className="link-accent">
            {profile.products[0].name}
          </Link>{" "}
          and Getbak: gRPC between services, Redis on the hot paths, and a
          Postgres/Scylla split chosen per access pattern rather than per preference.
        </p>
      </Reveal>

      <section className="space-y-6">
        <SectionHeading index="01" title="How I work" hint="six opinions" />

        <Reveal className="grid gap-3 sm:grid-cols-2">
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
