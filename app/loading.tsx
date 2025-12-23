"use client"
import { motion } from "motion/react";
export default function Loading() {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-between overflow-hidden bg-transparent fixed top-0 z-1200">
            <div className="flex flex-1 w-full bg-[#E0E0E0]"></div>
            <div className="flex flex-row w-full items-center justify-between">
                <div className="flex flex-1 w-full h-full items-center justify-center relative bg-[#E0E0E0]">
                    <p className="font-monument-bold text-xl absolute right-0  bottom-1/2 translate-y-1/2">MONOLITH</p></div>
                <motion.div initial={{ width: "0%", height: "0vh" }} animate={{ width: "100%", height: "100vh" }} transition={{ delay: 1, duration: 1.5 }} className="flex"></motion.div>
                <div className="flex flex-1 w-full h-full items-center justify-center relative bg-[#E0E0E0]">
                    <p className="font-monument-bold text-xl absolute left-0 bottom-1/2 translate-y-1/2">STUDIO</p></div>
            </div>
            <div className="flex flex-1 w-full bg-[#E0E0E0]"></div>
        </div>
    )
}