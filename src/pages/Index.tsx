
import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { TechStack } from '@/components/TechStack';
import { Education } from '@/components/Education';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { useTheme } from '@/contexts/ThemeContext';

const Index = () => {
  const { isDark } = useTheme();
  
  return (
    <div className={`min-h-screen font-mono transition-colors duration-300 ${
      isDark ? 'bg-black text-green-400' : 'bg-white text-blue-900'
    }`}>
      <Header />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <TechStack />
      <Education />
      <ContactForm />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
