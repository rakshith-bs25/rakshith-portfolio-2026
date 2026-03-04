"use client"

import * as React from "react"
import { useLanguage } from "./LanguageProvider"

export function LanguageToggle() {
    const { language, toggleLanguage } = useLanguage()

    return (
        <button
            onClick={toggleLanguage}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-bg-surface-hover hover:text-accent h-10 w-10 text-text-secondary font-mono"
            aria-label="Toggle language"
        >
            {language}
        </button>
    )
}
