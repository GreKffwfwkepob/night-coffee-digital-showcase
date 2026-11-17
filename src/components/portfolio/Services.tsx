import { Bot, Globe, QrCode, type LucideIcon } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

type Service = { icon: LucideIcon; title: string; text: string; points: string[] };

const services: Service[] = [
  {
    icon: Globe,
    title: "Сайты",
    text: "Лендинги и сайты-визитки для небольших проектов, мастеров и локального бизнеса.",
    points: ["Современный дизайн", "Адаптация под смартфоны", "Публикация в интернете"],
  },
  {
    icon: QrCode,
    title: "Цифровые меню",
    text: "Меню для кафе и ресторанов, которое открывается по ссылке или QR-коду.",
    points: ["Удобно читать с телефона", "Категории и цены", "Легко обновлять"],
  },
  {
    icon: Bot,
    title: "Telegram-боты",
    text: "Простые боты, которые помогают общаться с клиентами в Telegram.",
    points: ["Ответы на частые вопросы", "Приём заявок", "Кнопки и полезные ссылки"],
  },
];

export function Services() {
  return (
    <section id="services" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading
          index="01"
          eyebrow="Услуги"
          title="Мои услуги"
          lead="Помогаю быстро запустить понятное цифровое решение — без лишней сложности."
        />
        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-7"
            >
              <div className="flex items-start justify-between">
                <span className="grid size-12 place-items-center rounded-xl bg-secondary transition-colors group-hover:bg-accent">
                  <s.icon className="size-5" />
                </span>
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="mt-8 font-display text-xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-3 text-muted-foreground">{s.text}</p>
              <ul className="mt-6 space-y-2 border-t border-border pt-5 text-sm">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5">
                    <span className="size-1.5 rounded-full bg-ring" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
