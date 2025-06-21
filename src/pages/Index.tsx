
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import PricingWithOrder from '@/components/PricingWithOrder';
import Footer from '@/components/Footer';
import GDPRConsent from '@/components/GDPRConsent';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const Index = () => {
  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme === 'light') {
      document.body.classList.add('light-mode');
    } else if (storedTheme === 'dark') {
      document.body.classList.remove('light-mode');
    } else if (!prefersDarkMode) {
      document.body.classList.add('light-mode');
    }
  }, []);

  const toggleTheme = () => {
    document.body.classList.toggle('light-mode');
    const currentTheme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <Features />
        <Testimonials />
        <PricingWithOrder />
      </main>
      <Footer />
      {/* Theme Toggle Button (for demonstration) */}
      <button
        onClick={toggleTheme}
        className="fixed bottom-4 right-4 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg"
        aria-label="Toggle theme"
      >
        {document.body.classList.contains('light-mode') ? (
          <MdDarkMode size={24} />
        ) : (
          <MdLightMode size={24} />
        )}
      </button>
      <GDPRConsent />
    </div>
  );
};

export default Index;
