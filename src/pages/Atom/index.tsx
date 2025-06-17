import logo from '../../assets/images/logo.svg';
import { useAtomProducts } from '../../hooks/useAtomProducts';
import { Body } from './components/Body/Body';
import styles from './styles.module.css';

function Atom() {
  const {
    categories,
    isLoading,
    error,
    activeCategory,
    toggleCategory,
    products,
  } = useAtomProducts();

  return (
    <div className={styles.wrapper}>
      <Header />
      <Body
        categories={categories}
        isLoading={isLoading}
        error={error}
        activeCategory={activeCategory}
        toggleCategory={toggleCategory}
        products={products}
      />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerTop}>
        <div className={styles.headerLeft}>
          <div className={styles.logoContainer}>
            <img src={logo} className={styles.logo} alt="Logo" />
          </div>
          <div className={styles.textContainer}>
            Kanchoko トヨタ-カローラバン
          </div>
        </div>
        <div className={styles.headerRightContainer}>
          {makeButton({ label: 'Log in', style: styles.loginButton })}
          {makeButton({ label: 'Log out', style: styles.logOutButton })}
        </div>
      </div>
      <div className={styles.headerBottom}>
        {/* Place Holder For Some Buttons??? */}
      </div>
    </div>
  );
}

function Footer() {
  return <div className={styles.footerContainer}>Footer</div>;
}

function makeButton(data: {
  label: string;
  style: string;
  image?: {
    src: string;
    alt: string;
    style?: string;
  };
  subText?: string;
  onClick?: () => void;
}) {
  return (
    <button
      className={data.style}
      onClick={() => {
        data.onClick && data.onClick();
      }}
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

export default Atom;
