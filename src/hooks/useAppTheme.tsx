import { useContext } from 'react';
import { ThemeContext } from '../provider/ThemeProvider';

export const useAppTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useAppTheme must be used within a ThemeProvider');
  }

  const { theme, setTheme, toggleTheme } = context;

  // Utility functions for better DX
  const isLight = theme === 'light';
  const isDark = theme === 'dark';

  // Helper to get theme-specific values
  const getThemeValue = <T,>(lightValue: T, darkValue: T): T => {
    return theme === 'light' ? lightValue : darkValue;
  };

  // Helper to get CSS variable value
  const getCSSVariable = (variableName: string): string => {
    if (typeof window !== 'undefined') {
      return getComputedStyle(document.documentElement)
        .getPropertyValue(variableName)
        .trim();
    }
    return '';
  };

  // Helper to set a custom CSS variable
  const setCSSVariable = (variableName: string, value: string): void => {
    if (typeof window !== 'undefined') {
      document.documentElement.style.setProperty(variableName, value);
    }
  };

  return {
    // Core theme state
    theme,
    setTheme,
    toggleTheme,

    // Utility flags
    isLight,
    isDark,

    // Helper functions
    getThemeValue,
    getCSSVariable,
    setCSSVariable,
  };
};
