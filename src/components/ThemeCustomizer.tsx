"use client";

import React, { useState, useEffect, useRef } from "react";
import { Settings, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

const themes = [
    { name: "light", color: "#f2f2f2", label: "White" },
    { name: "dark", color: "#c084fc", label: "Purple" },
    { name: "theme-green", color: "#4ade80", label: "Green" },
    { name: "theme-blue", color: "#60a5fa", label: "Blue" },
    { name: "theme-orange", color: "#fb923c", label: "Orange" },
];

export function ThemeCustomizer() {
    const [isOpen, setIsOpen] = useState(false);
    const { setTheme, theme, resolvedTheme } = useTheme();
    const containerRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    // Close when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    if (!mounted) return null;

    const currentTheme = theme === "system" ? resolvedTheme : theme;

    return (
        <div ref={containerRef} className="fixed bottom-6 right-6 z-50 md:bottom-10 md:right-10">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-16 right-0 mb-2 w-48 rounded-xl border border-text-secondary/20 bg-bg-surface p-4 shadow-xl backdrop-blur-md"
                    >
                        <h3 className="mb-3 font-mono text-sm font-semibold text-text-primary">
                            Theme Customizer
                        </h3>
                        <div className="grid grid-cols-3 gap-3">
                            {themes.map((t) => {
                                const isActive = currentTheme === t.name;

                                return (
                                    <button
                                        key={t.name}
                                        onClick={() => setTheme(t.name)}
                                        className={`group relative flex h-10 w-full items-center justify-center rounded-full transition-all duration-200 hover:scale-110 active:scale-95 ${isActive ? "ring-2 ring-text-primary ring-offset-2 ring-offset-bg-surface" : "ring-1 ring-text-secondary/30"
                                            }`}
                                        style={{ backgroundColor: t.color }}
                                        aria-label={`Select ${t.label} theme`}
                                        title={t.label}
                                    >
                                        {isActive && (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={3}
                                                stroke="currentColor"
                                                className={`h-4 w-4 ${t.name === "light" ? "text-black" : "text-black"}`}
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                            </svg>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex h-12 w-12 items-center justify-center rounded-full bg-bg-surface shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 border border-text-secondary/20 hover:border-accent ${isOpen ? "rotate-90 text-accent" : "text-text-secondary hover:text-accent"
                    }`}
                aria-label="Toggle Theme Customizer"
            >
                {isOpen ? <X className="h-5 w-5" /> : <Settings className="h-5 w-5" />}
            </button>
        </div>
    );
}
