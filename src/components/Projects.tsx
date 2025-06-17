
import React from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

const projects = [
  {
    title: "FloxDoc",
    period: "Mar 2022 – Mar 2024",
    description: "Document management system built using Next.js and Node.js on AWS",
    role: "Checker, Coder",
    tech: ["Next.js", "Node.js", "AWS"],
    category: "Enterprise"
  },
  {
    title: "Zone at Contact",
    period: "Nov 2021 – Mar 2022",
    description: "Building management system using Next.js and Node.js on AWS",
    role: "Checker, Coder",
    tech: ["Next.js", "Node.js", "AWS"],
    category: "Management"
  },
  {
    title: "Paras UI",
    period: "Nov 2020 – Nov 2021",
    description: "Open-source UI component library built with React Storybook",
    role: "Project Owner, Coder",
    tech: ["React", "Storybook", "TypeScript"],
    category: "Open Source"
  },
  {
    title: "Web Teacher",
    period: "Mar 2019 – Aug 2021",
    description: "School coordination app for teachers, students, and parents using React.js",
    role: "Coder",
    tech: ["React.js", "JavaScript"],
    category: "Education"
  },
  {
    title: "e-SPPD",
    period: "Nov 2017 – Dec 2017",
    description: "Electronic travel report system using IBM Lotus Notes, Java, and AngularJS",
    role: "System Designer, Coder",
    tech: ["IBM Lotus Notes", "Java", "AngularJS"],
    category: "Enterprise"
  },
  {
    title: "3D Talent Management",
    period: "Feb 2016",
    description: "Employee skill mapping app using BabylonJS",
    role: "Coder",
    tech: ["BabylonJS", "JavaScript"],
    category: "3D/Interactive"
  }
];

export const Projects = () => {
  const { isDark } = useTheme();
  
  return (
    <section id="projects" className={`py-20 ${isDark ? 'bg-black text-green-400' : 'bg-gradient-to-br from-slate-50 to-blue-50'}`}>
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 font-mono ${
            isDark ? 'text-green-400' : 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
          }`}>
            {isDark ? '> FEATURED_PROJECTS' : 'Featured Projects'}
          </h2>
          <p className={`text-xl font-mono ${
            isDark ? 'text-green-300' : 'text-gray-600'
          }`}>
            {isDark ? '[TECHNICAL EXPERTISE AND LEADERSHIP]' : 'A showcase of my technical expertise and leadership'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`group border transition-all duration-300 overflow-hidden animate-fade-in ${
                isDark 
                  ? 'bg-black border-green-400 hover:bg-green-400 hover:text-black' 
                  : 'bg-white rounded-xl shadow-lg hover:shadow-xl border-gray-100'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-2 font-mono ${
                      isDark 
                        ? 'bg-green-900 text-green-300 group-hover:bg-black group-hover:text-green-400' 
                        : 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600'
                    }`}>
                      {project.category}
                    </span>
                    <h3 className={`text-xl font-bold mb-2 transition-colors font-mono ${
                      isDark 
                        ? 'text-green-400 group-hover:text-black' 
                        : 'text-gray-900 group-hover:text-blue-600'
                    }`}>
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                <div className={`flex items-center text-sm mb-3 font-mono ${
                  isDark 
                    ? 'text-green-300 group-hover:text-black' 
                    : 'text-gray-500'
                }`}>
                  <Calendar size={14} className="mr-1" />
                  {project.period}
                </div>
                
                <p className={`mb-4 leading-relaxed font-mono ${
                  isDark 
                    ? 'text-green-300 group-hover:text-black' 
                    : 'text-gray-600'
                }`}>
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <span className={`text-sm font-semibold font-mono ${
                    isDark 
                      ? 'text-green-400 group-hover:text-black' 
                      : 'text-gray-700'
                  }`}>
                    Role: 
                  </span>
                  <span className={`text-sm font-mono ${
                    isDark 
                      ? 'text-green-300 group-hover:text-black' 
                      : 'text-blue-600'
                  }`}>
                    {project.role}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className={`px-2 py-1 text-xs rounded-md transition-colors font-mono ${
                        isDark 
                          ? 'bg-green-900 text-green-300 group-hover:bg-black group-hover:text-green-400' 
                          : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className={`flex-1 font-mono transition-colors ${
                      isDark 
                        ? 'border-green-400 text-green-400 bg-transparent group-hover:border-black group-hover:text-black group-hover:bg-transparent' 
                        : 'border-blue-200 text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <ExternalLink size={14} className="mr-1" />
                    {isDark ? '[DETAILS]' : 'Details'}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
