
import React from 'react';
import { Code, Database, Cloud, Users, Settings, Award } from 'lucide-react';

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: Code,
    skills: ["JavaScript", "TypeScript", "React.js", "Next.js", "Nest.js", "Angular 5", "HTML5", "CSS3", "Java", "LotusScript"]
  },
  {
    title: "Tools & Platforms",
    icon: Cloud,
    skills: ["AWS (Lambda, Cognito, Amplify, CodeCommit, CodeBuild, CloudWatch, SNS)", "GitLab CI/CD", "Jenkins", "Docker"]
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "PostgreSQL"]
  },
  {
    title: "Leadership & Management",
    icon: Users,
    skills: ["Team Leadership", "Cross-Team Collaboration", "Mentoring", "Scrum", "Technical Documentation"]
  },
  {
    title: "Architecture & DevOps",
    icon: Settings,
    skills: ["System Architecture", "CI/CD", "API Contract", "Software Development"]
  },
  {
    title: "Certifications",
    icon: Award,
    skills: ["JavaScript Algorithms and Data Structure (freeCodeCamp)", "Responsive Web Design (freeCodeCamp)", "Linux System Administrator", "Certified Practical DevSecOps Engineer"]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600">Technical proficiency and leadership capabilities</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, i) => (
                  <div 
                    key={i}
                    className="flex items-center p-2 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
