
import React from 'react';
import { Github, Mail, Phone, MapPin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <section id="about" className="pt-20 pb-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Fandi Agus Riyanto
              </span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-gray-700 mb-6">
              Engineering Manager & Technical Lead
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Experienced Engineering Manager and Technical Lead with 9+ years of expertise in software 
              development, team leadership, and software architecture. Proven track record in managing 
              cross-functional teams, improving CI/CD pipelines, and securing Information Security 
              Management System (ISMS) certifications, including ISO 27001.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="mailto:fandiagusriyanto@gmail.com" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Mail size={20} />
                fandiagusriyanto@gmail.com
              </a>
              <a href="tel:+6281316844738" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Phone size={20} />
                +62 813-1684-4738
              </a>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin size={20} />
                Indonesia
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <a href="https://github.com/FandiAR" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2" size={20} />
                  View GitHub
                </a>
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <Download className="mr-2" size={20} />
                Download CV
              </Button>
            </div>
          </div>
          
          <div className="lg:order-first animate-scale-in">
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <div className="w-72 h-72 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-6xl font-bold text-gray-600">FA</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">9+ Years</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
