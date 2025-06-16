
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 font-mono ${
      isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-green-400' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-green-400 font-mono">
            {'> FANDI_AR'}
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-green-300 hover:text-green-100 font-medium transition-colors duration-200 font-mono border border-green-400 px-3 py-1 hover:bg-green-400 hover:text-black"
              >
                [{item.toUpperCase()}]
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-green-400 border border-green-400 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-black border border-green-400">
            {['About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-4 py-2 text-green-300 hover:text-green-100 hover:bg-green-400 hover:text-black font-mono"
              >
                [{item.toUpperCase()}]
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};
