"use client";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useState, useEffect, useCallback, memo } from "react";
import Image from "next/image";

type WorkType = {
    project_name: string;
    location: string;
    year: string;
    category: string;
    id: string;
    image: string;
};

const works: WorkType[] = [
    {
        "id": "01",
        "project_name": "THE MONOLITH",
        "location": "Berlin, DE",
        "year": "2024",
        "category": "Residential",
        "image": "/stock1.png"
    },
    {
        "id": "02",
        "project_name": "VOID PAVILION",
        "location": "Tokyo, JP",
        "year": "2023",
        "category": "Cultural",
        "image": "/stock2.png"
    },
    {
        "id": "03",
        "project_name": "OBSIDIAN HOTEL",
        "location": "Reykjavik, IS",
        "year": "2024",
        "category": "Hospitality",
        "image": "/stock3.png"
    },
    {
        "id": "04",
        "project_name": "LINEAR GALLERY",
        "location": "London, UK",
        "year": "2022",
        "category": "Art & Space",
        "image": "/stock4.png"
    },
    {
        "id": "05",
        "project_name": "GRAVITY LIBRARY",
        "location": "Oslo, NO",
        "year": "2023",
        "category": "Public",
        "image": "/stock5.png"
    },
    {
        "id": "06",
        "project_name": "TERRACOTTA RETREAT",
        "location": "Sedona, US",
        "year": "2021",
        "category": "Wellness",
        "image": "/stock6.png"
    },
    {
        "id": "07",
        "project_name": "ZENITH TOWER",
        "location": "Dubai, UAE",
        "year": "2025",
        "category": "Corporate",
        "image": "/stock8.png"
    },
    {
        "id": "08",
        "project_name": "ECHO RESIDENCE",
        "location": "Zurich, CH",
        "year": "2023",
        "category": "Residential",
        "image": "/stock9.png"
    },
    {
        "id": "09",
        "project_name": "CANVAS LOFT",
        "location": "New York, US",
        "year": "2022",
        "category": "Interior",
        "image": "/stock10.png"
    },
    {
        "id": "10",
        "project_name": "THE GRID PLAZA",
        "location": "Seoul, KR",
        "year": "2024",
        "category": "Urban",
        "image": "/stock11.png"
    },
];

const WorkItem = memo(function WorkItem({
    work,
    isFirst,
    onHover,
    onLeave
}: {
    work: WorkType;
    isFirst: boolean;
    onHover: (id: string) => void;
    onLeave: () => void;
}) {
    const [overlayState, setOverlayState] = useState<"bottom" | "visible" | "top">("bottom");

    const handleMouseEnter = useCallback(() => {
        onHover(work.id);
        setOverlayState("visible");
    }, [onHover, work.id]);

    const handleMouseLeave = useCallback(() => {
        onLeave();
        setOverlayState("top");
    }, [onLeave]);

    const handleAnimationComplete = useCallback(() => {
        if (overlayState === "top") {
            setOverlayState("bottom");
        }
    }, [overlayState]);

    const getY = () => {
        switch (overlayState) {
            case "bottom": return "100%";
            case "visible": return "0%";
            case "top": return "-100%";
        }
    };

    return (
        <motion.div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            animate={{ color: overlayState === "visible" ? "#ffffff" : "#000000", borderColor: "#1D1D1D" }}
            transition={{ duration: 0.3 }}
            className={`w-full h-20 flex flex-row items-center justify-between p-2 border-b-3 ${isFirst ? "border-t-3" : ""} block overflow-hidden relative cursor-pointer`}
        >
            <h2 className="text-2xl font-medium z-10">{work.id}</h2>
            <motion.h3
                className="text-2xl z-10"
            >
                {work.project_name}
            </motion.h3>
            <motion.p
                className="text-2xl z-10"
            >
                {work.location}
            </motion.p>
            <p className="text-2xl z-10">{work.year}</p>
            <p className="text-2xl z-10">{work.category}</p>
            <motion.div
                animate={{ y: getY() }}
                transition={{
                    duration: overlayState === "bottom" ? 0 : 0.3,
                    ease: "easeOut"
                }}
                onAnimationComplete={handleAnimationComplete}
                className="w-full h-full absolute top-0 left-0 bg-[#1D1D1D]"
            />
        </motion.div>
    );
});

function CursorFollower({ hoveredWorkId }: { hoveredWorkId: string | null }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 200 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX - 150);
            mouseY.set(e.clientY - 100);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-[300px] h-[200px] pointer-events-none z-50 overflow-hidden shadow-2xl"
            style={{ x, y }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
                opacity: hoveredWorkId ? 1 : 0,
                scale: hoveredWorkId ? 1 : 0.8
            }}
            transition={{ duration: 0.2 }}
        >
            {works.map((work) => (
                <div
                    key={work.id}
                    className="absolute inset-0 w-full h-full"
                    style={{
                        opacity: hoveredWorkId === work.id ? 1 : 0,
                        transition: "opacity 0.15s ease-out",
                        zIndex: hoveredWorkId === work.id ? 1 : 0
                    }}
                >
                    <Image
                        src={work.image}
                        alt={work.project_name}
                        fill
                        className="object-cover"
                        priority
                        sizes="300px"
                    />
                </div>
            ))}
        </motion.div>
    );
}

export default function Works() {
    const [hoveredWorkId, setHoveredWorkId] = useState<string | null>(null);

    const handleHover = useCallback((id: string) => {
        setHoveredWorkId(id);
    }, []);

    const handleLeave = useCallback(() => {
        setHoveredWorkId(null);
    }, []);

    return (
        <>
            <CursorFollower hoveredWorkId={hoveredWorkId} />
            <div className="w-full flex flex-col items-center justify-center p-4">
                {works.map((work, index) => (
                    <WorkItem
                        key={work.id}
                        work={work}
                        isFirst={index === 0}
                        onHover={handleHover}
                        onLeave={handleLeave}
                    />
                ))}
            </div>
        </>
    );
}