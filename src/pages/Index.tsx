import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ProcessSection from "../components/ProcessSection";
import ServicesSection from "../components/ServicesSection";
import ExperimentsSection from "../components/ExperimentsSection";
import MomentsSection from "../components/MomentsSection";
import PortfolioSection from "../components/PortfolioSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import NewHeroSection from "../components/NewHero";
const Index = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      document.body.style.display = "none";
      document.body.offsetHeight; 
      document.body.style.display = "";
    }, 10);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <NewHeroSection/>
      <Header />
      <HeroSection />
      <ProcessSection />
      <ServicesSection />
      <ExperimentsSection />
      <MomentsSection />
      <PortfolioSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
