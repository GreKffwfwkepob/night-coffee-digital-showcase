/**
 * Единое место для данных сайта.
 *
 * Реальные контакты хранятся только здесь:
 *  - `telegram.href` — ссылка на Telegram (сейчас https://t.me/AoimineDayki);
 *  - `telegram.label` — то, что показываем рядом (сейчас @AoimineDayki);
 *  - `contact.href` / `contact.label` — любой другой способ связи (email, форма...);
 *    пока пустой — вторая кнопка в разделе контактов не показывается.
 *
 * Ничего выдуманного здесь быть не должно: добавляем только то, что дал пользователь.
 */
export const siteConfig = {
  name: "My Developer Portfolio",
  telegram: {
    label: "@AoimineDayki",
    href: "https://t.me/AoimineDayki",
  },
  contact: {
    label: "",
    href: "",
  },
} as const;

export const hasTelegram = siteConfig.telegram.href.trim().length > 0;
export const hasContact = siteConfig.contact.href.trim().length > 0;
