"use client";

import { useEffect, useRef, useState } from "react";

type LanguageCode = "pt" | "en" | "es" | "fr";

const FLAG_URL = (code: string) => `https://flagcdn.com/w20/${code}.png`;

const LANGUAGES: Array<{
  code: LanguageCode;
  label: string;
  flagCode: string;
}> = [
  { code: "pt", label: "Português", flagCode: "pt" },
  { code: "en", label: "English", flagCode: "gb" },
  { code: "es", label: "Español", flagCode: "es" },
  { code: "fr", label: "Français", flagCode: "fr" },
];

function getCurrentLanguage(): LanguageCode {
  if (typeof document === "undefined") return "pt";

  const match = document.cookie.match(/(?:^|;\s*)googtrans=\/[^/]+\/([a-z-]+)/i);
  const code = match?.[1]?.toLowerCase();

  return LANGUAGES.some((language) => language.code === code)
    ? (code as LanguageCode)
    : "pt";
}

function changeLanguage(code: LanguageCode) {
  const secure = window.location.protocol === "https:" ? ";Secure" : "";
  document.cookie = `googtrans=/pt/${code};path=/;max-age=31536000;SameSite=Lax${secure}`;
  document.documentElement.lang = code === "pt" ? "pt-PT" : code;
  window.location.reload();
}

export default function LanguageSwitcher() {
  const [current, setCurrent] = useState<LanguageCode>("pt");
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setCurrent(getCurrentLanguage());
  }, []);

  useEffect(() => {
    if (!open) return;

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  const active =
    LANGUAGES.find((language) => language.code === current) ?? LANGUAGES[0];

  return (
    <div
      className="language-switcher notranslate"
      ref={wrapperRef}
      translate="no"
    >
      <button
        ref={triggerRef}
        type="button"
        className="language-switcher__trigger"
        aria-label="Mudar idioma"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls="language-menu"
        onClick={() => setOpen((isOpen) => !isOpen)}
      >
        <img
          src={FLAG_URL(active.flagCode)}
          width="20"
          height="14"
          alt=""
          className="language-switcher__flag"
        />
        <span>{active.code.toUpperCase()}</span>
      </button>

      {open && (
        <div
          id="language-menu"
          className="language-switcher__menu"
          role="menu"
          aria-label="Idiomas"
        >
          {LANGUAGES.map((language) => (
            <button
              key={language.code}
              type="button"
              role="menuitemradio"
              aria-checked={language.code === current}
              className={`language-switcher__option${
                language.code === current
                  ? " language-switcher__option--active"
                  : ""
              }`}
              onClick={() => {
                if (language.code === current) {
                  setOpen(false);
                  return;
                }

                changeLanguage(language.code);
              }}
            >
              <img
                src={FLAG_URL(language.flagCode)}
                width="20"
                height="14"
                alt=""
                className="language-switcher__flag"
              />
              <span>{language.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
