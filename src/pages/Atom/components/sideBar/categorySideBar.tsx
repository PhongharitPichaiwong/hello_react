import { useMemo } from 'react';
import styles from './categorySidebar.module.css';

type Props = {
  categories: string[];
  isLoading: boolean;
  error: string | null;
  activeCategory: string | null;
  toggleCategory: (category: string) => void;
};

export default function CategorySidebar({
  categories,
  isLoading,
  error,
  activeCategory,
  toggleCategory,
}: Props) {
  const content = useMemo(() => {
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div style={{ color: 'red' }}>{error}</div>;

    return categories.map(cat => (
      <label key={cat} className={styles.categoryItem}>
        <input
          type="checkbox"
          value={cat}
          id={cat}
          checked={activeCategory === cat}
          onChange={() => toggleCategory(cat)}
        />
        {cat}
      </label>
    ));
  }, [categories, isLoading, error, activeCategory, toggleCategory]);

  return (
    <div className={styles.sideBarCategoryContainer}>
      <div className={styles.sideBarCategoryLabel}>Categories</div>
      <div className={styles.sideBarCategoryList}>{content}</div>
    </div>
  );
}
