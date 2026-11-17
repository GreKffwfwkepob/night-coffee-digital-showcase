export function SiteFooter() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
      <p>© {new Date().getFullYear()} My Developer Portfolio</p>
      <p className="font-mono text-xs">Сделано с помощью AI</p>
    </footer>
  );
}
