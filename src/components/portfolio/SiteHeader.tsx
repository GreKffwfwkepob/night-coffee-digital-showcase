import { Button } from "@/components/ui/button";

const links = [
  { href: "#services", label: "Услуги" },
  { href: "#projects", label: "Проекты" },
  { href: "#about", label: "Обо мне" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2 font-display text-sm font-semibold tracking-tight">
          <span className="grid size-7 place-items-center rounded-md bg-primary font-mono text-xs text-accent">
            {"</>"}
          </span>
          <span className="hidden sm:inline">My Developer Portfolio</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <Button asChild variant="hero" size="sm" className="px-4">
          <a href="#contact">Связаться</a>
        </Button>
      </div>
    </header>
  );
}
