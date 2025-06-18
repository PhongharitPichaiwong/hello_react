import { createContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { mikeProductService } from '../services/mike/productService.ts';

export const MikeProductContext = createContext<
  MikeProductContextType | undefined
>(undefined);

export interface MikeProductContextType {
  categories: any[];
  isMikeProductLoading?: boolean;
  error?: string | null;
  selectedCategory: string;
  handleSelectedCategory: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const MikeProductProvider = ({
  children,
  defaultCategory = 'beauty',
}: {
  children: React.ReactNode;
  defaultCategory?: string;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const [searchParams, setSearchParams] = useSearchParams();

  const fetchCategories = async (): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      const categoriesData =
        await mikeProductService.getProductionCategoryList();
      setCategories(categoriesData);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Failed to fetch categories';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (categories.length === 0) return;

    const categoryFromUrl = searchParams.get('category');

    const categoryToSelect = categoryFromUrl || defaultCategory;

    if (categories.includes(categoryToSelect)) {
      setSelectedCategory(categoryToSelect);
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

  const handleSelectedCategory = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newCategory = event.target.value;
    if (categories.includes(newCategory)) {
      setSelectedCategory(newCategory);
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set('category', newCategory);
      setSearchParams(newSearchParams);
    }
  };

  const value: MikeProductContextType = {
    categories,
    isMikeProductLoading: isLoading,
    error,
    selectedCategory,
    handleSelectedCategory,
  };

  return (
    <MikeProductContext.Provider value={value}>
      {children}
    </MikeProductContext.Provider>
  );
};
