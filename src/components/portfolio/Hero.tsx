import { ArrowDown, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = ["Идея и структура", "Дизайн и тексты", "Адаптация под смартфоны", "Публикация"];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 pb-20 pt-16 sm:px-8 md:pb-28 md:pt-24 lg:grid-cols-[1.35fr_1fr] lg:items-center">
        <div className="animate-fade-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground shadow-soft">
            <span className="size-1.5 rounded-full bg-ring" />
            Vibe Coder · портфолио
          </p>
          <h1 className="mt-6 font-display text-[2.1rem] font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.6rem]">
            Создаю сайты и цифровые решения{" "}
            <span className="text-marker">с помощью AI</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Сайты, цифровые меню и простые Telegram-боты — современно, понятно и удобно на любом
            устройстве.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="hero" size="xl">
              <a href="#projects">
                Смотреть проекты <ArrowDown />
              </a>
            </Button>
            <Button asChild variant="line" size="xl">
              <a href="#contact">Связаться</a>
            </Button>
          </div>
        </div>

        <div
          className="animate-fade-up rounded-2xl border border-border bg-card p-5 shadow-lift [animation-delay:150ms] sm:p-6"
          aria-hidden
        >
          <div className="flex items-center gap-1.5 border-b border-border pb-4">
            <span className="size-2.5 rounded-full bg-border" />
            <span className="size-2.5 rounded-full bg-border" />
            <span className="size-2.5 rounded-full bg-border" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">prompt.txt</span>
          </div>
          <p className="mt-5 font-mono text-sm leading-relaxed">
            <span className="text-muted-foreground">&gt;</span> Сделай сайт для кофейни с меню и
            контактами
            <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-foreground animate-blink" />
          </p>
          <ul className="mt-6 space-y-2.5">
            {steps.map((s) => (
              <li key={s} className="flex items-center gap-3 text-sm">
                <span className="grid size-5 place-items-center rounded-full bg-accent text-accent-foreground">
                  <Check className="size-3" strokeWidth={3} />
                </span>
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
