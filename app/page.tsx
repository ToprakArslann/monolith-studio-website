import Clients from "@/components/clients";
import Hero from "@/components/hero";
import SelectedWorks from "@/components/selectedWorks";
import { ReactLenis } from "lenis/react";

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <ReactLenis root />
      <Hero />
      <Clients />
      <SelectedWorks />
    </main>
  );
}