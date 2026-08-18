"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

export function About() {
    const { language } = useLanguage();

    const skillCategories = [
        {
            title: "Backend",
            skills: ["Java", "Spring Boot", "TypeScript", "Node.js", "REST APIs", "Microservices"],
        },
        {
            title: "Frontend",
            skills: ["React", "Next.js", "JavaScript (ES6+)", "HTML5/CSS3"],
        },
        {
            title: "Database",
            skills: ["PostgreSQL", "MySQL", "Prisma ORM", "JPA/Hibernate"],
        },
        {
            title: "AI & Data",
            skills: ["Python", "FastAPI", "LLM / RAG Integration", "Pandas", "NumPy"],
        },
        {
            title: "DevOps & Quality",
            skills: ["Docker", "Git", "CI/CD (GitHub Actions)", "Playwright", "API Testing"],
        },
        {
            title: "Architecture",
            skills: ["System Design", "Modular Architecture", "Schema Design", "API Integration"],
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
                                ? <>Ich bin Rakshith, ein Software Engineer mit 3,5+ Jahren Erfahrung in der Skalierung produktionsreifer <span className="text-accent">ERP-Plattformen</span>. Statt Standardsoftware zu konfigurieren, entwickle ich Kernmodule, resiliente Backend-Services und Full-Stack-Systeme, die täglich von über 30 Unternehmenskunden in Indien und den USA genutzt werden.</>
                                : <>I&apos;m Rakshith, a software engineer with 3.5+ years of experience architecting and scaling production <span className="text-accent">ERP platforms</span>. Rather than configuring existing software, I&apos;ve designed core modules, built resilient backend services, and deployed full-stack systems used daily by 30+ enterprise clients across retail and distribution in India and the US.</>}
                        </p>
                        <p>
                            {language === "DE"
                                ? <>Die enge Zusammenarbeit mit Operations, Finanzen und Supply Chain hat mir gezeigt: Code liefert nur Mehrwert, wenn er echte Geschäftsengpässe löst. Ich übersetze komplexe Anforderungen in <span className="text-accent">robuste Architekturen</span> – von automatisierten Daten-Workflows bis zu performanten Dashboards für strategische Entscheidungen.</>
                                : <>Collaborating closely with operations, finance, and supply chain stakeholders taught me that code delivers value when it solves real business bottlenecks. I specialize in translating complex business requirements into <span className="text-accent">robust technical architectures</span>, from automated data workflows to high-performance operational dashboards that empower strategic decision-making.</>}
                        </p>
                        <p>
                            {language === "DE"
                                ? <>Aktuell lebe ich in Magdeburg, studiere im M.Sc. Digital Engineering an der OvGU und fokussiere mich auf die Integration von <span className="text-accent">KI-Pipelines in Enterprise-Architekturen</span>. In meiner Freizeit baue ich Side-Projects, erkunde moderne Java- und TypeScript-Ökosysteme oder löse komplexe Systemdesign-Challenges.</>
                                : <>Based in Magdeburg, Germany, while pursuing my M.Sc. in Digital Engineering at Otto-von-Guericke University, I focus on integrating <span className="text-accent">AI pipelines into enterprise architectures</span> to accelerate intelligent automation. Outside of work, I enjoy building technical side projects, exploring the modern Java and TypeScript ecosystems, or solving intricate system design challenges.</>}
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
