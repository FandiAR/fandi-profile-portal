
import React from 'react';
import { Github, Mail, Phone, MapPin, Heart, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-black border-t border-green-400 text-green-400 py-16">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="border border-green-400 p-6">
            <h3 className="text-2xl font-bold mb-6 text-green-400 font-mono">
              {'>'} GET_IN_TOUCH
            </h3>
            <div className="space-y-4">
              <a 
                href="mailto:fandiagusriyanto@gmail.com" 
                className="flex items-center hover:text-green-100 transition-colors font-mono text-sm"
              >
                <Mail size={16} className="mr-3" />
                fandiagusriyanto@gmail.com
              </a>
              <a 
                href="tel:+6281316844738" 
                className="flex items-center hover:text-green-100 transition-colors font-mono text-sm"
              >
                <Phone size={16} className="mr-3" />
                +62 813-1684-4738
              </a>
              <a 
                href="https://id.linkedin.com/in/fandiar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center hover:text-green-100 transition-colors font-mono text-sm"
              >
                <Linkedin size={16} className="mr-3" />
                LinkedIn Profile
              </a>
              <div className="flex items-center font-mono text-sm">
                <MapPin size={16} className="mr-3" />
                Indonesia
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="border border-green-400 p-6">
            <h3 className="text-2xl font-bold mb-6 font-mono text-green-400">{'>'} QUICK_LINKS</h3>
            <div className="space-y-2">
              {['About', 'Experience', 'Projects', 'Skills', 'Education'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block hover:text-green-100 transition-colors font-mono text-sm"
                >
                  {'>'} {link.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Social & Professional */}
          <div className="border border-green-400 p-6">
            <h3 className="text-2xl font-bold mb-6 font-mono text-green-400">{'>'} CONNECT</h3>
            <div className="space-y-4">
              <a 
                href="https://github.com/FandiAR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center hover:text-green-100 transition-colors font-mono text-sm"
              >
                <Github size={16} className="mr-3" />
                GitHub Profile
              </a>
              <p className="text-green-300 leading-relaxed font-mono text-sm">
                {'//'} Open to new opportunities and collaborations.
              </p>
              <p className="text-green-300 leading-relaxed font-mono text-sm">
                {'//'} Let's build something amazing together!
              </p>
            </div>
          </div>
        </div>

        <hr className="border-green-400 my-12" />

        <div className="text-center">
          <p className="text-green-300 flex items-center justify-center font-mono">
            Made with <Heart size={16} className="mx-2 text-green-400" /> by Fandi Agus Riyanto
          </p>
          <p className="text-green-500 text-sm mt-2 font-mono">
            © 2024 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
