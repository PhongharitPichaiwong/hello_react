import { useAppTheme } from '../../../hooks/useAppTheme';

interface ThemeToggleProps {
  variant?: 'default' | 'icon-only';
  className?: string;
}

export function ThemeToggle({
  variant = 'default',
  className = '',
}: ThemeToggleProps) {
  const { theme, toggleTheme } = useAppTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`btn btn-theme ${className}`}
      title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} mode`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      <span aria-hidden="true">{theme === 'light' ? '🌙' : '☀️'}</span>
      {variant === 'default' && <>{theme === 'light' ? 'Dark' : 'Light'}</>}
      {variant === 'icon-only' && (
        <span className="sr-only">
          {theme === 'light' ? 'Dark' : 'Light'} mode
        </span>
      )}
    </button>
  );
}
