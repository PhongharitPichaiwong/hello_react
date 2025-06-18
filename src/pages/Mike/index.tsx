import { CircularProgress, Typography } from '@mui/material';
import logo from '../../assets/images/logo.svg';
import CategorySidebar from '../../components/Mike/CategorySidebar';
import { useMikeProducts } from '../../hooks/useMikeProducts';
import styles from './styles.module.css';

function Mike() {
  const {
    categories,
    selectedCategory,
    isMikeProductLoading,
    handleSelectedCategory,
  } = useMikeProducts();

  if (isMikeProductLoading) {
    return (
      <div className={styles.loadingContainer}>
        <CircularProgress size={60} />
        <Typography variant="h6" sx={{ ml: 2 }}>
          Loading categories...
        </Typography>
      </div>
    );
  }

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
            {/* Button 1 */}
            <button className={styles.sideBarButtonContainer}>
              <img src={logo} className={styles.estateLogo} alt="Logo" />
              <div className={styles.estateContentContainer}>
                <div className={styles.estateTitle}>不動産検索</div>
                <div className={styles.estateSubTitle}>259件</div>
              </div>
            </button>

            {/* Button 2 */}
            <button className={styles.sideBarButtonContainer}>
              <img src={logo} className={styles.estateLogo} alt="Logo" />
              <div className={styles.estateContentContainer}>
                <div className={styles.estateTitle}>不動産検索</div>
                <div className={styles.estateSubTitle}>259件 </div>
              </div>
            </button>

            {/* Category Selector */}
            <CategorySidebar
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={handleSelectedCategory}
              isLoading={isMikeProductLoading}
            />
          </div>
          <div className={styles.bodyContainer}>
            {selectedCategory ? (
              <div>
                <Typography variant="h4" gutterBottom>
                  {selectedCategory.replace(/-/g, ' ')} Products
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 3 }}
                >
                  Products in the {selectedCategory.replace(/-/g, ' ')} category
                </Typography>
              </div>
            ) : (
              <Typography variant="h6" color="text.secondary">
                Please select a category from the sidebar
              </Typography>
            )}
          </div>
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
