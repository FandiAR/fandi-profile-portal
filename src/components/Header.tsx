
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useTheme } from '@/contexts/ThemeContext';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark } = useTheme();

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
      isScrolled 
        ? isDark 
          ? 'bg-black/90 backdrop-blur-md border-b border-green-400' 
          : 'bg-white/90 backdrop-blur-md border-b border-blue-200 shadow-sm'
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className={`text-2xl font-bold font-mono ${
            isDark ? 'text-green-400' : 'text-blue-600'
          }`}>
            {isDark ? '> FANDI_AR' : 'FANDI AR'}
          </div>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4">
              {['About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`font-medium transition-colors duration-200 font-mono border px-3 py-1 ${
                    isDark 
                      ? 'text-green-300 hover:text-green-100 border-green-400 hover:bg-green-400 hover:text-black' 
                      : 'text-blue-600 hover:text-blue-800 border-blue-200 hover:bg-blue-600 hover:text-white'
                  }`}
                >
                  {isDark ? `[${item.toUpperCase()}]` : item.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden border p-2 ${
                isDark 
                  ? 'text-green-400 border-green-400' 
                  : 'text-blue-600 border-blue-200'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`md:hidden mt-4 py-4 border ${
            isDark 
              ? 'bg-black border-green-400' 
              : 'bg-white border-blue-200 shadow-lg rounded'
          }`}>
            {['About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`block w-full text-left px-4 py-2 font-mono transition-colors ${
                  isDark 
                    ? 'text-green-300 hover:text-green-100 hover:bg-green-400 hover:text-black' 
                    : 'text-blue-600 hover:text-blue-800 hover:bg-blue-50'
                }`}
              >
                {isDark ? `[${item.toUpperCase()}]` : item.toUpperCase()}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};
