import type { Metadata } from "next";
import Stack from "@/components/Stack";
import Marquee from "@/components/ui/Marquee";
import PageHeader from "@/components/ui/PageHeader";
import { marqueeItems } from "@/utils/stack";

export const metadata: Metadata = {
  title: "Stack",
  description:
    "The languages, backend frameworks, data stores and platform tooling Naing Linn Phyo works with.",
};

export default function StackPage() {
  return (
    <div className="flex flex-col gap-12 py-10 max-sm:gap-10">
      <PageHeader
        index="03"
        title="Stack"
        kicker="the toolkit"
        lede="What I reach for, and roughly in what order. Nothing here is on the list because it is fashionable — a store earns its place by matching an access pattern, not a benchmark."
      />

      <Stack />

      <Marquee
        items={marqueeItems}
        duration={42}
        className="-mx-5 border-y border-line/60 py-3 sm:-mx-8"
      />
    </div>
  );
}
