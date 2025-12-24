import Clients from "@/components/clients";
import Hero from "@/components/hero";
import SelectedWorks from "@/components/selectedWorks";
import Marquee from "@/components/marquee";
import { ReactLenis } from "lenis/react";
import Works from "@/components/works";
import Studio from "@/components/studio";

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <ReactLenis root />
      <Hero />
      <Clients />
      <SelectedWorks />
      <Marquee />
      <Works />
      <Studio />
    </main>
  );
}