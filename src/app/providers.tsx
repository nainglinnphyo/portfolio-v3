import { ThemeProvider } from "next-themes";
// import from

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="relative">
        {children}
      </div>
    </ThemeProvider>
  );
}
