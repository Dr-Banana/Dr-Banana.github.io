import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Theme {
  name: 'dark' | 'light';
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
    accent: string;
    accentHover: string;
    cardBackground: string;
    cardBorder: string;
    shadow: string;
    shadowHover: string;
  };
}

const darkTheme: Theme = {
  name: 'dark',
  colors: {
    primary: '#00d4aa',
    secondary: '#00b4d8',
    background: '#0a0a0a',
    surface: '#111111',
    text: '#e2e8f0',
    textSecondary: '#cbd5e0',
    border: '#333333',
    accent: '#00d4aa',
    accentHover: '#00b894',
    cardBackground: '#1a1a1a',
    cardBorder: '#333333',
    shadow: 'rgba(0, 212, 170, 0.1)',
    shadowHover: 'rgba(0, 212, 170, 0.2)',
  },
};

const lightTheme: Theme = {
  name: 'light',
  colors: {
    primary: '#00d4aa',
    secondary: '#00b4d8',
    background: '#ffffff',
    surface: '#f8fafc',
    text: '#1a202c',
    textSecondary: '#2d3748',
    border: '#e2e8f0',
    accent: '#00d4aa',
    accentHover: '#00b894',
    cardBackground: '#ffffff',
    cardBorder: '#e2e8f0',
    shadow: 'rgba(0, 0, 0, 0.05)',
    shadowHover: 'rgba(0, 0, 0, 0.1)',
  },
};

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(darkTheme);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setTheme(lightTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme.name === 'dark' ? lightTheme : darkTheme;
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme.name);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}; 