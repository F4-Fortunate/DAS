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
import Chat from "../components/Chat";
const Index = () => {
  const location = useLocation();

  // Force fresh page load behavior
  useEffect(() => {
    // Scroll to top immediately
    window.scrollTo(0, 0);

    // Force a small delay to ensure clean rendering like a page reload
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      // Force re-render of all child components
      document.body.style.display = "none";
      document.body.offsetHeight; // Trigger reflow
      document.body.style.display = "";
    }, 10);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      {/* <Chat /> */}
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
