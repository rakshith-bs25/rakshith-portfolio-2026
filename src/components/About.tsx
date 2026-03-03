"use client";

import React from "react";
import { motion } from "framer-motion";

export function About() {
    const skillCategories = [
        {
            title: "Languages",
            skills: ["TypeScript", "JavaScript", "Python", "SQL"],
        },
        {
            title: "Frontend",
            skills: ["React", "Next.js", "Tailwind CSS", "Redux"],
        },
        {
            title: "Backend",
            skills: ["Node.js", "Express", "REST APIs", "GraphQL"],
        },
        {
            title: "Databases",
            skills: ["PostgreSQL", "MongoDB", "Redis", "Supabase"],
        },
        {
            title: "Tools & DevOps",
            skills: ["Docker", "Git", "AWS", "Vercel"],
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
                        About Me
                    </h2>
                    <div className="h-[1px] bg-text-secondary/20 w-full sm:w-64 max-w-[300px]"></div>
                </div>

                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Left Side: Bio */}
                    <div className="lg:w-1/2 text-text-secondary space-y-6 text-lg leading-relaxed">
                        <p>
                            I&apos;m Rakshith, a software developer with 3.5 years of experience building <span className="text-accent">ERP systems</span> within a product company. Rather than configuring existing platforms, I&apos;ve designed modules, developed backend services, and deployed full-stack systems used daily by 30+ business clients across <span className="text-accent">retail and distribution in India and the US.</span>
                        </p>
                        <p>
                            Working closely with operations, finance, and supply chain stakeholders taught me that software only delivers value when it improves real business processes. I specialize in translating unstructured requirements into <span className="text-accent">structured technical solutions</span>&mdash;from complex workflows to operational dashboards that drive decision-making.
                        </p>
                        <p>
                            Currently pursuing a Master&apos;s in Digital Engineering in Magdeburg, I&apos;m focused on integrating <span className="text-accent">AI into enterprise systems</span> to enhance forecasting and automation. Outside of work, I&apos;m usually deep in side projects, exploring the Java and Python ecosystems, or finding creative ways to solve complex business problems.
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
