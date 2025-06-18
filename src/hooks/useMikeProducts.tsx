import { useContext } from 'react';
import {
  MikeProductContext,
  MikeProductContextType,
} from '../provider/MikeProductProvider';

export const useMikeProducts = (): MikeProductContextType => {
  const context = useContext(MikeProductContext);

  if (context === undefined) {
    throw new Error('useProducts must be used within a MikeProductProvider');
  }

  return context;
};
