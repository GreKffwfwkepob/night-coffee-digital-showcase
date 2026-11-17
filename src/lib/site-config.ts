/**
 * Единое место для данных сайта.
 * Контакт пока не указан: заполните `contact.href` (например, "https://t.me/username"
 * или "mailto:name@example.com") и `contact.label` — кнопки «Связаться» заработают сами.
 */
export const siteConfig = {
  name: "My Developer Portfolio",
  contact: {
    label: "",
    href: "",
  },
} as const;

export const hasContact = siteConfig.contact.href.trim().length > 0;
