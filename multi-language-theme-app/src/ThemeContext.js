import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.style.setProperty('--bg-color', 'black');
      root.style.setProperty('--text-color', 'white');
      root.style.setProperty('--header-footer-bg', '#333');
      root.style.setProperty('--header-footer-text', 'white');
    } else {
      root.style.setProperty('--bg-color', 'white');
      root.style.setProperty('--text-color', 'black');
      root.style.setProperty('--header-footer-bg', '#f1f1f1');
      root.style.setProperty('--header-footer-text', 'black');
    }
  }, [theme]);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
