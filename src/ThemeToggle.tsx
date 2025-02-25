import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-full bg-gray-900/50 dark:bg-white/10 backdrop-blur-sm border border-gray-200/20 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
      ) : (
        <Sun className="w-6 h-6 text-gray-800 dark:text-gray-200" />
      )}
    </button>
  );
}