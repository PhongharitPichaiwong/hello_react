import { createContext, ReactNode, useEffect, useState } from 'react';
import { authService } from '../services/atom/productService';
import { LoginCredentials, User } from '../types/auth';

interface AtomProductContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
  clearError: () => void;
}

export const AtomProductContext = createContext<
  AtomProductContextType | undefined
>(undefined);

export const AtomProductProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const isAuthenticated = !!user && !!token;

  useEffect(() => {
    const checkExistingAuth = async () => {
      const { accessToken } = authService.getStoredTokens();

      if (accessToken) {
        try {
          setIsLoading(true);
          const userData = await authService.getCurrentUser(accessToken);
          setUser(userData);
          setToken(accessToken);
        } catch (error) {
          authService.clearTokens();
          setUser(null);
          setToken(null);
        } finally {
          setIsLoading(false);
        }
      }
    };

    checkExistingAuth();
  }, []);

  const login = async (credentials: LoginCredentials): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await authService.login(credentials);

      authService.saveTokens(response.accessToken, response.refreshToken);

      const userData: User = {
        id: response.id,
        username: response.username,
        email: response.email,
        firstName: response.firstName,
        lastName: response.lastName,
        gender: response.gender,
        image: response.image,
      };

      setUser(userData);
      setToken(response.accessToken);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Login failed';
      setError(errorMessage);
      setUser(null);
      setToken(null);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = (): void => {
    authService.clearTokens();
    setUser(null);
    setToken(null);
    setError(null);
  };

  const clearError = (): void => {
    setError(null);
  };

  const value: AtomProductContextType = {
    user,
    token,
    isAuthenticated,
    isLoading,
    error,
    login,
    logout,
    clearError,
  };

  return (
    <AtomProductContext.Provider value={value}>
      {children}
    </AtomProductContext.Provider>
  );
};
