import { createContext, ReactNode, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

const THEME_STORAGE_KEY = 'app-theme';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme;
      return savedTheme && ['light', 'dark'].includes(savedTheme)
        ? savedTheme
        : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);

    localStorage.setItem(THEME_STORAGE_KEY, theme);

    document.body.className = `theme-${theme}`;
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    if (['light', 'dark'].includes(newTheme)) {
      setThemeState(newTheme);
    } else {
      console.warn(`Invalid theme: ${newTheme}. Using 'light' as fallback.`);
      setThemeState('light');
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const value: ThemeContextType = {
    theme,
    setTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
