import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProgramSection from './components/ProgramSection';
import KeunggulanSection from './components/KeunggulanSection';
import GaleriSection from './components/GaleriSection';
import FaqSection from './components/FaqSection';
import KontakSection from './components/KontakSection';
import Footer from './components/Footer';
import ParentPortalModal from './components/ParentPortalModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { useLandingAnimations } from './hooks/useLandingAnimations';

export default function App() {
  const [portalOpen, setPortalOpen] = useState(false);

  useLandingAnimations();

  return (
    <>
      <Navbar onOpenPortal={() => setPortalOpen(true)} />
      <main className="w-full" id="main-content">
        <HeroSection />
        <AboutSection />
        <ProgramSection />
        <KeunggulanSection />
        <GaleriSection />
        <FaqSection />
        <KontakSection />
      </main>
      <Footer />
      <ParentPortalModal isOpen={portalOpen} onClose={() => setPortalOpen(false)} />
      <FloatingWhatsApp />
    </>
  );
}
