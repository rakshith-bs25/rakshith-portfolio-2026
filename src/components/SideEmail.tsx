"use client";

import React from "react";
import { motion } from "framer-motion";

export function SideEmail() {
    const email = "rakshith.bs25@gmail.com";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="fixed bottom-0 right-10 hidden w-10 flex-col items-center md:flex z-50"
        >
            <div className="flex flex-col items-center after:block after:w-[1px] after:h-24 after:bg-text-secondary after:mx-auto">
                <a
                    href={`mailto:${email}`}
                    className="mb-8 p-2 font-mono text-sm tracking-widest text-text-secondary transition-all hover:-translate-y-1 hover:text-accent [writing-mode:vertical-rl]"
                >
                    {email}
                </a>
            </div>
        </motion.div>
    );
}
