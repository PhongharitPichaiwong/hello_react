import logo from '../../assets/images/logo.svg';
import styles from './styles.module.css';

function Atom() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Body />
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
        Place Holder For Category Buttons.
      </div>
    </div>
  );
}

function Body() {
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

  return (
    <div className={styles.bodyContainer}>
      <div className={styles.sideBarContainer}>
        <div className={styles.sideBarButton}>
          {makeButton(estateButtonData)}
        </div>
        <div className={styles.sideBarButton}>
          {makeButton(categoryButtonData)}
        </div>
        <div className={styles.sideBarButton}>
          {makeButton(generalButtonData)}
        </div>
      </div>
      <div className={styles.bodyContainer}>Body 2</div>
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
        data.onClick
          ? data.onClick()
          : console.log(`${data.label} button clicked`);
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
