/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Magnetic from "./ui/Magnetic";
import ProductList from "./ui/ProductList";
import SplitText from "./ui/SplitText";
import { metrics, profile } from "@/utils/profile";

/* WebGL never runs on the server, and keeping it out of the initial bundle
   means the headline is interactive long before three.js is parsed. */
const HeroScene = dynamic(() => import("./three/HeroScene"), { ssr: false });

export default function Hero() {
  const section = useRef<HTMLElement>(null);
  const reduced = useSafeReducedMotion();

  const { scrollYProgress } = useScroll({
    target: section,
    offset: ["start start", "end start"],
  });

  /* The copy drifts up and dissolves as you scroll past it; the canvas
     underneath has its own, slower reaction (see HeroScene). */
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={section}
      className="relative flex min-h-[86svh] flex-col justify-center py-16 max-sm:min-h-[78svh]"
    >
      <HeroScene />

      <motion.div
        style={reduced ? undefined : { y, opacity }}
        className="relative space-y-8"
      >
        {/* Status chip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2.5 rounded-full border border-line/80 bg-elevated/60 py-1.5 pl-2.5 pr-3.5 text-xs text-muted backdrop-blur"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent motion-safe:animate-ping" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          {profile.status}
        </motion.div>

        {/* Name + role */}
        <div className="space-y-2">
          <h1 className="text-[clamp(2.25rem,7vw,4.5rem)] font-bold leading-[0.95] tracking-tightest">
            <SplitText text={profile.name} />
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="flex flex-wrap items-center gap-x-3 gap-y-1 text-base text-muted max-sm:text-sm"
          >
            <span className="text-fg">{profile.role}</span>
            <span className="h-3 w-px bg-line" aria-hidden="true" />
            <span>{profile.tagline}</span>
            <span className="h-3 w-px bg-line" aria-hidden="true" />
            <span>{profile.location}</span>
          </motion.p>
        </div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[58ch] text-base leading-relaxed text-muted max-sm:text-sm"
        >
          I'm {profile.role} at{" "}
          <Link href={profile.company.href} className="link-accent">
            {profile.company.name}
          </Link>
          , where I own the business logic layer across our products and run the
          product-management side of delivery — roadmap, scoping and the translation
          of business requirements into something a team can build. I came up through
          backend in JavaScript, TypeScript, PHP and Golang, and still work in
          microservice territory: gRPC, Redis, event-driven systems. Products
          I&apos;ve led: <ProductList />.
        </motion.p>

        {/* Metrics */}
        <motion.dl
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap gap-x-10 gap-y-4 border-y border-line/70 py-4"
        >
          {metrics.map((m) => (
            <div key={m.label}>
              <dt className="text-xs text-muted">{m.label}</dt>
              <dd className="text-xl font-bold tabular-nums tracking-tightest">
                {m.value}
              </dd>
            </div>
          ))}
        </motion.dl>

        {/* Calls to action */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center gap-3"
        >
          <Magnetic strength={7}>
            <a
              href="/work"
              className="group inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent transition-colors duration-300 hover:bg-accent/20"
            >
              View work
              <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Magnetic>

          <Magnetic strength={7}>
            <a
              href={profile.links[2].href}
              className="group inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-fg transition-colors duration-300 hover:border-fg/40"
            >
              Get in touch
              <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="pointer-events-none absolute bottom-2 left-0 flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.2em] text-muted max-sm:hidden"
      >
        <span className="relative h-8 w-px overflow-hidden bg-line">
          <span className="absolute inset-x-0 h-4 bg-accent motion-safe:animate-scan-y" />
        </span>
        scroll
      </motion.div>
    </section>
  );
}
