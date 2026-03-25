import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import ProtocolFlow from "@/components/ProtocolFlow";
import Solution from "@/components/Solution";
import Ecosystem from "@/components/Ecosystem";
import HowItWorks from "@/components/HowItWorks";

import TechStack from "@/components/TechStack";
import Features from "@/components/Features";
import InteractiveMap from "@/components/Map";
import Tokenomics from "@/components/Tokenomics";
import { FinalCTA } from "@/components/Final";
import ThreeBackground from "@/components/ThreeBackground";

export default function Home() {
  return (
    <main>
      <Preloader />
      <Navbar />
      <ThreeBackground />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <div id="protocol">
          <Problem />
          <ProtocolFlow />
          <Solution />
        </div>
        <Ecosystem />
        <HowItWorks />

        <div id="assets"><InteractiveMap /></div>
        <Features />
        <TechStack />
        <div id="economy"><Tokenomics /></div>
        <FinalCTA />
      </div>
    </main>
  );
}
