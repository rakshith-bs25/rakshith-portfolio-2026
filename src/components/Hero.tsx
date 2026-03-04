"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

export function Hero() {
    const { language } = useLanguage();

    return (
        <section id="hero" className="flex min-h-screen flex-col justify-center px-4 py-24 md:px-0">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 w-full">
                <div className="w-full lg:w-3/5 text-center lg:text-left pt-12 lg:pt-0">
                    <p className="mb-5 font-mono text-accent">
                        {language === "DE" ? "Hi, mein Name ist" : "Hi, my name is"}
                    </p>
                    <h1 className="mb-4 text-5xl font-bold tracking-tight text-text-primary md:text-6xl lg:text-7xl">
                        Rakshith Shivananjegowda.
                    </h1>
                    <h2 className="mb-6 text-3xl font-semibold leading-tight text-text-secondary md:text-4xl lg:text-5xl">
                        {language === "DE"
                            ? "Architekt für intelligente Unternehmenssoftware."
                            : "I build AI-powered enterprise systems."}
                    </h2>
                    <p className="mb-12 max-w-xl text-base text-text-secondary md:text-lg mx-auto lg:mx-0">
                        {language === "DE"
                            ? "Erfahrener Java- & Python-Entwickler mit Fokus auf skalierbare ERP- und E-Commerce-Lösungen. Als M.Sc. Student für Digital Engineering in Magdeburg verbinde ich fundierte Backend-Expertise mit innovativen KI-Technologien für die Industrie von morgen."
                            : "Java & Python backend developer with 3.5+ years building ERP and e-commerce platforms. Currently pursuing M.Sc. Digital Engineering at Otto-von-Guericke-Universität Magdeburg — focused on integrating intelligent features into real business applications."}
                    </p>
                    <div className="flex gap-4 lg:justify-start justify-center">
                        <a
                            href="#projects"
                            className="inline-block rounded border border-accent bg-transparent px-8 py-4 font-mono text-sm text-accent transition-all duration-300 hover:bg-accent/10 hover:shadow-[0_0_15px_rgba(100,255,218,0.2)] hover:-translate-y-1 active:translate-y-0 active:scale-95"
                        >
                            {language === "DE" ? "Meine Projekte" : "Check out my work"}
                        </a>
                        <a
                            href="/Rakshith_CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block rounded border border-accent bg-accent/10 px-8 py-4 font-mono text-sm text-accent transition-all duration-300 hover:bg-accent/20 hover:shadow-[0_0_15px_rgba(100,255,218,0.3)] hover:-translate-y-1 active:translate-y-0 active:scale-95"
                        >
                            {language === "DE" ? "CV öffnen" : "View Resume"}
                        </a>
                    </div>
                </div>

                <div className="lg:w-2/5 flex justify-center lg:justify-end">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full shadow-2xl border-4 border-accent/20">
                        <Image
                            src="/image.jpg"
                            alt="Rakshith - Profile Picture"
                            fill
                            sizes="(max-width: 768px) 256px, 320px"
                            className="object-cover object-center"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
