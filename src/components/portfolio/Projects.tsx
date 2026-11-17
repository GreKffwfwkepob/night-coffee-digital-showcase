import { ArrowUpRight, Plus } from "lucide-react";
import nightCoffee from "@/assets/night-coffee-preview.jpg";
import { SectionHeading } from "./SectionHeading";

const NIGHT_COFFEE_URL = "https://night-coffee-demo.lovable.app";

export function Projects() {
  return (
    <section id="projects" className="border-t border-border bg-secondary/60">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading
          index="02"
          eyebrow="Работы"
          title="Мои проекты"
          lead="Практические проекты, которые я создаю, изучая Vibe Coding."
        />
        <div className="grid gap-5 lg:grid-cols-[1.6fr_1fr]">
          <a
            href={NIGHT_COFFEE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
          >
            <div className="overflow-hidden border-b border-border">
              <img
                src={nightCoffee}
                alt="Главный экран сайта Night Coffee Demo"
                width={1200}
                height={708}
                loading="lazy"
                className="aspect-[1200/708] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex items-start justify-between gap-4 p-6 sm:p-7">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-xl font-semibold tracking-tight">
                    Night Coffee Demo
                  </h3>
                  <span className="rounded-full bg-accent px-2.5 py-0.5 font-mono text-[11px] text-accent-foreground">
                    демо
                  </span>
                </div>
                <p className="mt-2 text-muted-foreground">
                  Демонстрационный сайт кофейни: главный экран, меню и контакты.
                </p>
                <p className="mt-4 font-mono text-xs text-muted-foreground">
                  night-coffee-demo.lovable.app
                </p>
              </div>
              <span className="grid size-11 shrink-0 place-items-center rounded-full border border-border transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                <ArrowUpRight className="size-5" />
                <span className="sr-only">Открыть сайт</span>
              </span>
            </div>
          </a>

          <div className="flex min-h-56 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border p-8 text-center">
            <span className="grid size-11 place-items-center rounded-full bg-card shadow-soft">
              <Plus className="size-5 text-muted-foreground" />
            </span>
            <p className="mt-4 font-display text-base font-semibold">Новые проекты в работе</p>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
              Здесь будут появляться следующие работы.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
