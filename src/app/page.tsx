import Currently from "@/components/Currently";
import Hero from "@/components/Hero";
import PageIndex from "@/components/PageIndex";
import Marquee from "@/components/ui/Marquee";
import { marqueeItems } from "@/utils/stack";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 max-sm:gap-14">
      <Hero />

      <Marquee
        items={marqueeItems}
        duration={42}
        className="-mx-5 border-y border-line/60 py-3 sm:-mx-8"
      />

      <Currently />
      <PageIndex />
    </div>
  );
}
