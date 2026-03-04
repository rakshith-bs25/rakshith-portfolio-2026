"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

export function About() {
    const { language } = useLanguage();

    const skillCategories = [
        {
            title: "Backend",
            skills: ["Java", "Spring Boot", "JPA/Hibernate", "REST APIs", "Microservices", "JWT"],
        },
        {
            title: "Frontend",
            skills: ["React", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3"],
        },
        {
            title: "Database",
            skills: ["PostgreSQL", "MySQL", "Data Modeling"],
        },
        {
            title: "AI/Data",
            skills: ["Python", "FastAPI", "Pandas", "NumPy", "LLM Integration"],
        },
        {
            title: "DevOps",
            skills: ["Docker", "Git", "CI/CD", "Linux"],
        },
        {
            title: "Architecture",
            skills: ["Modular Design", "RESTful Systems", "Schema Design", "API Integration"],
        },
    ];

    return (
        <section id="about" className="py-24 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center mb-12">
                    <h2 className="text-3xl font-bold text-text-primary mr-6 whitespace-nowrap">
                        {language === "DE" ? "Über mich" : "About Me"}
                    </h2>
                    <div className="h-[1px] bg-text-secondary/20 w-full sm:w-64 max-w-[300px]"></div>
                </div>

                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Left Side: Bio */}
                    <div className="lg:w-1/2 text-text-secondary space-y-6 text-lg leading-relaxed">
                        <p>
                            {language === "DE"
                                ? <>Ich bin Rakshith, Softwareentwickler mit 3,5 Jahren Erfahrung in der Entwicklung von <span className="text-accent">ERP-Systemen</span> innerhalb eines Produktunternehmens. Anstatt bestehende Plattformen lediglich zu konfigurieren, habe ich eigenständig Module entworfen, Backend-Services entwickelt und Full-Stack-Systeme bereitgestellt, die täglich von über 30 Geschäftskunden aus den Bereichen <span className="text-accent">Einzelhandel und Vertrieb in Indien und den USA</span> genutzt werden.</>
                                : <>I&apos;m Rakshith, a software developer with 3.5 years of experience building <span className="text-accent">ERP systems</span> within a product company. Rather than configuring existing platforms, I&apos;ve designed modules, developed backend services, and deployed full-stack systems used daily by 30+ business clients across <span className="text-accent">retail and distribution in India and the US.</span></>}
                        </p>
                        <p>
                            {language === "DE"
                                ? <>Durch die enge Zusammenarbeit mit Stakeholdern aus den Bereichen Operations, Finanzen und Supply Chain habe ich gelernt, dass Software nur dann einen echten Mehrwert bietet, wenn sie reale Geschäftsprozesse verbessert. Meine Spezialität liegt darin, unstrukturierte Anforderungen in <span className="text-accent">strukturierte technische Lösungen</span> zu übersetzen – von komplexen Workflows bis hin zu operativen Dashboards, die die Entscheidungsfindung unterstützen.</>
                                : <>Working closely with operations, finance, and supply chain stakeholders taught me that software only delivers value when it improves real business processes. I specialize in translating unstructured requirements into <span className="text-accent">structured technical solutions</span>&mdash;from complex workflows to operational dashboards that drive decision-making.</>}
                        </p>
                        <p>
                            {language === "DE"
                                ? <>Derzeit absolviere ich meinen Master in Digital Engineering in Magdeburg. Mein Fokus liegt dabei auf der Integration von <span className="text-accent">KI in Unternehmenssysteme</span>, um Prognosen und Automatisierung zu optimieren. Außerhalb der Arbeit vertiefe ich mich meist in Side-Projekte, erkunde das Java- und Python-Ökosystem oder finde kreative Wege, um komplexe geschäftliche Herausforderungen zu lösen.</>
                                : <>Currently pursuing a Master&apos;s in Digital Engineering in Magdeburg, I&apos;m focused on integrating <span className="text-accent">AI into enterprise systems</span> to enhance forecasting and automation. Outside of work, I&apos;m usually deep in side projects, exploring the Java and Python ecosystems, or finding creative ways to solve complex business problems.</>}
                        </p>
                    </div>

                    {/* Right Side: Skills */}
                    <div className="lg:w-1/2 flex flex-col gap-8">
                        {skillCategories.map((category, index) => (
                            <div key={index}>
                                <h3 className="text-text-primary mb-3 font-semibold text-sm tracking-wide">{category.title}</h3>
                                <ul className="flex flex-wrap gap-3 font-mono text-xs">
                                    {category.skills.map((skill, i) => (
                                        <li
                                            key={i}
                                            className="flex items-center bg-bg-surface text-text-secondary px-3 py-1.5 rounded border border-bg-surface-hover hover:border-accent hover:text-accent transition-colors duration-300"
                                        >
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
