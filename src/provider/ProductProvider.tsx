import { createContext, ReactNode, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { productService } from '../services/productService';
import { ProductContextType } from '../types/product';

export const ProductContext = createContext<ProductContextType | undefined>(
  undefined
);

interface ProductProviderProps {
  children: ReactNode;
  defaultCategory?: string;
}

export const ProductProvider = ({
  children,
  defaultCategory = 'beauty',
}: ProductProviderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const [searchParams, setSearchParams] = useSearchParams();

  const fetchCategories = async (): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      const categoriesData = await productService.getCategories();
      setCategories(categoriesData);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Failed to fetch categories';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const clearError = (): void => {
    setError(null);
  };

  useEffect(() => {
    if (categories.length === 0) return;

    const categoryFromUrl = searchParams.get('category');

    const categoryToSelect = categoryFromUrl || defaultCategory;

    if (categories.includes(categoryToSelect)) {
      setSelectedCategory(categoryToSelect);

      // Update search params if no category in URL (set default)
      if (!categoryFromUrl) {
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set('category', defaultCategory);
        setSearchParams(newSearchParams, { replace: true });
      }
    } else {
      setSelectedCategory(defaultCategory);
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set('category', defaultCategory);
      setSearchParams(newSearchParams, { replace: true });
    }
  }, [categories, searchParams, setSearchParams, defaultCategory]);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCategory = event.target.value;
    navigateToCategory(newCategory);
  };

  const navigateToCategory = (category: string) => {
    if (categories.includes(category)) {
      setSelectedCategory(category);
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set('category', category);
      setSearchParams(newSearchParams);
    }
  };

  const clearFilters = () => {
    setSearchParams({});
    setSelectedCategory('');
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const value: ProductContextType = {
    categories,
    selectedCategory,
    isLoading,
    error,
    fetchCategories,
    clearError,
    handleCategoryChange,
    navigateToCategory,
    clearFilters,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
