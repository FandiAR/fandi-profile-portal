
import React from 'react';
import { Github, Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

export const Hero = () => {
  const { isDark } = useTheme();

  return (
    <section id="about" className={`pt-20 pb-16 px-6 transition-colors duration-300 ${
      isDark ? 'bg-black text-green-400' : 'bg-gradient-to-br from-blue-50 to-indigo-100 text-blue-900'
    }`}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center animate-fade-in">
          <div className={`border p-8 transition-colors duration-300 ${
            isDark 
              ? 'border-green-400 bg-black' 
              : 'border-blue-200 bg-white shadow-xl rounded-xl'
          }`}>
            <h1 className={`text-4xl lg:text-6xl font-bold mb-6 font-mono ${
              isDark ? 'text-green-400' : 'text-blue-600'
            }`}>
              <span>
                {isDark ? '> FANDI AGUS RIYANTO' : 'FANDI AGUS RIYANTO'}
              </span>
            </h1>
            <h2 className={`text-xl lg:text-2xl mb-6 font-mono ${
              isDark ? 'text-green-300' : 'text-blue-700'
            }`}>
              {isDark ? '[ENGINEERING_MANAGER & TECHNICAL_LEAD]' : 'Engineering Manager & Technical Lead'}
            </h2>
            <div className="text-left max-w-4xl mx-auto mb-8">
              <p className={`mb-4 font-mono text-sm leading-relaxed ${
                isDark ? 'text-green-300' : 'text-blue-700'
              }`}>
                {isDark ? '//' : ''} Experienced Engineering Manager and Technical Lead with 9+ years of expertise
              </p>
              <p className={`mb-4 font-mono text-sm leading-relaxed ${
                isDark ? 'text-green-300' : 'text-blue-700'
              }`}>
                {isDark ? '//' : ''} in software development, team leadership, and software architecture.
              </p>
              <p className={`mb-4 font-mono text-sm leading-relaxed ${
                isDark ? 'text-green-300' : 'text-blue-700'
              }`}>
                {isDark ? '//' : ''} Proven track record in managing cross-functional teams, improving CI/CD
              </p>
              <p className={`mb-4 font-mono text-sm leading-relaxed ${
                isDark ? 'text-green-300' : 'text-blue-700'
              }`}>
                {isDark ? '//' : ''} pipelines, and securing ISMS certifications, including ISO 27001.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 text-sm">
              <a href="mailto:fandiagusriyanto@gmail.com" className={`flex items-center gap-2 transition-colors border p-2 ${
                isDark 
                  ? 'text-green-300 hover:text-green-100 border-green-400 hover:bg-green-400 hover:text-black' 
                  : 'text-blue-700 hover:text-blue-600 border-blue-200 hover:bg-blue-600 hover:text-white rounded'
              }`}>
                <Mail size={16} />
                fandiagusriyanto@gmail.com
              </a>
              <a href="tel:+6281316844738" className={`flex items-center gap-2 transition-colors border p-2 ${
                isDark 
                  ? 'text-green-300 hover:text-green-100 border-green-400 hover:bg-green-400 hover:text-black' 
                  : 'text-blue-700 hover:text-blue-600 border-blue-200 hover:bg-blue-600 hover:text-white rounded'
              }`}>
                <Phone size={16} />
                +62-813-1684-4738
              </a>
              <a href="https://id.linkedin.com/in/fandiar" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 transition-colors border p-2 ${
                isDark 
                  ? 'text-green-300 hover:text-green-100 border-green-400 hover:bg-green-400 hover:text-black' 
                  : 'text-blue-700 hover:text-blue-600 border-blue-200 hover:bg-blue-600 hover:text-white rounded'
              }`}>
                <Linkedin size={16} />
                LINKEDIN
              </a>
              <div className={`flex items-center gap-2 border p-2 ${
                isDark 
                  ? 'text-green-300 border-green-400' 
                  : 'text-blue-700 border-blue-200 rounded'
              }`}>
                <MapPin size={16} />
                INDONESIA
              </div>
            </div>

            <div className="flex justify-center">
              <Button asChild className={`font-mono transition-all duration-300 ${
                isDark 
                  ? 'bg-transparent border border-green-400 text-green-400 hover:bg-green-400 hover:text-black' 
                  : 'bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
              }`}>
                <a href="https://github.com/FandiAR" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2" size={20} />
                  {isDark ? '[VIEW_GITHUB]' : 'VIEW GITHUB'}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
