import Hero from "@/components/hero";
import { ReactLenis } from "lenis/react";

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <ReactLenis root />
      <Hero />
    </main>
  );
}