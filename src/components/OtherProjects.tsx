"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Folder, Github, ExternalLink } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export function OtherProjects() {
    const { language } = useLanguage();
    const [showMore, setShowMore] = useState(false);

    const projects = [
        {
            title: "Integrating Algolia Search with WordPress",
            description: "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
            tech: ["Algolia", "WordPress", "PHP"],
            github: "https://github.com",
            external: "https://example.com",
        },
        {
            title: "Time to Have More Fun",
            description: "A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS",
            tech: ["Next.js", "Tailwind CSS", "Firebase"],
            github: "https://github.com",
            external: "https://example.com",
        },
        {
            title: "Building a Headless Mobile App CMS",
            description: "Find out how we built a custom headless CMS with Node, Express, and Firebase for a project.",
            tech: ["Node", "Express", "Firebase", "Vue"],
            github: "https://github.com",
            external: "https://example.com",
        },
        {
            title: "OctoProfile",
            description: "A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages.",
            tech: ["Next.js", "Chart.js", "GitHub API"],
            github: "https://github.com",
            external: "https://example.com",
        },
        {
            title: "Google Keep Clone",
            description: "A simple Google Keep clone built with Vue and Firebase.",
            tech: ["Vue", "Firebase"],
            github: "https://github.com",
            external: "https://example.com",
        },
        {
            title: "Apple Music Embed",
            description: "Embed an Apple Music player into your website or app. Includes a custom player interface built with Vue.",
            tech: ["Vue", "Node.js", "Apple Music API"],
            github: "https://github.com",
            external: "https://example.com",
        },
    ];

    const MAX_DISPLAY = 3;
    const displayedProjects = showMore ? projects : projects.slice(0, MAX_DISPLAY);

    return (
        <section id="other-projects" className="py-24 max-w-5xl mx-auto flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="w-full flex justify-center flex-col items-center"
            >
                <div className="flex flex-col items-center mb-12">
                    <h2 className="text-3xl font-bold text-text-primary mb-2 text-center">
                        {language === "DE" ? "Weitere nennenswerte Projekte" : "Other Noteworthy Projects"}
                    </h2>
                    <a href="/archive" className="font-mono text-sm text-accent hover:underline decoration-accent underline-offset-4 transition-all">
                        {language === "DE" ? "Zum Archiv" : "view the archive"}
                    </a>
                </div>

                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 w-full">
                    <AnimatePresence>
                        {displayedProjects.map((project, i) => (
                            <motion.li
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
                                transition={{ duration: 0.3, delay: showMore ? (i >= MAX_DISPLAY ? (i - MAX_DISPLAY) * 0.1 : 0) : i * 0.1 }}
                                className="relative group h-full"
                            >
                                <div className="h-full bg-bg-surface hover:-translate-y-2 transition-transform duration-300 p-8 rounded flex flex-col justify-between items-start border border-bg-surface-hover hover:border-accent/30 shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
                                    <div className="w-full">
                                        <div className="flex justify-between items-center mb-6">
                                            <div className="text-accent">
                                                <Folder size={40} strokeWidth={1} />
                                            </div>
                                            <div className="flex items-center gap-4 text-text-secondary">
                                                {project.github && (
                                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="GitHub Link">
                                                        <Github size={20} />
                                                    </a>
                                                )}
                                                {project.external && (
                                                    <a href={project.external} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="External Link">
                                                        <ExternalLink size={20} />
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent transition-colors">
                                            <a href={project.external} target="_blank" rel="noopener noreferrer" className="before:content-[''] before:absolute before:z-0 before:w-full before:h-full before:top-0 before:left-0">
                                                {project.title}
                                            </a>
                                        </h3>

                                        <div className="text-text-secondary text-[15px] mb-8 leading-relaxed">
                                            <p>{project.description}</p>
                                        </div>
                                    </div>

                                    <ul className="flex flex-wrap font-mono text-xs text-text-secondary gap-3 opacity-80 mt-auto">
                                        {project.tech.map((item, j) => (
                                            <li key={j} className="whitespace-nowrap">{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.li>
                        ))}
                    </AnimatePresence>
                </ul>

                {projects.length > MAX_DISPLAY && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex justify-center"
                    >
                        <button
                            onClick={() => setShowMore(!showMore)}
                            className="text-accent bg-transparent border border-accent rounded px-6 py-4 font-mono text-sm hover:bg-accent/10 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer"
                        >
                            {showMore
                                ? (language === "DE" ? "Weniger anzeigen" : "Show Less")
                                : (language === "DE" ? "Mehr anzeigen" : "Show More")}
                        </button>
                    </motion.div>
                )}
            </motion.div>
        </section>
    );
}
