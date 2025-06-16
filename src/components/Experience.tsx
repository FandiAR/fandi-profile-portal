
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
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600">9+ years of leadership and technical excellence</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-500 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hidden md:block"></div>
                
                <div className="md:ml-16 bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                      <h4 className="text-xl text-blue-600 font-semibold mb-2">{exp.company}</h4>
                    </div>
                    <div className="flex items-center text-gray-600 bg-blue-50 px-3 py-1 rounded-full">
                      <Calendar size={16} className="mr-2" />
                      {exp.period}
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{achievement}</span>
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
