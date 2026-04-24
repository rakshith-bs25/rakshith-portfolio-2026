"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const terminalStream = [
    { namespace: "sys", status: "OK", text: "kernel initialized", ms: 100 },
    { namespace: "mod", status: "OK", text: "ui_renderer mounted", ms: 280 }, // tight follow up
    { namespace: "net", status: "WAIT", text: "querying api gateway...", ms: 420 },
    { namespace: "net", status: "OK", text: "api gateway established", ms: 1500 }, // massive network stall
    { namespace: "app", status: "OK", text: "portfolio compiled", ms: 1580 }, // burst cluster execution
    { namespace: "sys", status: "OK", text: "system stabilized", ms: 1650 }, // almost instantaneous
    // --> True idle stabilization freeze (1.2 seconds of absolute silence)
    { namespace: "AUTH", status: "PASS", text: "session granted", ms: 2850 } // semantic escalation
];

const getStatusColor = (status: string) => {
    switch (status) {
        case "OK": return "text-emerald-400/80";
        case "WAIT": return "text-amber-400/80";
        case "PASS": return "text-accent";
        default: return "opacity-60";
    }
};

export function Loader({ finishLoading }: { finishLoading: () => void }) {
    const [isMounted, setIsMounted] = useState(false);
    const [processedLogs, setProcessedLogs] = useState(0);

    // Unmount exactly upon encountering terminal lock state
    useEffect(() => {
        if (processedLogs === terminalStream.length) {
            finishLoading();
        }
    }, [processedLogs, finishLoading]);

    useEffect(() => {
        setIsMounted(true);
        const timeouts: NodeJS.Timeout[] = [];

        terminalStream.forEach((log, index) => {
            // Predictably imperfect. Constrained jitter avoids "simulation pattern" bounds.
            const hardwareJitter = index % 2 === 0 ? 0 : Math.floor(Math.random() * 15);

            const t = setTimeout(() => {
                setProcessedLogs(index + 1);
            }, log.ms + hardwareJitter);

            timeouts.push(t);
        });

        return () => timeouts.forEach(clearTimeout);
    }, []);

    if (!isMounted) return null;

    return (
        <motion.div
            key="loader-container"
            exit={{ opacity: 0, transition: { duration: 0.25, ease: "linear" } }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-bg-primary"
        >
            <div className="flex flex-col items-start font-mono text-[13px] md:text-[14px] text-text-secondary/70 tracking-tight select-none">
                {terminalStream.slice(0, processedLogs).map((line, index) => {
                    const isLast = index === processedLogs - 1;
                    const isAuth = line.namespace === "AUTH";

                    return (
                        <div key={index} className="mb-1 flex items-center">
                            <span
                                className={`mr-3 pr-2 border-r border-text-secondary/20 inline-block w-[45px] text-right ${isAuth ? 'text-accent opacity-90 font-bold tracking-widest' : 'opacity-40'}`}
                            >
                                {line.namespace}
                            </span>
                            <span className={`mr-3 ${getStatusColor(line.status)} font-medium`}>
                                [{line.status}]
                            </span>
                            <span className={isAuth ? 'text-text-primary' : 'text-text-secondary/90'}>
                                {line.text}
                            </span>

                            {/* Single active cursor parked on the final processed line during idle holds and crossfade */}
                            {isLast && (
                                <motion.span
                                    animate={{ opacity: [1, 1, 0, 0] }}
                                    transition={{ repeat: Infinity, duration: 1, times: [0, 0.49, 0.5, 1] }}
                                    className="ml-2 w-2 h-3.5 bg-text-secondary/60"
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </motion.div>
    );
}
