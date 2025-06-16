import { useAuth } from '../../../hooks/useAuth';

interface AuthToggleProps {
  variant?: 'default' | 'icon-only';
  className?: string;
}

export function AuthToggle({
  variant = 'default',
  className = '',
}: AuthToggleProps) {
  const { user, isAuthenticated, isLoading, login, logout } = useAuth();

  const handleLogin = async () => {
    await login({
      username: 'emilys',
      password: 'emilyspass',
      expiresInMins: 30,
    });
  };

  if (isLoading) {
    return (
      <button
        className={`btn btn-auth ${className}`}
        disabled
        title="Logging in..."
        aria-label="Logging in..."
      >
        <span aria-hidden="true">⏳</span>
        {variant === 'default' && <>Logging in...</>}
        {variant === 'icon-only' && (
          <span className="sr-only">Logging in...</span>
        )}
      </button>
    );
  }

  if (isAuthenticated && user) {
    return (
      <button
        onClick={logout}
        className={`btn btn-auth ${className}`}
        title={`Logout ${user.firstName}`}
        aria-label={`Logout ${user.firstName}`}
      >
        <span aria-hidden="true">👋</span>
        {variant === 'default' && <>Logout</>}
        {variant === 'icon-only' && (
          <span className="sr-only">Logout {user.firstName}</span>
        )}
      </button>
    );
  }

  return (
    <button
      onClick={handleLogin}
      className={`btn btn-auth ${className}`}
      title="Login"
      aria-label="Login"
    >
      <span aria-hidden="true">🔓</span>
      {variant === 'default' && <>Login</>}
      {variant === 'icon-only' && <span className="sr-only">Login</span>}
    </button>
  );
}
