import { createContext, ReactNode } from 'react';
import { productionService } from '../services/mike/productService.ts';

interface MikeProductContextType {
  getProductsByCategory: (name: string) => Promise<any[]>;
  getProductionCategoryList: () => Promise<any[]>;
}

export const MikeProductContext = createContext<
  MikeProductContextType | undefined
>(undefined);

export const MikeProductProvider = ({ children }: { children: ReactNode }) => {
  const getProductsByCategory = async (name: string) => {
    return productionService.getProductsByCategory(name);
  };

  const getProductionCategoryList = async () => {
    return productionService.getProductionCategoryList();
  };

  const value: MikeProductContextType = {
    getProductsByCategory,
    getProductionCategoryList,
  };

  return (
    <MikeProductContext.Provider value={value}>
      {children}
    </MikeProductContext.Provider>
  );
};
