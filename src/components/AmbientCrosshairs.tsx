import LineAnimationTwo from "./LineAnimateTwo";

/**
 * The v3 crosshair field, kept and tidied: same motif, now tokenised and
 * placed on a fixed layer so it cannot stretch the document, and hidden
 * under `prefers-reduced-motion` along with its animations.
 */
export default function AmbientCrosshairs() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-20 overflow-hidden motion-reduce:hidden"
    >
      <div className="absolute right-0 top-[22%]">
        <LineAnimationTwo />
      </div>
      <div className="absolute left-0 top-[26%] hidden lg:block">
        <LineAnimationTwo />
      </div>
      <div className="absolute right-[18%] top-[16%] hidden lg:block">
        <LineAnimationTwo />
      </div>
      <div className="absolute bottom-[18%] right-0">
        <LineAnimationTwo />
      </div>
      <div className="absolute bottom-[22%] left-0 hidden lg:block">
        <LineAnimationTwo />
      </div>
      <div className="absolute bottom-[12%] right-[22%] hidden lg:block">
        <LineAnimationTwo />
      </div>
    </div>
  );
}
