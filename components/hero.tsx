"use client"
import { easeInOut, motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "1.05 end"]
    })
    const width = useTransform(scrollYProgress, (val) => `calc(300px + (${val} * (100% - 300px)))`)
    const height = useTransform(scrollYProgress, (val) => `calc(400px + (${val} * (100% - 400px)))`)
    const rotate = useTransform(scrollYProgress, [0, 0.9], ["30deg", "0deg"])
    const xBig1 = useTransform(scrollYProgress, [0, 0.9], ["-4%", "-6%"])
    const xBig2 = useTransform(scrollYProgress, [0, 0.9], ["9.5%", "11.5%"])

    const studio = "MONOLITH STUDIO MONOLITH STUDIO";
    return (
        <div ref={container} className="w-full h-[300vh] flex justify-center relative">
            <div className="w-full h-screen sticky top-0 flex items-center justify-center overflow-hidden">

                <div className="absolute top-25 w-full flex justify-center">
                    <motion.div className="overflow-hidden absolute left-1/2 -translate-x-1/2 top-0">
                        <motion.h1 style={{ x: xBig1 }} className="font-monument-bold text-[11vw] leading-[0.9] whitespace-nowrap ">
                            {studio.split("").map((char, index) => (
                                <motion.span
                                    className="inline-block"
                                    initial={{ y: "100%" }}
                                    animate={{ y: "0%" }}
                                    transition={{ delay: 0.2 + index * 0.06, duration: 1, ease: easeInOut }}
                                    key={index}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </motion.h1>
                    </motion.div>
                </div>
                <div className="absolute bottom-25 w-full flex justify-center">
                    <motion.div className="overflow-hidden absolute left-1/2 -translate-x-1/2 bottom-0">
                        <motion.h1 style={{ x: xBig2 }} className="font-monument-bold text-[11vw] leading-[0.9] whitespace-nowrap ">
                            {studio.split("").map((char, index) => (
                                <motion.span
                                    className="inline-block"
                                    initial={{ y: "100%" }}
                                    animate={{ y: "0%" }}
                                    transition={{ delay: (0.2 + index * 0.06), duration: 1, ease: easeInOut }}
                                    key={index}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </motion.h1>
                    </motion.div>
                </div>

                <div className="relative w-full h-full flex items-center justify-center">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1, duration: 0.2 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 aspect-3/4">
                        <Image src="/stock4.png" alt="stock4" fill className="object-cover" />
                    </motion.div>
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.2, duration: 0.4 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 aspect-3/4 rotate-10 ">
                        <Image src="/stock3.png" alt="stock3" fill className="object-cover" />
                    </motion.div>
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.4, duration: 0.6 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 aspect-3/4 rotate-20 ">
                        <Image src="/stock2.png" alt="stock2" fill className="object-cover" />
                    </motion.div>
                    <motion.div style={{ width: width, height: height, rotate: rotate }} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.6, duration: 0.8 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex shrink-0 items-center justify-center overflow-hidden">
                        <Image src="/stock1.png" alt="stock1" fill className="object-cover absolute z-0" />
                        <h2 className="text-[10vw] font-monument text-white z-1">M</h2>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}