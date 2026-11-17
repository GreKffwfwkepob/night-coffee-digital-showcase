
const values = [
  { title: "Простота", text: "Понятная структура и ничего лишнего." },
  { title: "Удобство", text: "Сайт одинаково хорошо работает на телефоне и компьютере." },
  { title: "Открытость", text: "Честно говорю, что могу сделать и сколько это займёт." },
];

export function About() {
  return (
    <section id="about" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:gap-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="text-foreground">03</span> / Обо мне
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Обо мне
            </h2>
          </div>
          <div className="md:pt-9">
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
