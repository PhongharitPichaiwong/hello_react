import { createContext, ReactNode, useEffect, useState } from 'react';
import { productService } from '../services/atom/productService';

export interface AtomProductContextType {
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
  // const [products, setProducts] = useState<string[] | null>(null);

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

  const toggleCategory = async (cat: string) => {
    // get products outside the state setter
    // URL setting outside
    setActiveCategory(prev => {
      const next = prev === cat ? null : cat;
      const url = new URL(window.location.href);
      if (next) {
        url.searchParams.set('category', next);
      } else {
        url.searchParams.delete('category');
      }

      window.history.pushState({}, '', url.toString());

      return next;
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
