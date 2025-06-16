import { useLocation, useNavigate } from 'react-router-dom';
import { useAppTheme } from '../../../hooks/useAppTheme';
import { Button } from '../Button';
import { ThemeToggle } from '../ThemeToggle';

export function Layout({ children }: { children: React.ReactNode }) {
  const { theme } = useAppTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const isMikeOrAtom =
    location.pathname === '/mike' || location.pathname === '/atom';

  return (
    <div className="app" data-theme={theme}>
      {!isHome && !isMikeOrAtom && (
        <nav className="nav" role="navigation" aria-label="Main navigation">
          <Button
            variant="back"
            onClick={() => navigate('/')}
            aria-label="Back to home page"
          >
            <span aria-hidden="true">←</span>
            Back to Home
          </Button>
          <ThemeToggle variant="icon-only" />
        </nav>
      )}

      <main role="main">{children}</main>
    </div>
  );
}
