
import React from 'react';
import { Code2, Database, Cloud, Settings, Users, Award } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const techStackData = [
  { name: 'JavaScript/TypeScript', level: 95, icon: Code2 },
  { name: 'React.js/Next.js', level: 90, icon: Code2 },
  { name: 'Node.js/Nest.js', level: 85, icon: Settings },
  { name: 'AWS Services', level: 80, icon: Cloud },
  { name: 'MySQL/PostgreSQL', level: 85, icon: Database },
  { name: 'Team Leadership', level: 95, icon: Users },
  { name: 'DevOps/CI-CD', level: 80, icon: Settings },
  { name: 'System Architecture', level: 85, icon: Award }
];

export const TechStack = () => {
  const { isDark } = useTheme();

  return (
    <section className={`py-20 ${isDark ? 'bg-black text-green-400' : 'bg-white text-blue-900'}`}>
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 font-mono ${
            isDark ? 'text-green-400' : 'text-blue-600'
          }`}>
            {isDark ? '> TECHNICAL_PROFICIENCY' : 'Technical Proficiency'}
          </h2>
          <p className={`text-xl font-mono ${
            isDark ? 'text-green-300' : 'text-blue-700'
          }`}>
            {isDark ? '[SKILL LEVELS AND EXPERTISE]' : 'Skill Levels and Expertise'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {techStackData.map((tech, index) => (
            <div 
              key={index}
              className={`group p-6 border transition-all duration-300 hover:scale-105 animate-fade-in ${
                isDark 
                  ? 'border-green-400 bg-black hover:bg-green-400' 
                  : 'border-blue-200 bg-white hover:bg-blue-50 shadow-lg rounded-lg'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className={`w-10 h-10 border flex items-center justify-center mr-4 ${
                  isDark 
                    ? 'border-green-400' 
                    : 'border-blue-200 bg-blue-50'
                }`}>
                  <tech.icon className={`${
                    isDark 
                      ? 'text-green-400 group-hover:text-black' 
                      : 'text-blue-600'
                  }`} size={20} />
                </div>
                <h3 className={`text-lg font-bold font-mono ${
                  isDark 
                    ? 'text-green-400 group-hover:text-black' 
                    : 'text-blue-900'
                }`}>
                  {tech.name.toUpperCase()}
                </h3>
              </div>
              
              <div className={`w-full h-3 rounded-full mb-2 ${
                isDark ? 'bg-green-900' : 'bg-blue-100'
              }`}>
                <div 
                  className={`h-full rounded-full transition-all duration-1000 ${
                    isDark ? 'bg-green-400' : 'bg-blue-600'
                  }`}
                  style={{ width: `${tech.level}%` }}
                ></div>
              </div>
              
              <div className={`text-right font-mono text-sm ${
                isDark 
                  ? 'text-green-300 group-hover:text-black' 
                  : 'text-blue-700'
              }`}>
                {tech.level}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
