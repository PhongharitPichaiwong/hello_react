import { useContext } from 'react';
import { ProductContext } from '../provider/ProductProvider';
import { ProductContextType } from '../types/product';

export const useProducts = (): ProductContextType => {
  const context = useContext(ProductContext);

  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }

  return context;
};
