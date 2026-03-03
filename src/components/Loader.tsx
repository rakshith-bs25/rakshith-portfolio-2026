"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Loader({ finishLoading }: { finishLoading: () => void }) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const timeout = setTimeout(() => {
            finishLoading();
        }, 3000);

        return () => clearTimeout(timeout);
    }, [finishLoading]);

    if (!isMounted) return null;

    return (
        <motion.div
            key="loader-container"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-primary"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative flex items-center justify-center w-24 h-24"
            >
                {/* Outer animated ring */}
                <motion.svg
                    className="absolute inset-0 w-full h-full text-accent"
                    viewBox="0 0 100 100"
                    initial={{ rotate: -90 }}
                    animate={{ rotate: 270 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                    <motion.polygon
                        points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                </motion.svg>

                {/* Inner R Text */}
                <motion.span
                    layoutId="logo"
                    className="text-4xl font-bold font-mono text-accent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    R
                </motion.span>
            </motion.div>
        </motion.div>
    );
}
