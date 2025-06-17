import { useContext } from 'react';
import {
  AtomProductContext,
  AtomProductContextType,
} from '../provider/AtomProductProvider';

export const useAtomProducts = (): AtomProductContextType => {
  const context = useContext(AtomProductContext);

  if (context === undefined) {
    throw new Error('useProducts must be used within a AtomProductProvider');
  }

  return context;
};
