import { useState, useEffect } from "react";
import Confetti from "@/components/Confetti";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AchievementsSection from "@/components/AchievementsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Stop confetti after 8 seconds
    const timer = setTimeout(() => setShowConfetti(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen">
      {showConfetti && <Confetti />}
      <HeroSection />
      <AboutSection />
      <AchievementsSection />
      <CtaSection />
      <Footer />
    </main>
  );
};

export default Index;
