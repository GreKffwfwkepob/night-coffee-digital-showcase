type Props = { index: string; eyebrow: string; title: string; lead?: string };

export function SectionHeading({ index, eyebrow, title, lead }: Props) {
  return (
    <div className="mb-10 grid gap-4 md:mb-14 md:grid-cols-[1fr_1.4fr] md:items-end md:gap-10">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="text-foreground">{index}</span> / {eyebrow}
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </div>
      {lead && <p className="max-w-xl text-base text-muted-foreground md:text-lg">{lead}</p>}
    </div>
  );
}
