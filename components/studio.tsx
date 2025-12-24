"use client";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
export default function Studio() {
    const container = useRef<HTMLDivElement>(null);
    const container2 = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: container, offset: ["start 0.9", "end end"] });
    const { scrollYProgress: scrollYProgress2 } = useScroll({ target: container2, offset: ["start 0.9", "end end"] });
    const height1 = useTransform(scrollYProgress, [0, 1], [`${Math.random() * 60}vh`, "100vh"]);
    const height2 = useTransform(scrollYProgress, [0, 1], [`${Math.random() * 60}vh`, "100vh"]);
    const height3 = useTransform(scrollYProgress, [0, 1], [`${Math.random() * 60}vh`, "100vh"]);
    const height4 = useTransform(scrollYProgress, [0, 1], [`${Math.random() * 60}vh`, "100vh"]);
    const height5 = useTransform(scrollYProgress, [0, 1], [`${Math.random() * 60}vh`, "100vh"]);
    const height6 = useTransform(scrollYProgress, [0, 1], [`${Math.random() * 60}vh`, "100vh"]);
    const height7 = useTransform(scrollYProgress, [0, 1], [`${Math.random() * 60}vh`, "100vh"]);
    const height8 = useTransform(scrollYProgress, [0, 1], [`${Math.random() * 60}vh`, "100vh"]);
    const height9 = useTransform(scrollYProgress, [0, 1], [`${Math.random() * 60}vh`, "100vh"]);
    const height10 = useTransform(scrollYProgress, [0, 1], [`${Math.random() * 60}vh`, "100vh"]);

    const rotate = useTransform(scrollYProgress2, [0, 1], ["15deg", "0deg"]);
    return (
        <div className="w-full flex flex-col">
            <div ref={container} className="w-full h-screen relative flex flex-row items-end justify-between">
                <motion.div className="w-full bg-[#1D1D1D]" style={{ height: height1 }}></motion.div>
                <motion.div className="w-full bg-[#1D1D1D]" style={{ height: height2 }}></motion.div>
                <motion.div className="w-full bg-[#1D1D1D]" style={{ height: height3 }}></motion.div>
                <motion.div className="w-full bg-[#1D1D1D]" style={{ height: height4 }}></motion.div>
                <motion.div className="w-full bg-[#1D1D1D]" style={{ height: height5 }}></motion.div>
                <motion.div className="w-full bg-[#1D1D1D]" style={{ height: height6 }}></motion.div>
                <motion.div className="w-full bg-[#1D1D1D]" style={{ height: height7 }}></motion.div>
                <motion.div className="w-full bg-[#1D1D1D]" style={{ height: height8 }}></motion.div>
                <motion.div className="w-full bg-[#1D1D1D]" style={{ height: height9 }}></motion.div>
                <motion.div className="w-full bg-[#1D1D1D]" style={{ height: height10 }}></motion.div>
            </div>
            <div ref={container2} className="w-full h-screen flex flex-col items-center justify-between gap-4 bg-[#1D1D1D] text-white p-10 overflow-hidden">
                <div className="w-full h-full flex flex-row items-center justify-between gap-10 ">
                    <div className="w-full z-10 text-xl">
                        <p>
                            At <span className="font-bold italic">MONOLITH</span>, we believe architecture is the ultimate dialogue between raw matter <br /> and light. We do not just build structures; we create monuments of brutal simplicity <br /> that stand as a testament to permanence in an era of the ephemeral. <br />
                            <br />
                            Our philosophy is rooted in the <span className="font-bold italic">Void</span>. By stripping away the unnecessary, we reveal <br /> the soul of the space. We work with the honesty of concrete, the precision of steel, <br /> and the poetry of shadows.
                            <br />
                            <br />
                            We don’t follow trends; we define <span className="font-bold italic">Horizons</span>. Every line we draw is a commitment to a <br /> future where form doesn't just follow function—it elevates the human experience <br /> through silence and geometric truth.
                        </p>
                    </div>
                    <motion.div style={{ rotate: rotate }} className="w-2/4 aspect-square relative flex items-center justify-center">
                        <Image src="/stock7.png" alt="stock7" fill className="object-cover z-1" />
                    </motion.div>
                </div>
                <div className="w-full flex flex-col ">
                    <h2 className="text-[10vw]/[90%] font-monument-bold">STUDIO *</h2>
                    <p className="text-md">RAW MATERIALS. REFINED SPACES. FOR THE NEXT ERA.</p>
                </div>
            </div>
        </div>
    );
}