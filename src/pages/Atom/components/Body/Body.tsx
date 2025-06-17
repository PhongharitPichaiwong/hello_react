import { useState } from 'react';
import logo from '../../../../assets/images/logo.svg';
import { AtomProduct } from '../../../../types/atomProduct';
import { useIsMobile } from '../../util/isMobile';
import { makeProductCard } from '../product/product';
import CategorySidebar from '../sideBar/categorySideBar';
import styles from './style.module.css';

export function Body({
  categories,
  isLoading,
  error,
  activeCategory,
  toggleCategory,
  products,
}: {
  categories: string[];
  isLoading: boolean;
  error: string | null;
  activeCategory: string | null;
  toggleCategory: (category: string) => void;
  products: AtomProduct[];
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <div
      className={`${styles.bodyContainer} ${isMobile ? styles.bodyContainerMobile : ''}`}
    >
      <div
        className={`${styles.sideBarContainer} ${
          isMobile ? styles.sideBarContainerMobile : ''
        }`}
      >
        {makeButton(estateButtonData, isMobile)}
        {makeButton(categoryButtonData, isMobile)}
        {makeButton(generalButtonData, isMobile)}

        {!isMobile && (
          <CategorySidebar
            categories={categories}
            isLoading={isLoading}
            error={error}
            activeCategory={activeCategory}
            toggleCategory={toggleCategory}
          />
        )}

        {isMobile && (
          <>
            <button
              className={styles.mobileCategoryToggle}
              onClick={() => setMobileOpen(true)}
            >
              Categories
            </button>
            {mobileOpen && (
              <div
                className={styles.mobileOverlay}
                onClick={() => setMobileOpen(false)}
              >
                <div
                  className={styles.mobileDrawer}
                  onClick={e => e.stopPropagation()}
                >
                  <CategorySidebar
                    categories={categories}
                    isLoading={isLoading}
                    error={error}
                    activeCategory={activeCategory}
                    toggleCategory={toggleCategory}
                  />
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <div className={styles.productsContainer}>
        {products.length === 0 ? (
          <div>No products found</div>
        ) : (
          <div className={styles.productGrid}>
            {products.map((product: AtomProduct) => makeProductCard(product))}
          </div>
        )}
      </div>
    </div>
  );
}

function makeButton(
  data: {
    label: string;
    style: string;
    image?: {
      src: string;
      alt: string;
      style?: string;
    };
    subText?: string;
    onClick?: () => void;
  },
  isMobile: boolean
) {
  return (
    <button
      className={`${data.style} ${isMobile ? styles.sideBarButtonMobile : ''}`}
      onClick={() => data.onClick?.()}
    >
      {data.image && (
        <img
          src={data.image.src}
          alt={data.image.alt}
          className={data.image.style}
        />
      )}
      {data.subText ? (
        <div className={styles.sideBarTextContainer}>
          <div>{data.label}</div>
          <div>{data.subText}</div>
        </div>
      ) : (
        data.label
      )}
    </button>
  );
}

const estateButtonData = {
  label: 'Estate',
  style: styles.sideBarButton,
  image: {
    src: logo,
    alt: 'Estate',
    style: styles.sideBarLogo,
  },
  subText: 'Estate',
};
const categoryButtonData = {
  label: 'Category',
  style: styles.sideBarButton,
  image: {
    src: logo,
    alt: 'Category',
    style: styles.sideBarLogo,
  },
  subText: 'Category',
};
const generalButtonData = {
  label: 'General',
  style: styles.sideBarButton,
  image: {
    src: logo,
    alt: 'General',
    style: styles.sideBarLogo,
  },
  subText: 'General',
};
