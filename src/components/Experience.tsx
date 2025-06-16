
import React from 'react';
import { Calendar, Users, Award, TrendingUp } from 'lucide-react';

const experiences = [
  {
    title: "Lead Front End Developer",
    company: "Kyrim",
    period: "March 2023 – Present",
    achievements: [
      "Led and managed teams of 10 front-end developers to deliver high-performance web applications",
      "Directed security audits and compliance processes, contributing to successful ISO 27001-2013 and ISO 27001-2022 certifications",
      "Secured PJP3 license from Bank of Indonesia by facilitating regulatory and technical requirements",
      "Developed and optimized CI/CD pipelines, reducing deployment time by 30%",
      "Engineered an MVP product, accelerating time-to-market by 25%"
    ]
  },
  {
    title: "Technical Lead",
    company: "Flash Coffee",
    period: "Nov 2021 – Nov 2022",
    achievements: [
      "Led the Inventory Squad to improve the InventoryHub mobile app, achieving 100% stock take across 200+ stores in 6 countries",
      "Recruited and onboarded 5+ top-performing engineers",
      "Designed and enforced API contract guidelines, reducing integration errors by 40%",
      "Enhanced CI/CD processes, cutting down deployment time by 20%"
    ]
  },
  {
    title: "Software Engineering Manager",
    company: "GajiCermat",
    period: "Sep 2021 – Oct 2021",
    achievements: [
      "Managed a team of 16+ developers",
      "Standardized product requirement documents to align engineering efforts with business goals",
      "Implemented a structured QA process, reducing post-release bugs by 30%"
    ]
  },
  {
    title: "Technical Lead",
    company: "Impacto.Id",
    period: "Sep 2020 – Aug 2021",
    achievements: [
      "Bridged product and development teams by translating business requirements into technical solutions",
      "Designed and implemented system architecture to improve scalability and maintainability",
      "Led the hiring process, recruiting and mentoring high-performing engineers"
    ]
  },
  {
    title: "Senior Front-End Developer",
    company: "Gredu.Asia",
    period: "Nov 2018 – Aug 2020",
    achievements: [
      "Developed complex web applications using React.js, increasing system performance by 20%",
      "Mentored junior and mid-level developers",
      "Resolved critical production issues, reducing system downtime by 15%"
    ]
  },
  {
    title: "IBM Associate Developer",
    company: "PT Codephile Rekadaya Mandiri",
    period: "2015 – 2018",
    achievements: [
      "Developed and maintained enterprise-level applications using IBM technologies",
      "Collaborated with cross-functional teams to deliver software solutions",
      "Participated in code reviews and maintained high code quality standards",
      "Gained foundational experience in software development lifecycle and best practices"
    ]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-black text-green-400">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-green-400 font-mono">
            {'>'} PROFESSIONAL_EXPERIENCE
          </h2>
          <p className="text-xl text-green-300 font-mono">[9+ YEARS OF LEADERSHIP AND TECHNICAL EXCELLENCE]</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-green-400 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-green-400 hidden md:block"></div>
                
                <div className="md:ml-16 border border-green-400 p-6 bg-black hover:bg-green-400 hover:text-black transition-all duration-300 group">
                  <div className="flex flex-wrap items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold font-mono mb-2 group-hover:text-black">{exp.title.toUpperCase()}</h3>
                      <h4 className="text-lg text-green-300 font-mono mb-2 group-hover:text-black">{exp.company.toUpperCase()}</h4>
                    </div>
                    <div className="flex items-center text-green-300 border border-green-400 px-3 py-1 font-mono text-sm group-hover:text-black group-hover:border-black">
                      <Calendar size={14} className="mr-2" />
                      [{exp.period}]
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start font-mono text-sm">
                        <span className="text-green-400 mr-3 group-hover:text-black">{'>'}</span>
                        <span className="text-green-300 leading-relaxed group-hover:text-black">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
