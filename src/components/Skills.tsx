
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
    <section id="skills" className="py-20 bg-black text-green-400">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-green-400 font-mono">
            {'>'} SKILLS_&_EXPERTISE
          </h2>
          <p className="text-xl text-green-300 font-mono">[TECHNICAL PROFICIENCY AND LEADERSHIP CAPABILITIES]</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="group border border-green-400 p-6 bg-black hover:bg-green-400 hover:text-black transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 border border-green-400 flex items-center justify-center mr-4 group-hover:border-black">
                  <category.icon className="text-green-400 group-hover:text-black" size={20} />
                </div>
                <h3 className="text-lg font-bold font-mono group-hover:text-black">
                  {category.title.toUpperCase()}
                </h3>
              </div>
              
              <div className="space-y-1">
                {category.skills.map((skill, i) => (
                  <div 
                    key={i}
                    className="flex items-center font-mono text-sm"
                  >
                    <span className="text-green-400 mr-3 group-hover:text-black">{'>'}</span>
                    <span className="text-green-300 group-hover:text-black">{skill}</span>
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
