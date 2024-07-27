import LineAnimation from "@/components/Line";
import LineAnimationTwo from "@/components/LineAnimateTwo";
import { ThemeProvider } from "next-themes";
// import from

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="relative">
        <div className="absolute right-0 top-72 -z-10">
          <LineAnimationTwo />
        </div>
        <div className="absolute left-0 top-72 -z-10 lg:block hidden">
          <LineAnimationTwo />
        </div>
        <div className="absolute right-64 top-72 -z-10 lg:block hidden">
          <LineAnimationTwo />
        </div>

        <div className="absolute right-0 bottom-40 2 -z-10">
          <LineAnimationTwo />
        </div>
        <div className="absolute left-0 bottom-40 -z-10 lg:block hidden">
          <LineAnimationTwo />
        </div>
        <div className="absolute right-64 bottom-40 -z-10 lg:block hidden">
          <LineAnimationTwo />
        </div>
        {children}
      </div>
    </ThemeProvider>
  );
}
