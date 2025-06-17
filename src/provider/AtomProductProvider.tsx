import { createContext, ReactNode, useEffect, useState } from 'react';
import { productService } from '../services/atom/productService';

interface AtomProductContextType {
  categories: string[];
  isLoading: boolean;
  activeCategory: string | null;
  toggleCategory: (category: string) => void;
  error: string | null;
  clearError: () => void;
}

export const AtomProductContext = createContext<
  AtomProductContextType | undefined
>(undefined);

export const AtomProductProvider = ({ children }: { children: ReactNode }) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await productService.getAllCategories();
        setCategories(data);
      } catch (error) {
        setError('Failed to fetch categories');
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const clearError = (): void => {
    setError(null);
  };

  const toggleCategory = (cat: string) => {
    setActiveCategory(prev => {
      if (prev === cat) return null;
      return cat;
    });
  };

  const value: AtomProductContextType = {
    categories,
    isLoading,
    activeCategory,
    toggleCategory,
    error,
    clearError,
  };

  return (
    <AtomProductContext.Provider value={value}>
      {children}
    </AtomProductContext.Provider>
  );
};
