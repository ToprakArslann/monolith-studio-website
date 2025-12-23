"use client"
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react"
import Image from "next/image";

export default function SelectedWorks() {
    const [hoveredWork, setHoveredWork] = useState<{ name: string; desc: string } | null>(null);

    const works = [
        {
            name: "THE MONOLITH",
            desc: "A silent harmony of Brutalist concrete and raw textures.",
            image: "/stock1.png",
        },
        {
            name: "VOID PAVILION",
            desc: "A spatial exploration of the interplay between void and light.",
            image: "/stock2.png",
        },
        {
            name: "OBSIDIAN HOTEL",
            desc: "A dark, luxurious sanctuary inspired by volcanic rock formations.",
            image: "/stock3.png",
        },
        {
            name: "LINEAR GALLERY",
            desc: "Uninterrupted white lines centering art as the focal point.",
            image: "/stock4.png",
        },
        {
            name: "GRAVITY LIBRARY",
            desc: "Massive cantilevered structures defying the laws of gravity.",
            image: "/stock5.png",
        },
    ]

    return (
        <div className="w-full flex flex-col p-4 gap-4 bg-[#1A1A1A] text-white overflow-hidden">
            <div className="w-full flex items-center justify-between">
                <h2 className="text-4xl font-monument-bold text-center uppercase">Selected Works</h2>
                <a href="" className="flex flex-row items-center gap-2 p-2 border border-white hover:bg-white hover:text-black transition-colors">View Other Works <ArrowRight /></a>
            </div>
            <div className="w-full flex h-150 items-center justify-center p-5 relative">
                <div className="w-75 h-150 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                    <motion.div
                        initial={{ translateX: "0%", translateY: "0%", rotate: "0deg", zIndex: "1", filter: "brightness(60%)" }}
                        animate={{ translateX: "100%", translateY: "5%", rotate: "10deg" }}
                        whileHover={{ filter: "brightness(100%)", rotate: "0deg", zIndex: "10", transition: { duration: 0.1 } }}
                        exit={{ zIndex: "1" }}
                        transition={{ duration: 1 }}
                        className="w-75 aspect-3/4 absolute cursor-pointer"
                        onMouseEnter={() => setHoveredWork(works[4])}
                        onMouseLeave={() => setHoveredWork(null)}
                    >
                        <Image src="/stock5.png" alt="stock5" fill className="object-cover" />
                    </motion.div>
                    <motion.div
                        initial={{ translateX: "0%", translateY: "0%", rotate: "0deg", zIndex: "2", filter: "brightness(60%)" }}
                        animate={{ translateX: "50%", translateY: "0%", rotate: "5deg" }}
                        whileHover={{ filter: "brightness(100%)", rotate: "0deg", zIndex: "10", transition: { duration: 0.1 } }}
                        exit={{ zIndex: "2" }}
                        transition={{ duration: 1 }}
                        className="w-75 aspect-3/4 absolute cursor-pointer"
                        onMouseEnter={() => setHoveredWork(works[3])}
                        onMouseLeave={() => setHoveredWork(null)}
                    >
                        <Image src="/stock4.png" alt="stock4" fill className="object-cover" />
                    </motion.div>
                    <motion.div
                        initial={{ translateX: "0%", translateY: "0%", rotate: "0deg", zIndex: "3", filter: "brightness(60%)" }}
                        animate={{ translateX: "0%", translateY: "0%", rotate: "0deg" }}
                        whileHover={{ filter: "brightness(100%)", rotate: "0deg", zIndex: "10", transition: { duration: 0.1 } }}
                        exit={{ zIndex: "3" }}
                        transition={{ duration: 1 }}
                        className="w-75 aspect-3/4 absolute cursor-pointer"
                        onMouseEnter={() => setHoveredWork(works[2])}
                        onMouseLeave={() => setHoveredWork(null)}
                    >
                        <Image src="/stock3.png" alt="stock3" fill className="object-cover" />
                    </motion.div>
                    <motion.div
                        initial={{ translateX: "0%", translateY: "0%", rotate: "0deg", zIndex: "4", filter: "brightness(60%)" }}
                        animate={{ translateX: "-50%", translateY: "0%", rotate: "-5deg" }}
                        whileHover={{ filter: "brightness(100%)", rotate: "0deg", zIndex: "10", transition: { duration: 0.1 } }}
                        exit={{ zIndex: "4" }}
                        transition={{ duration: 1 }}
                        className="w-75 aspect-3/4 absolute cursor-pointer"
                        onMouseEnter={() => setHoveredWork(works[1])}
                        onMouseLeave={() => setHoveredWork(null)}
                    >
                        <Image src="/stock2.png" alt="stock2" fill className="object-cover" />
                    </motion.div>
                    <motion.div
                        initial={{ translateX: "0%", translateY: "0%", rotate: "0deg", zIndex: "5", filter: "brightness(60%)" }}
                        animate={{ translateX: "-100%", translateY: "5%", rotate: "-10deg" }}
                        whileHover={{ filter: "brightness(100%)", rotate: "0deg", zIndex: "10", transition: { duration: 0.1 } }}
                        exit={{ zIndex: "5" }}
                        transition={{ duration: 1 }}
                        className="w-75 aspect-3/4 absolute cursor-pointer"
                        onMouseEnter={() => setHoveredWork(works[0])}
                        onMouseLeave={() => setHoveredWork(null)}
                    >
                        <Image src="/stock1.png" alt="stock1" fill className="object-cover" />
                    </motion.div>
                </div>
            </div>

            <div className="w-full h-24 flex items-center justify-center">
                <AnimatePresence mode="wait">
                    {hoveredWork && (
                        <motion.div
                            key={hoveredWork.name}
                            className="text-center"
                        >
                            <h3 className="text-2xl font-medium uppercase">{hoveredWork.name}</h3>
                            <p className="text-gray-400 mt-1">{hoveredWork.desc}</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}