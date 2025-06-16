
import React from 'react';
import { Github, Mail, Phone, MapPin, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h3>
            <div className="space-y-4">
              <a 
                href="mailto:fandiagusriyanto@gmail.com" 
                className="flex items-center hover:text-blue-400 transition-colors"
              >
                <Mail size={20} className="mr-3" />
                fandiagusriyanto@gmail.com
              </a>
              <a 
                href="tel:+6281316844738" 
                className="flex items-center hover:text-blue-400 transition-colors"
              >
                <Phone size={20} className="mr-3" />
                +62 813-1684-4738
              </a>
              <div className="flex items-center">
                <MapPin size={20} className="mr-3" />
                Indonesia
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
            <div className="space-y-2">
              {['About', 'Experience', 'Projects', 'Skills', 'Education'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block hover:text-blue-400 transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Social & Professional */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Connect</h3>
            <div className="space-y-4">
              <a 
                href="https://github.com/FandiAR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center hover:text-blue-400 transition-colors"
              >
                <Github size={20} className="mr-3" />
                GitHub Profile
              </a>
              <p className="text-gray-400 leading-relaxed">
                Open to new opportunities and collaborations. Let's build something amazing together!
              </p>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-12" />

        <div className="text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart size={16} className="mx-2 text-red-500" /> by Fandi Agus Riyanto
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2024 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
