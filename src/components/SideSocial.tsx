"use client";

import { Github, Linkedin, Mail, Youtube } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const socialLinks = [
    { name: "GitHub", url: "https://github.com/rakshith-bs25", icon: Github },
    { name: "Youtube", url: "https://www.youtube.com/@Rakshith_Shivananjegowda", icon: Youtube },
    { name: "Linkedin", url: "https://linkedin.com/in/rakshithgowdaa", icon: Linkedin },
    { name: "Email", url: "mailto:rakshith.bs25@gmail.com", icon: Mail },
];

export function SideSocial() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="fixed bottom-0 left-10 hidden w-10 flex-col items-center md:flex z-50"
        >
            <ul className="flex flex-col items-center gap-6 after:block after:w-[1px] after:h-24 after:bg-text-secondary after:mx-auto">
                {socialLinks.map(({ name, url, icon: Icon }) => (
                    <li key={name} className="last-of-type:mb-4">
                        <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={name}
                            className="p-2 inline-block text-text-secondary transition-all hover:-translate-y-1 hover:text-accent"
                        >
                            <Icon size={20} strokeWidth={2} />
                        </a>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}
