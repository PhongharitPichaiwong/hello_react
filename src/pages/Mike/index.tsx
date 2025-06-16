import logo from '../../assets/images/logo.svg';
import styles from './styles.module.css';

/**
 * TODO:
 * 1. Ref: https://kankocho.jp/ from this website, create a similar page (focus on left sidebar behavior on Big and Small screen)
 * 2. Create a any sub component for this page inside src/components/Mike/* folder
 * 3. Add new/update any css module file inside src/components/Mike/styles.module.css
 */
function Mike() {
  return (
    <div>
      <section className={styles.wrapper}>
        <div className={styles.headerContainer}>
          <div className={styles.headerLeft}>
            <div className={styles.logoContainer}>
              <img src={logo} className={styles.logo} alt="Logo" />
            </div>
            <div className={styles.textContainer}>KSI官公庁オークション</div>
          </div>
          <div className={styles.headerRightContainer}>
            <button
              className={styles.loginButton}
              onClick={() => {
                console.log('Logged in');
              }}
            >
              Log in
            </button>
            <button
              className={styles.logOutButton}
              onClick={() => {
                console.log('Logged out');
              }}
            >
              Log out
            </button>
          </div>
        </div>
        {/* Body */}
        <div className={styles.body}>
          <div className={styles.sideBar}>
            {/** Button 1 */}
            <button className={styles.sideBarButtonContainer}>
              <img src={logo} className={styles.estateLogo} alt="Logo" />
              <div className={styles.estateContentContainer}>
                <div className={styles.estateTitle}>不動産検索</div>
                <div className={styles.estateSubTitle}>259件</div>
              </div>
            </button>

            {/** Button 2 */}
            <button className={styles.sideBarButtonContainer}>
              <img src={logo} className={styles.estateLogo} alt="Logo" />
              <div className={styles.estateContentContainer}>
                <div className={styles.estateTitle}>不動産検索</div>
                <div className={styles.estateSubTitle}>259件 </div>
              </div>
            </button>

            {/** Button 3 */}
            <button className={styles.sideBarButtonContainer}>
              <img src={logo} className={styles.estateLogo} alt="Logo" />
              <div className={styles.estateContentContainer}>
                <div className={styles.estateTitle}>不動産検索</div>
                <div className={styles.estateSubTitle}>259件 </div>
              </div>
            </button>
          </div>
          <div className={styles.bodyContainer}>Body 2</div>
        </div>
        <div
          style={{
            display: 'flex',
            flex: 0.3,
            backgroundColor: 'teal',
            justifyContent: 'center',
          }}
        >
          Footer
        </div>
      </section>
    </div>
  );
}

export default Mike;
