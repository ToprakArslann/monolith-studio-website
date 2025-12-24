"use client"
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Marquee() {
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: container, offset: ["start 1.2", "2 end"] });
    const x1 = useTransform(scrollYProgress, [0, 1], ["-30%", "20%"]);
    const x2 = useTransform(scrollYProgress, [0, 1], ["30%", "-20%"]);
    const x3 = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);
    const x4 = useTransform(scrollYProgress, [0, 1], ["20%", "-30%"]);
    return (
        <div ref={container} className="w-full flex flex-col items-center justify-center overflow-hidden pt-20">
            <motion.h2 style={{ x: x1 }} className="text-[12vw]/[90%] font-monument-bold text-center uppercase whitespace-nowrap ">
                <a href="" className="hover:text-[#9589D3] transition-colors">INDEX<span className="text-[2vw]">10</span></a>·
                <a href="" className="hover:text-[#a50000] transition-colors"> STUDIO<span className="text-[2vw]">1</span></a> ·
                <a href="" className="hover:text-[#ffbb00] transition-colors"> HOME<span className="text-[2vw]">1</span></a> ·
                <a href="" className="hover:text-[#9589D3] transition-colors"> INDEX<span className="text-[2vw]">10</span></a> ·
                <a href="" className="hover:text-[#a50000] transition-colors"> STUDIO<span className="text-[2vw]">1</span></a> ·
                <a href="" className="hover:text-[#ffbb00] transition-colors"> HOME<span className="text-[2vw]">1</span></a> ·
            </motion.h2>
            <motion.h2 style={{ x: x2 }} className="text-[12vw]/[90%] font-monument-bold text-center uppercase whitespace-nowrap">
                <a href="" className="hover:text-[#9589D3] transition-colors">INDEX<span className="text-[2vw]">10</span></a>·
                <a href="" className="hover:text-[#a50000] transition-colors"> STUDIO<span className="text-[2vw]">1</span></a> ·
                <a href="" className="hover:text-[#ffbb00] transition-colors"> HOME<span className="text-[2vw]">1</span></a> ·
                <a href="" className="hover:text-[#9589D3] transition-colors"> INDEX<span className="text-[2vw]">10</span></a> ·
                <a href="" className="hover:text-[#a50000] transition-colors"> STUDIO<span className="text-[2vw]">1</span></a> ·
                <a href="" className="hover:text-[#ffbb00] transition-colors"> HOME<span className="text-[2vw]">1</span></a> ·
            </motion.h2>
            <motion.h2 style={{ x: x3 }} className="text-[12vw]/[90%] font-monument-bold text-center uppercase whitespace-nowrap">
                <a href="" className="hover:text-[#9589D3] transition-colors">INDEX<span className="text-[2vw]">10</span></a>·
                <a href="" className="hover:text-[#a50000] transition-colors"> STUDIO<span className="text-[2vw]">1</span></a> ·
                <a href="" className="hover:text-[#ffbb00] transition-colors"> HOME<span className="text-[2vw]">1</span></a> ·
                <a href="" className="hover:text-[#9589D3] transition-colors"> INDEX<span className="text-[2vw]">10</span></a> ·
                <a href="" className="hover:text-[#a50000] transition-colors"> STUDIO<span className="text-[2vw]">1</span></a> ·
                <a href="" className="hover:text-[#ffbb00] transition-colors"> HOME<span className="text-[2vw]">1</span></a> ·
            </motion.h2>
            <motion.h2 style={{ x: x4 }} className="text-[12vw]/[90%] font-monument-bold text-center uppercase whitespace-nowrap">
                <a href="" className="hover:text-[#9589D3] transition-colors">INDEX<span className="text-[2vw]">10</span></a>·
                <a href="" className="hover:text-[#a50000] transition-colors"> STUDIO<span className="text-[2vw]">1</span></a> ·
                <a href="" className="hover:text-[#ffbb00] transition-colors"> HOME<span className="text-[2vw]">1</span></a> ·
                <a href="" className="hover:text-[#9589D3] transition-colors"> INDEX<span className="text-[2vw]">10</span></a> ·
                <a href="" className="hover:text-[#a50000] transition-colors"> STUDIO<span className="text-[2vw]">1</span></a> ·
                <a href="" className="hover:text-[#ffbb00] transition-colors"> HOME<span className="text-[2vw]">1</span></a> ·
            </motion.h2>
        </div>
    );
}