import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  Typography,
} from '@mui/material';
import React from 'react';
import { CategorySidebar } from '../../components';
import { useProducts } from '../../hooks/useProducts';

const Products: React.FC = () => {
  const {
    categories,
    selectedCategory,
    isLoading,
    error,
    fetchCategories,
    clearError,
    handleCategoryChange,
  } = useProducts();

  const handleRetry = () => {
    clearError();
    fetchCategories();
  };

  if (isLoading) {
    return (
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="400px"
        >
          <CircularProgress size={60} />
          <Typography variant="h6" sx={{ ml: 2 }}>
            Loading categories...
          </Typography>
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Alert
          severity="error"
          action={
            <Button color="inherit" size="small" onClick={handleRetry}>
              Retry
            </Button>
          }
        >
          {error}
        </Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Product Categories
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Browse products by category
        </Typography>
      </Box>

      {/* Main Layout: Sidebar + Content */}
      <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
        {/* Sidebar */}
        <Box sx={{ flexShrink: 0 }}>
          <CategorySidebar
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            isLoading={isLoading}
          />
        </Box>

        {/* Main Content Area */}
        <Box sx={{ flex: 1, minHeight: '400px' }}>
          {selectedCategory ? (
            <Box
              sx={{
                p: 4,
                backgroundColor: 'grey.50',
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'grey.200',
                minHeight: '400px',
              }}
            >
              <Typography
                variant="h4"
                gutterBottom
                sx={{ textTransform: 'capitalize' }}
              >
                {selectedCategory.replace(/-/g, ' ')} Products
              </Typography>

              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                Products in the {selectedCategory.replace(/-/g, ' ')} category
              </Typography>

              <Box
                sx={{
                  p: 3,
                  backgroundColor: 'primary.light',
                  borderRadius: 1,
                  mb: 3,
                }}
              >
                <Typography
                  variant="h6"
                  color="primary.contrastText"
                  gutterBottom
                >
                  API Information
                </Typography>
                <Typography variant="body2" color="primary.contrastText">
                  <strong>Current URL:</strong> /products?category=
                  {selectedCategory}
                </Typography>
                <Typography variant="body2" color="primary.contrastText">
                  <strong>API Endpoint:</strong>{' '}
                  https://dummyjson.com/products/category/{selectedCategory}
                </Typography>
              </Box>

              {/* Placeholder for future product list */}
              <Box
                sx={{
                  p: 4,
                  textAlign: 'center',
                  backgroundColor: 'white',
                  borderRadius: 1,
                  border: '2px dashed',
                  borderColor: 'grey.300',
                }}
              >
                <Typography variant="h6" color="text.secondary" gutterBottom>
                  Product List
                </Typography>
              </Box>
            </Box>
          ) : (
            <Box
              sx={{
                p: 4,
                textAlign: 'center',
                backgroundColor: 'grey.50',
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'grey.200',
                minHeight: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h6" color="text.secondary">
                Please select a category from the sidebar
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Products;
