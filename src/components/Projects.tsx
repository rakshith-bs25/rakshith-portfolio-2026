"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export function Projects() {
    const featuredProjects = [
        {
            title: "Halcyon Theme",
            description:
                "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
            tech: ["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
            github: "https://github.com",
            external: "https://marketplace.visualstudio.com",
            imageMock: "Halcyon Preview",
        },
        {
            title: "Spotify Profile",
            description:
                "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
            tech: ["React", "Express", "Spotify API", "Styled Components"],
            github: "https://github.com",
            external: "https://spotify.com",
            imageMock: "Spotify Data Viz",
        },
        {
            title: "Build a Spotify Connected App",
            description:
                "Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had. This course covers everything from setting up your app on the Spotify Developer Dashboard, to building a Node.js Express server.",
            tech: ["Next.js", "Node.js", "Express", "OAuth"],
            github: "https://github.com",
            external: "https://course.com",
            imageMock: "Course Dashboard",
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
                        Some Things I&apos;ve Built
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
                                className={`relative col-span-12 md:col-span-7 h-64 md:h-[350px] bg-accent/10 rounded overflow-hidden border border-accent/20 group hover:border-accent/50 transition-colors ${i % 2 !== 0 ? "md:col-start-6" : "md:col-start-1"
                                    } md:row-start-1`}
                            >
                                <div className="absolute inset-0 bg-primary/40 group-hover:bg-transparent transition-colors z-10 hidden md:block" />
                                <div className="w-full h-full flex items-center justify-center mix-blend-multiply filter grayscale contrast-125 group-hover:filter-none group-hover:mix-blend-normal transition-all duration-300">
                                    <span className="font-mono text-accent/50">{project.imageMock}</span>
                                </div>
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
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-text-primary hover:text-accent transition-colors"
                                        aria-label="GitHub Repository"
                                    >
                                        <Github size={20} />
                                    </a>
                                    <a
                                        href={project.external}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-text-primary hover:text-accent transition-colors"
                                        aria-label="External Link"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </section>
    );
}
