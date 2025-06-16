import logo from '../../assets/images/logo.svg';
import styles from './styles.module.css';

/**
 * TODO:
 * 1. Ref: https://kankocho.jp/ from this website, create a similar page (focus on left sidebar behavior on Big and Small screen)
 * 2. Create a any sub component for this page inside src/components/Mike/* folder
 * 3. Add new/update any css module file inside src/components/Mike/styles.module.css
 */
function Atom() {
  return (
    <div>
      <section className={styles.wrapper}>
        <div className={styles.headerContainer}>
          <div className={styles.headerLeft}>
            <div className={styles.logoContainer}>
              <img src={logo} className={styles.logo} alt="Logo" />
            </div>
            <div className={styles.textContainer}>Kanchoko</div>
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
        <div style={{ display: 'flex', flex: 1, backgroundColor: 'green' }}>
          <div className={styles.sideBar}>
            <button
              style={{
                backgroundColor: 'var(--secondary-color)',
                color: 'black',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: '8px',
                marginRight: '8px',
                width: '200px',
                height: '60px',
                fontWeight: 'bold',
                fontSize: '1rem',
              }}
            >
              <img src={logo} className={styles.estateLogo} alt="Logo" />
              <div
                style={{
                  display: 'flex',
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'red',
                  gap: 5,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    backgroundColor: 'green',
                    alignItems: 'flex-end',
                  }}
                >
                  Estate
                </div>
                <div
                  style={{
                    flexDirection: 'column',
                    backgroundColor: 'pink',
                  }}
                >
                  Estate
                </div>
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

export default Atom;
