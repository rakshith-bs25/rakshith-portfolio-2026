"use client";

import React, { useState } from "react";
import { Loader } from "./Loader";
import { motion, AnimatePresence } from "framer-motion";

export function ClientAnimationWrapper({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <AnimatePresence mode="wait">
            {isLoading ? (
                <Loader key="loader" finishLoading={() => setIsLoading(false)} />
            ) : (
                <motion.div
                    key="main-app"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
