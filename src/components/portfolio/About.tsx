import { SectionHeading } from "./SectionHeading";

const values = [
  { title: "Простота", text: "Понятная структура и ничего лишнего." },
  { title: "Удобство", text: "Сайт одинаково хорошо работает на телефоне и компьютере." },
  { title: "Открытость", text: "Честно говорю, что могу сделать и сколько это займёт." },
];

export function About() {
  return (
    <section id="about" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading index="03" eyebrow="Обо мне" title="Обо мне" />
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-10">
          <div className="hidden md:block" />
          <div>
            <p className="font-display text-xl font-medium leading-snug tracking-tight sm:text-2xl md:text-[1.75rem]">
              Я начинающий разработчик. Изучаю <span className="text-marker">Vibe Coding</span> —
              создание сайтов и приложений вместе с AI — и делаю практические проекты.
            </p>
            <p className="mt-6 text-muted-foreground md:text-lg">
              Каждый новый проект — это возможность научиться чему-то и сделать полезную вещь для
              реальных задач.
            </p>
            <dl className="mt-10 grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
              {values.map((v) => (
                <div key={v.title}>
                  <dt className="font-mono text-xs uppercase tracking-[0.18em]">{v.title}</dt>
                  <dd className="mt-2 text-sm text-muted-foreground">{v.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
