import { AtomProduct } from '../../../../types/atomProduct';
import styles from './product.module.css';

export function makeProductCard(product: AtomProduct) {
  return (
    <div key={product.id} className={styles.card}>
      <h3 className={styles.title}>{product.title}</h3>
      <img
        src={product.thumbnail}
        alt={product.title}
        className={styles.image}
      />
      <p className={styles.description}>{product.description}</p>
      <div className={styles.priceSection}>
        <span className={styles.price}>${product.price}</span>
        {product.discountPercentage > 0 && (
          <span className={styles.discount}>
            -{product.discountPercentage}%
          </span>
        )}
      </div>
    </div>
  );
}
