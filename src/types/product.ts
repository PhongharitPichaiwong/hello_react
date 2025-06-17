export interface Category {
  name: string;
}

export interface ProductState {
  categories: string[];
  selectedCategory: string;
  isLoading: boolean;
  error: string | null;
}

export interface ProductContextType {
  categories: string[];
  selectedCategory: string;
  isLoading: boolean;
  error: string | null;
  fetchCategories: () => Promise<void>;
  clearError: () => void;
  handleCategoryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  navigateToCategory: (category: string) => void;
  clearFilters: () => void;
}
