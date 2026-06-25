import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { Reasons } from "@/components/sections/Reasons";
import { CargoVans } from "@/components/sections/CargoVans";
import { EarningsCalculator } from "@/components/sections/EarningsCalculator";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { Safety } from "@/components/sections/Safety";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Reasons />
        <EarningsCalculator />
        <CargoVans />
        <HowItWorks />
        <Testimonials />
        <Safety />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
