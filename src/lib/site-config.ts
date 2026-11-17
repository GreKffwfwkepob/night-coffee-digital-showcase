/**
 * Единое место для данных сайта.
 *
 * Контакты пока не указаны — это место под реальные данные:
 *  - `telegram.href` — ссылка на Telegram, например "https://t.me/username";
 *  - `telegram.label` — то, что показываем рядом, например "@username";
 *  - `contact.href` / `contact.label` — любой другой способ связи (email, форма...).
 *
 * Пока поля пустые, кнопки в разделе контактов выглядят отключёнными и рядом
 * показывается подсказка-заглушка. Ничего выдуманного здесь быть не должно.
 */
export const siteConfig = {
  name: "My Developer Portfolio",
  telegram: {
    label: "",
    href: "",
  },
  contact: {
    label: "",
    href: "",
  },
} as const;

export const hasTelegram = siteConfig.telegram.href.trim().length > 0;
export const hasContact = siteConfig.contact.href.trim().length > 0;
