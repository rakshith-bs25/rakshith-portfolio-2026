"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

export function Contact() {
    const { language } = useLanguage();

    return (
        <section id="contact" className="py-24 max-w-2xl mx-auto text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <p className="font-mono text-accent text-sm mb-4">
                    {language === "DE" ? "Wie geht es weiter?" : "What's Next?"}
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
                    {language === "DE" ? "Kontakt aufnehmen" : "Get In Touch"}
                </h2>
                <p className="text-text-secondary text-base md:text-lg mb-12">
                    {language === "DE"
                        ? "Ich entwickle skalierbare Anwendungen an der Schnittstelle zwischen Softwarearchitektur und Business-Lösungen. Ob Backend-Systeme, KI oder Full-Stack-Entwicklung – lassen Sie uns gemeinsam intelligentere Enterprise-Systeme schaffen."
                        : "I build scalable applications and work at the intersection of software architecture and business solutions. Whether it's backend systems, AI, or full-stack development, let's connect and create smarter enterprise systems."}
                </p>

                <a
                    href="mailto:rakshith.bs25@gmail.com"
                    className="inline-block rounded border border-accent bg-transparent px-8 py-4 font-mono text-sm text-accent transition-all duration-300 hover:bg-accent/10 hover:shadow-[0_0_15px_rgba(100,255,218,0.3)] hover:-translate-y-1 active:translate-y-0 active:scale-95"
                >
                    {language === "DE" ? "Sag Hallo / Kontaktieren" : "Say Hello"}
                </a>
            </motion.div>

            <div className="mt-32 font-mono text-sm transition-colors text-[#8892b0] hover:text-accent">
                <a href="https://github.com/rakshith-bs25" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1">
                    <span>{language === "DE" ? "Design & Entwicklung: Rakshith" : "Designed & Engineered by Rakshith"}</span>
                    <span>{language === "DE" ? "Erstellt mit Next.js, Tailwind CSS & Framer Motion" : "Built with Next.js, Tailwind CSS & Framer Motion"}</span>
                    <span className="mt-2 text-xs opacity-75">&copy; 2026 | Magdeburg, Germany</span>
                </a>
            </div>
        </section>
    );
}
