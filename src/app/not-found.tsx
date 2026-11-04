import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="flex min-h-[70svh] flex-col items-center justify-center gap-5 text-center">
      <p className="text-[clamp(4rem,18vw,9rem)] font-bold leading-none tracking-tightest text-gradient motion-safe:animate-shimmer">
        404
      </p>

      <div className="space-y-1">
        <h1 className="text-lg font-bold tracking-tightest">
          Nothing routed here
          <span className="text-accent motion-safe:animate-caret">_</span>
        </h1>
        <p className="text-sm text-muted">
          The page you asked for does not exist, or never did.
        </p>
      </div>

      <Link
        href="/"
        className="group inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent transition-colors duration-300 hover:bg-accent/20"
      >
        <FiArrowLeft className="transition-transform duration-300 group-hover:-translate-x-0.5" />
        Back home
      </Link>
    </div>
  );
}
