import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hasContact, siteConfig } from "@/lib/site-config";

export function Contact() {
  return (
    <section id="contact" className="px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-primary px-6 py-16 text-primary-foreground sm:px-12 md:py-24">
        <div
          className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-accent/25 blur-3xl"
          aria-hidden
        />
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">04 / Контакты</p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Есть идея для сайта, меню или бота?
        </h2>
        <p className="mt-5 max-w-lg text-ink-muted md:text-lg">
          Напишите мне — обсудим задачу и подберём подходящее решение.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          {hasContact ? (
            <Button asChild variant="lime" size="xl">
              <a href={siteConfig.contact.href} target="_blank" rel="noopener noreferrer">
                <MessageCircle /> Связаться <ArrowUpRight />
              </a>
            </Button>
          ) : (
            <>
              <Button variant="lime" size="xl" disabled>
                <MessageCircle /> Связаться
              </Button>
              <p className="rounded-xl border border-dashed border-ink-line px-4 py-3 font-mono text-xs text-ink-muted">
                Место для контакта: Telegram, email или другой способ связи
              </p>
            </>
          )}
        </div>
        {hasContact && siteConfig.contact.label && (
          <p className="mt-4 font-mono text-sm text-ink-muted">{siteConfig.contact.label}</p>
        )}
      </div>
    </section>
  );
}
