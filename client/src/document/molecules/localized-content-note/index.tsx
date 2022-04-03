import { NoteBanner } from "../note-banner";

export function LocalizedContentNote({
  isActive,
  locale,
}: {
  isActive: boolean;
  locale: string;
}) {
  const activeLocaleNoteContent = {
    "en-US": {
      linkText:
        "This page was translated from English by the community. Learn more and join the MDN Web Docs community.",
    },
  };
  const inactiveLocaleNoteContent = {
    "en-US": {
      linkText:
        "This page was translated from English by the community, but it's not maintained and may be out-of-date. To help maintain it, learn how to activate locales.",
    },
  };

  const linkText = isActive
    ? (activeLocaleNoteContent[locale] &&
        activeLocaleNoteContent[locale].linkText) ||
      activeLocaleNoteContent["en-US"].linkText
    : (inactiveLocaleNoteContent[locale] &&
        inactiveLocaleNoteContent[locale].linkText) ||
      inactiveLocaleNoteContent["en-US"].linkText;
  const url = isActive
    ? "/en-US/docs/MDN/Contribute/Localize#active_locales"
    : "https://github.com/mdn/translated-content#promoting-an-inactive-locale-to-tier-1";

  const type = isActive ? "neutral" : "warning";
  return <NoteBanner linkText={linkText} url={url} type={type} />;
}
