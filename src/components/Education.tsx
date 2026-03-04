"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

export function Education() {
    const { language } = useLanguage();

    return (
        <section id="education" className="py-24 max-w-3xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center mb-12">
                    <h2 className="text-3xl font-bold text-text-primary mr-6 whitespace-nowrap">
                        {language === "DE" ? "Ausbildung" : "Education"}
                    </h2>
                    <div className="h-[1px] bg-text-secondary/20 w-full sm:w-64 max-w-[300px]"></div>
                </div>

                <div className="flex flex-col gap-8">
                    <div className="relative pl-6 md:pl-8 border-l-2 border-text-secondary/20 hover:border-accent transition-colors duration-300">
                        <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-bg-surface border-2 border-accent"></div>
                        <h3 className="text-xl font-medium text-text-primary mb-1">
                            Master of Science (M.Sc.) in Digital Engineering
                        </h3>
                        <div className="text-accent mb-2">
                            Otto von Guericke University Magdeburg <span className="text-text-secondary/70">— Magdeburg, Germany</span>
                        </div>
                        <p className="text-sm font-mono text-text-secondary mb-4">
                            Apr 2023 – Present
                        </p>

                        <div className="text-text-secondary mt-4">
                            <span className="text-text-primary font-medium">Coursework:</span>{" "}
                            <span className="leading-relaxed">
                                Machine Learning, Clean Code Development, Data Visualization, Enterprise Application Development, Data Engineering, AI Systems
                            </span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
