import type { ReactNode } from "react";
import Reveal from "./Reveal";
import SplitText from "./SplitText";

type Props = {
  index: string;
  title: string;
  /** Short eyebrow beside the index — not the title, which sits below it. */
  kicker: string;
  lede: ReactNode;
};

/** The masthead every sub-page opens with: index, kinetic title, one lede. */
export default function PageHeader({ index, title, kicker, lede }: Props) {
  return (
    <header className="space-y-5 border-b border-line/70 pb-10">
      <div className="flex items-center gap-3">
        <span className="text-xs tabular-nums text-accent">{index}</span>
        <span aria-hidden="true" className="h-px w-10 bg-line" />
        <span className="text-xs uppercase tracking-[0.2em] text-muted">
          {kicker}
        </span>
      </div>

      <h1 className="text-[clamp(2rem,6.5vw,3.6rem)] font-bold leading-[1] tracking-tightest">
        <SplitText text={title} />
      </h1>

      <Reveal as="p" className="max-w-[58ch] text-base leading-relaxed text-muted max-sm:text-sm">
        {lede}
      </Reveal>
    </header>
  );
}
