import { createContext, ReactNode, useEffect, useState } from 'react';
import { productService } from '../services/atom/productService';
import { AtomProduct } from '../types/atomProduct';

export interface AtomProductContextType {
  categories: string[];
  isLoading: boolean;
  activeCategory: string | null;
  toggleCategory: (category: string) => void;
  error: string | null;
  clearError: () => void;
  products: AtomProduct[];
}

export const AtomProductContext = createContext<
  AtomProductContextType | undefined
>(undefined);

export const AtomProductProvider = ({ children }: { children: ReactNode }) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [products, setProducts] = useState<AtomProduct[]>([]);

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
    const newCat = activeCategory === cat ? null : cat;
    const url = new URL(window.location.href);

    let products: AtomProduct[] = [];

    if (newCat) {
      url.searchParams.set('category', newCat);
      products = await productService.getProductByCategory(newCat);
    } else {
      url.searchParams.delete('category');
    }
    window.history.replaceState({}, '', url.toString());

    console.log(`Products: ${products}`);
    setActiveCategory(newCat);
    setProducts(products);
  };

  const value: AtomProductContextType = {
    categories,
    isLoading,
    activeCategory,
    toggleCategory,
    error,
    clearError,
    products,
  };

  return (
    <AtomProductContext.Provider value={value}>
      {children}
    </AtomProductContext.Provider>
  );
};
