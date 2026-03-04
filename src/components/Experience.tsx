"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

const jobs = [
    {
        company: "Infopine",
        role: "Associate Software Engineer",
        date: "Jan 2023 - Feb 2025",
        description: [
            "Built scalable Java Spring Boot backend services for a cloud-based ERP platform serving 30+ B2B clients.",
            "Designed secure REST APIs integrating finance modules with third-party payment gateways.",
            "Optimized MySQL/PostgreSQL queries, improving performance for high-volume reporting.",
            "Automated workflows using Python, reducing manual errors by ~40%.",
            "Developed frontend features using React and consumed REST APIs.",
            "Worked in Agile/Scrum, contributing to CI/CD with Git, Maven, Jenkins, and Docker.",
        ],
    },
    {
        company: "Infopine",
        role: "Trainee Software Engineer",
        date: "Nov 2021 - Dec 2022",
        description: [
            "Implemented backend modules using Spring Boot in a microservices architecture.",
            "Developed optimized SQL queries for relational databases.",
            "Practiced TDD and contributed to technical documentation.",
        ],
    },
    {
        company: "Infopine",
        role: "Project Intern",
        date: "Aug 2021 - Nov 2021",
        description: [
            "Assisted in backend development using Java and Spring.",
            "Supported React-based frontend implementation.",
            "Gained exposure to SDLC and enterprise integration workflows.",
        ],
    },
];

export function Experience() {
    const { language } = useLanguage();
    const [activeTab, setActiveTab] = useState(0);

    // Group jobs by company
    const groupedJobs = jobs.reduce((acc, job) => {
        if (!acc[job.company]) {
            acc[job.company] = [];
        }
        acc[job.company].push(job);
        return acc;
    }, {} as Record<string, typeof jobs>);

    const companies = Object.keys(groupedJobs);

    // If the active tab index is out of bounds (shouldn't happen, but safe)
    const activeCompany = companies[activeTab] || companies[0];
    const activeRoles = groupedJobs[activeCompany] || [];

    return (
        <section id="experience" className="py-24 max-w-3xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center mb-12">
                    <h2 className="text-3xl font-bold text-text-primary mr-6 whitespace-nowrap">
                        {language === "DE" ? "Berufserfahrung" : "Where I've Worked"}
                    </h2>
                    <div className="h-[1px] bg-text-secondary/20 w-full sm:w-64 max-w-[300px]"></div>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex overflow-x-auto md:flex-col md:w-48 no-scrollbar">
                        {companies.map((company, index) => (
                            <button
                                key={company}
                                onClick={() => setActiveTab(index)}
                                className={`py-3 px-4 text-left border-b-2 md:border-b-0 md:border-l-2 transition-all font-mono text-sm whitespace-nowrap ${activeTab === index
                                    ? "border-accent text-accent bg-accent/5 md:bg-bg-surface"
                                    : "border-text-secondary/30 text-text-secondary hover:bg-bg-surface-hover hover:text-accent"
                                    }`}
                            >
                                {company}
                            </button>
                        ))}
                    </div>

                    <div className="md:w-full min-h-[300px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.25 }}
                            >
                                {activeRoles.map((roleData, index) => {
                                    const isLatest = index === 0;
                                    const isMultiple = activeRoles.length > 1;
                                    const isLast = index === activeRoles.length - 1;

                                    return (
                                        <div key={index} className={`relative ${!isLast ? "pb-12" : ""}`}>
                                            {/* Simplified continuous timeline border */}
                                            <div className={`md:pl-6 relative border-l-2 border-text-secondary/20 hover:border-accent transition-colors duration-300 ml-[1px]`}>
                                                <h3 className={`text-xl font-medium mb-1 ${isLatest ? "text-accent" : "text-text-primary"}`}>
                                                    {roleData.role}
                                                    {isLatest && (
                                                        <span className="text-accent">
                                                            {" "}@ {roleData.company}
                                                        </span>
                                                    )}
                                                </h3>
                                                <p className="text-sm font-mono text-text-secondary mb-4">
                                                    {roleData.date}
                                                </p>
                                                <ul className="space-y-3 text-text-secondary">
                                                    {roleData.description.map((desc, i) => (
                                                        <li key={i} className="flex gap-2">
                                                            <span className="text-accent mt-1">▹</span>
                                                            <span className="leading-relaxed">{desc}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    );
                                })}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
