"use client"

import * as React from "react"

export function LanguageToggle() {
    // Default to English. German (DE) is just a stub for now.
    const [lang, setLang] = React.useState("EN")

    return (
        <button
            onClick={() => setLang(lang === "EN" ? "DE" : "EN")}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-bg-surface-hover hover:text-accent h-10 w-10 text-text-secondary font-mono"
            aria-label="Toggle language"
        >
            {lang}
        </button>
    )
}
