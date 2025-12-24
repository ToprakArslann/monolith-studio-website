"use client"
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

export default function Loading() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-screen flex flex-col items-center justify-between overflow-hidden bg-transparent fixed top-0 z-1200"
                >
                    <motion.div
                        initial={{ flex: 1 }}
                        animate={{ flex: 0 }}
                        transition={{ delay: 2, duration: 1 }}
                        className="w-full bg-[#E0E0E0]"
                    />
                    <div className="flex flex-row w-full items-center justify-between">
                        <motion.div
                            initial={{ flex: 1 }}
                            animate={{ flex: 0 }}
                            transition={{ delay: 2, duration: 1 }}
                            className="w-full h-full items-center justify-center relative bg-[#E0E0E0]"
                        >
                            <p className="font-monument-bold text-xl absolute right-0 bottom-1/2 translate-y-1/2">MONOLITH</p>
                        </motion.div>
                        <motion.div
                            initial={{ width: "0%", height: "0vh" }}
                            animate={{ width: "100%", height: "100vh" }}
                            transition={{ delay: 1, duration: 1.5 }}
                            className="flex"
                        />
                        <motion.div
                            initial={{ flex: 1 }}
                            animate={{ flex: 0 }}
                            transition={{ delay: 2, duration: 1 }}
                            className="w-full h-full items-center justify-center relative bg-[#E0E0E0]"
                        >
                            <p className="font-monument-bold text-xl absolute left-0 bottom-1/2 translate-y-1/2">STUDIO</p>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ flex: 1 }}
                        animate={{ flex: 0 }}
                        transition={{ delay: 2, duration: 1 }}
                        className="w-full bg-[#E0E0E0]"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    )
}