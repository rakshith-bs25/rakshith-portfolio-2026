"use client";

import React, { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

type LocalizedString = { EN: string; DE: string; };

const navLinks: { name: LocalizedString; url: string }[] = [
    { name: { EN: "About", DE: "Über mich" }, url: "#about" },
    { name: { EN: "Experience", DE: "Berufserfahrung" }, url: "#experience" },
    { name: { EN: "Education", DE: "Ausbildung" }, url: "#education" },
    { name: { EN: "Projects", DE: "Projekte" }, url: "#projects" },
    { name: { EN: "Contact", DE: "Kontakt" }, url: "#contact" },
];

export function TopNav() {
    const { language } = useLanguage();
    const [activeSection, setActiveSection] = useState("");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-50% 0px -50% 0px" }
        );

        const sections = document.querySelectorAll("section[id]");
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? "bg-primary/90 backdrop-blur-md py-4 shadow-lg shadow-black/20" : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                {/* Name at top left */}
                <motion.a
                    href="#"
                    layoutId="logo"
                    className="text-3xl md:text-4xl font-bold text-accent font-mono tracking-tighter"
                >
                    R
                </motion.a>

                {/* Top Nav (Desktop) */}
                <nav className="hidden md:block">
                    <ul className="flex items-center gap-8">
                        {navLinks.map(({ name, url }) => {
                            const isActive = activeSection === url.substring(1);
                            return (
                                <li key={name.EN}>
                                    <a
                                        href={url}
                                        className={`inline-block text-sm font-mono transition-all duration-300 hover:text-accent hover:scale-105 active:scale-95 ${isActive ? "text-accent" : "text-text-primary"
                                            }`}
                                    >
                                        {name[language]}
                                    </a>
                                </li>
                            );
                        })}
                        <li>
                            <a
                                href="/Rakshith_CV.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-4 inline-block rounded border border-accent px-4 py-2 font-mono text-sm text-accent transition-all duration-300 hover:bg-accent/10 hover:shadow-[0_0_15px_rgba(100,255,218,0.3)] hover:-translate-y-1 active:translate-y-0 active:scale-95"
                            >
                                {language === "DE" ? "Lebenslauf" : "Resume"}
                            </a>
                        </li>
                        <li className="flex items-center gap-2 border-l border-text-secondary/30 pl-4 ml-2">
                            <ThemeToggle />
                            <LanguageToggle />
                        </li>
                    </ul>
                </nav>

                {/* Mobile Menu Icon (Placeholder for functionality) */}
                <div className="md:hidden flex items-center gap-2">
                    <ThemeToggle />
                    <LanguageToggle />
                    <button className="text-accent p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18" />
                        </svg>
                    </button>
                </div>
            </div>
        </motion.header>
    );
}
