import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import TechStack from "@/components/TechStack";
import Features from "@/components/Features";
import InteractiveMap from "@/components/Map";
import Tokenomics from "@/components/Tokenomics";
import Roadmap from "@/components/Roadmap";
import { Team, FinalCTA } from "@/components/Final";
import ThreeBackground from "@/components/ThreeBackground";

export default function Home() {
  return (
    <main>
      <Preloader />
      <Navbar />
      <ThreeBackground />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <div id="protocol"><Problem /></div>
        <Solution />
        <HowItWorks />
        <div id="assets"><InteractiveMap /></div>
        <Features />
        <TechStack />
        <div id="economy"><Tokenomics /></div>
        <div id="governance"><Roadmap /></div>
        <Team />
        <FinalCTA />
      </div>
    </main>
  );
}
