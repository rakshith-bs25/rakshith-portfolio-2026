"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

export function Projects() {
    const { language } = useLanguage();

    const featuredProjects = [
        {
            title: "TradeFlow",
            description:
                "A production-style enterprise system combining ERP operations with a customer-facing e-commerce portal. Built with a scalable, modular backend and secure authentication architecture, demonstrating real-world business workflow design (inventory, orders, billing, user roles).",
            tech: ["Java", "Spring Boot", "React", "PostgreSQL", "Docker", "JWT"],
            github: "#",
            external: "#",
            image: "/tradeflow_erp_dashboard.png",
        },
        {
            title: "Smart ERP Query Engine",
            description:
                "An AI layer built on top of TradeFlow’s data model that allows users to query ERP data using natural language. Converts human queries into optimized SQL via LLM orchestration, enabling non-technical users to extract business insights instantly.",
            tech: ["Python", "FastAPI", "LangChain", "OpenAI API", "PostgreSQL", "SQL"],
            github: "#",
            external: "#",
            image: "/Smart ERP Query.png",
        },
        {
            title: "Enterprise Cost Estimation App",
            description:
                "A document processing system that extracts structured data from invoices and project documents using OCR and automated parsing. Designed for university-level enterprise simulation and real-world cost estimation workflows.",
            tech: ["Python", "OCR", "PostgreSQL", "React", "REST APIs"],
            github: "#",
            external: "#",
            image: "/costiq_dashboard_white.png",
        },
    ];

    return (
        <section id="projects" className="py-24 max-w-5xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center mb-12">
                    <h2 className="text-3xl font-bold text-text-primary mr-6 whitespace-nowrap">
                        {language === "DE" ? "Projekte" : "Some Things I've Built"}
                    </h2>
                    <div className="h-[1px] bg-text-secondary/20 w-full sm:w-64 max-w-[300px]"></div>
                </div>

                <ul className="space-y-24">
                    {featuredProjects.map((project, i) => (
                        <li
                            key={i}
                            className={`relative grid grid-cols-12 gap-4 items-center ${i % 2 !== 0 ? "md:text-left" : "md:text-right"
                                }`}
                        >
                            {/* Image Placeholder */}
                            <div
                                className={`relative col-span-12 md:col-span-7 h-64 md:h-[350px] bg-accent/5 rounded overflow-hidden border border-accent/20 group hover:border-accent/50 transition-colors ${i % 2 !== 0 ? "md:col-start-6" : "md:col-start-1"
                                    } md:row-start-1`}
                            >
                                <div className="absolute inset-0 bg-bg-primary/20 group-hover:bg-transparent transition-colors z-10 hidden md:block pointer-events-none" />
                                {project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        style={{ objectFit: "cover", objectPosition: "top" }}
                                        className="opacity-50 filter grayscale contrast-125 group-hover:filter-none group-hover:opacity-100 transition-all duration-500"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center opacity-50 filter grayscale contrast-125 group-hover:filter-none group-hover:opacity-100 transition-all duration-500">
                                        <span className="font-mono text-accent/50">Project Image</span>
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div
                                className={`relative col-span-12 md:col-span-7 z-20 ${i % 2 !== 0 ? "md:col-start-1" : "md:col-start-6"
                                    } md:row-start-1 p-6 md:p-0 bg-[#112240] md:bg-transparent rounded bg-opacity-90 md:bg-opacity-100`}
                            >
                                <p className="font-mono text-sm text-accent mb-2">
                                    Featured Project
                                </p>
                                <h3 className="text-2xl font-semibold text-text-primary mb-4 md:mb-6">
                                    <a href={project.external} className="hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">
                                        {project.title}
                                    </a>
                                </h3>

                                <div
                                    className={`text-text-secondary text-[15px] mb-6 md:p-6 md:bg-[#112240] md:rounded shadow-lg ${i % 2 !== 0 ? "md:text-left" : "md:text-right"
                                        }`}
                                >
                                    <p>{project.description}</p>
                                </div>

                                <ul
                                    className={`flex flex-wrap font-mono text-xs text-text-secondary mb-6 gap-4 ${i % 2 !== 0 ? "md:justify-start" : "md:justify-end"
                                        }`}
                                >
                                    {project.tech.map((item, j) => (
                                        <li key={j} className="whitespace-nowrap">{item}</li>
                                    ))}
                                </ul>

                                <div
                                    className={`flex items-center gap-4 ${i % 2 !== 0 ? "md:justify-start" : "md:justify-end"
                                        }`}
                                >
                                    {project.github !== "#" && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-text-primary hover:text-accent transition-colors"
                                            aria-label="GitHub Repository"
                                        >
                                            <Github size={20} />
                                        </a>
                                    )}
                                    {project.external !== "#" && (
                                        <a
                                            href={project.external}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-text-primary hover:text-accent transition-colors"
                                            aria-label="External Link"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </section>
    );
}
