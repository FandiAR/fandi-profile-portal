
import React from 'react';
import { Github, Mail, Phone, MapPin, Heart, Linkedin } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export const Footer = () => {
  const { isDark } = useTheme();

  return (
    <footer className={`border-t py-16 transition-colors duration-300 ${
      isDark 
        ? 'bg-black border-green-400 text-green-400' 
        : 'bg-gradient-to-br from-slate-50 to-blue-50 border-blue-200 text-blue-900'
    }`}>
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className={`border p-6 ${
            isDark ? 'border-green-400' : 'border-blue-200 bg-white rounded-xl shadow-lg'
          }`}>
            <h3 className={`text-2xl font-bold mb-6 font-mono ${
              isDark ? 'text-green-400' : 'text-blue-600'
            }`}>
              {isDark ? '> GET_IN_TOUCH' : 'Get In Touch'}
            </h3>
            <div className="space-y-4">
              <a 
                href="mailto:fandiagusriyanto@gmail.com" 
                className={`flex items-center transition-colors font-mono text-sm ${
                  isDark 
                    ? 'text-green-300 hover:text-green-100' 
                    : 'text-blue-700 hover:text-blue-600'
                }`}
              >
                <Mail size={16} className="mr-3" />
                fandiagusriyanto@gmail.com
              </a>
              <a 
                href="tel:+6281316844738" 
                className={`flex items-center transition-colors font-mono text-sm ${
                  isDark 
                    ? 'text-green-300 hover:text-green-100' 
                    : 'text-blue-700 hover:text-blue-600'
                }`}
              >
                <Phone size={16} className="mr-3" />
                +62 813-1684-4738
              </a>
              <a 
                href="https://id.linkedin.com/in/fandiar" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center transition-colors font-mono text-sm ${
                  isDark 
                    ? 'text-green-300 hover:text-green-100' 
                    : 'text-blue-700 hover:text-blue-600'
                }`}
              >
                <Linkedin size={16} className="mr-3" />
                LinkedIn Profile
              </a>
              <div className={`flex items-center font-mono text-sm ${
                isDark ? 'text-green-300' : 'text-blue-700'
              }`}>
                <MapPin size={16} className="mr-3" />
                Indonesia
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className={`border p-6 ${
            isDark ? 'border-green-400' : 'border-blue-200 bg-white rounded-xl shadow-lg'
          }`}>
            <h3 className={`text-2xl font-bold mb-6 font-mono ${
              isDark ? 'text-green-400' : 'text-blue-600'
            }`}>
              {isDark ? '> QUICK_LINKS' : 'Quick Links'}
            </h3>
            <div className="space-y-2">
              {['About', 'Experience', 'Projects', 'Skills', 'Education'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`block transition-colors font-mono text-sm ${
                    isDark 
                      ? 'text-green-300 hover:text-green-100' 
                      : 'text-blue-700 hover:text-blue-600'
                  }`}
                >
                  {isDark ? '>' : '•'} {link.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Social & Professional */}
          <div className={`border p-6 ${
            isDark ? 'border-green-400' : 'border-blue-200 bg-white rounded-xl shadow-lg'
          }`}>
            <h3 className={`text-2xl font-bold mb-6 font-mono ${
              isDark ? 'text-green-400' : 'text-blue-600'
            }`}>
              {isDark ? '> CONNECT' : 'Connect'}
            </h3>
            <div className="space-y-4">
              <a 
                href="https://github.com/FandiAR" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center transition-colors font-mono text-sm ${
                  isDark 
                    ? 'text-green-300 hover:text-green-100' 
                    : 'text-blue-700 hover:text-blue-600'
                }`}
              >
                <Github size={16} className="mr-3" />
                GitHub Profile
              </a>
              <p className={`leading-relaxed font-mono text-sm ${
                isDark ? 'text-green-300' : 'text-blue-700'
              }`}>
                {isDark ? '//' : ''} Open to new opportunities and collaborations.
              </p>
              <p className={`leading-relaxed font-mono text-sm ${
                isDark ? 'text-green-300' : 'text-blue-700'
              }`}>
                {isDark ? '//' : ''} Let's build something amazing together!
              </p>
            </div>
          </div>
        </div>

        <hr className={`my-12 ${isDark ? 'border-green-400' : 'border-blue-200'}`} />

        <div className="text-center">
          <p className={`flex items-center justify-center font-mono ${
            isDark ? 'text-green-300' : 'text-blue-700'
          }`}>
            Made with <Heart size={16} className={`mx-2 ${isDark ? 'text-green-400' : 'text-red-500'}`} /> by Fandi Agus Riyanto
          </p>
          <p className={`text-sm mt-2 font-mono ${
            isDark ? 'text-green-500' : 'text-blue-600'
          }`}>
            © 2024 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
