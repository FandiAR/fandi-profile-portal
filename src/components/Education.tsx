
import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const education = [
  {
    degree: "Information Systems",
    school: "Binus University",
    period: "May 2024 – Present",
    gpa: "3.79 of 4.00",
    status: "Current"
  },
  {
    degree: "Informatics Management",
    school: "Bina Insani University",
    period: "Nov 2012 – May 2015",
    gpa: "3.64/4.00",
    status: "Graduate of the Year"
  }
];

const certifications = [
  {
    title: "JavaScript Algorithms and Data Structure",
    issuer: "freeCodeCamp",
    date: "Apr 2025"
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Apr 2025"
  },
  {
    title: "Linux System Administrator",
    issuer: "ID-Networkers",
    date: "Mar 2025"
  },
  {
    title: "Certified Practical DevSecOps Engineer",
    issuer: "Studi DevSecOps",
    date: "Dec 2024"
  }
];

export const Education = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <p className="text-xl text-gray-600">Continuous learning and professional development</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <GraduationCap className="mr-3 text-blue-600" size={28} />
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                      <h5 className="text-lg text-blue-600 font-semibold">{edu.school}</h5>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      edu.status === "Current" 
                        ? "bg-green-100 text-green-600" 
                        : "bg-yellow-100 text-yellow-600"
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar size={16} className="mr-2" />
                    {edu.period}
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <Award size={16} className="mr-2" />
                    GPA: {edu.gpa}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Award className="mr-3 text-purple-600" size={28} />
              Certifications
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="font-bold text-gray-900 mb-2">{cert.title}</h4>
                  <p className="text-blue-600 font-semibold mb-1">{cert.issuer}</p>
                  <p className="text-gray-600 text-sm">Issued {cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
