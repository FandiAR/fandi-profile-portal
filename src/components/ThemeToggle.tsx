
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      variant="outline"
      size="icon"
      className={`border ${
        isDark 
          ? 'border-green-400 text-green-400 bg-black hover:bg-green-400 hover:text-black' 
          : 'border-blue-600 text-blue-600 bg-white hover:bg-blue-600 hover:text-white'
      } transition-all duration-300`}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </Button>
  );
};
