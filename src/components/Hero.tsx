
import React from 'react';
import { Github, Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <section id="about" className="pt-20 pb-16 px-6 bg-black text-green-400">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center animate-fade-in">
          <div className="border border-green-400 p-8 bg-black">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-mono">
              <span className="text-green-400">
                {'>'} FANDI AGUS RIYANTO
              </span>
            </h1>
            <h2 className="text-xl lg:text-2xl text-green-300 mb-6 font-mono">
              [ENGINEERING_MANAGER & TECHNICAL_LEAD]
            </h2>
            <div className="text-left max-w-4xl mx-auto mb-8">
              <p className="text-green-300 mb-4 font-mono text-sm leading-relaxed">
                {'//'} Experienced Engineering Manager and Technical Lead with 9+ years of expertise
              </p>
              <p className="text-green-300 mb-4 font-mono text-sm leading-relaxed">
                {'//'} in software development, team leadership, and software architecture.
              </p>
              <p className="text-green-300 mb-4 font-mono text-sm leading-relaxed">
                {'//'} Proven track record in managing cross-functional teams, improving CI/CD
              </p>
              <p className="text-green-300 mb-4 font-mono text-sm leading-relaxed">
                {'//'} pipelines, and securing ISMS certifications, including ISO 27001.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 text-sm">
              <a href="mailto:fandiagusriyanto@gmail.com" className="flex items-center gap-2 text-green-300 hover:text-green-100 transition-colors border border-green-400 p-2 hover:bg-green-400 hover:text-black">
                <Mail size={16} />
                fandiagusriyanto@gmail.com
              </a>
              <a href="tel:+6281316844738" className="flex items-center gap-2 text-green-300 hover:text-green-100 transition-colors border border-green-400 p-2 hover:bg-green-400 hover:text-black">
                <Phone size={16} />
                +62-813-1684-4738
              </a>
              <a href="https://id.linkedin.com/in/fandiar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-300 hover:text-green-100 transition-colors border border-green-400 p-2 hover:bg-green-400 hover:text-black">
                <Linkedin size={16} />
                LINKEDIN
              </a>
              <div className="flex items-center gap-2 text-green-300 border border-green-400 p-2">
                <MapPin size={16} />
                INDONESIA
              </div>
            </div>

            <div className="flex justify-center">
              <Button asChild className="bg-transparent border border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-mono">
                <a href="https://github.com/FandiAR" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2" size={20} />
                  [VIEW_GITHUB]
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
