"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const themes = [
    { name: "light", color: "#f2f2f2", label: "White" },
    { name: "dark", color: "#c084fc", label: "Purple" },
    { name: "theme-green", color: "#4ade80", label: "Green" },
    { name: "theme-blue", color: "#60a5fa", label: "Blue" },
    { name: "theme-orange", color: "#fb923c", label: "Orange" },
]

export function ThemeToggle() {
    const { setTheme, theme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // Avoid hydration mismatch by only rendering after mount
    useEffect(() => setMounted(true), [])

    if (!mounted) {
        return (
            <div className="flex items-center gap-3 h-10 px-2 pointer-events-none opacity-50">
                {themes.map((t) => (
                    <div key={t.name} className="w-3 h-3 rounded-full" style={{ backgroundColor: t.color }}></div>
                ))}
            </div>
        )
    }

    return (
        <div className="flex items-center gap-3 h-10 px-2">
            {themes.map((t) => {
                const currentTheme = theme === 'system' ? resolvedTheme : theme;
                const isActive = currentTheme === t.name;
                return (
                    <button
                        key={t.name}
                        onClick={() => setTheme(t.name)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 border border-transparent ${isActive ? "scale-[1.3] ring-1 ring-offset-2 ring-offset-bg-primary ring-text-secondary" : "scale-100 hover:scale-[1.15]"
                            }`}
                        style={{ backgroundColor: t.color }}
                        aria-label={`Switch to ${t.label} theme`}
                        title={`${t.label} Theme`}
                    />
                )
            })}
        </div>
    )
}
