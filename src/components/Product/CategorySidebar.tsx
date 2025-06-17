import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import React from 'react';

interface CategorySidebarProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading?: boolean;
}

const CategorySidebar: React.FC<CategorySidebarProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  isLoading = false,
}) => {
  return (
    <Paper
      elevation={2}
      sx={{
        p: 3,
        height: 'fit-content',
        minWidth: 280,
        maxWidth: 300,
        position: 'sticky',
        top: 20,
      }}
    >
      <FormControl component="fieldset" fullWidth>
        <FormLabel
          component="legend"
          sx={{
            mb: 2,
            fontSize: '1rem',
            fontWeight: 'bold',
            color: 'primary.main',
          }}
        >
          Categories ({categories.length})
        </FormLabel>

        <Box sx={{ maxHeight: '70vh', overflowY: 'auto', pr: 1 }}>
          <RadioGroup
            value={selectedCategory}
            onChange={onCategoryChange}
            name="product-categories"
          >
            {categories.map(category => (
              <FormControlLabel
                key={category}
                value={category}
                control={<Radio color="primary" size="small" />}
                label={
                  <Typography
                    variant="body2"
                    sx={{
                      textTransform: 'capitalize',
                      fontSize: '0.875rem',
                    }}
                  >
                    {category.replace(/-/g, ' ')}
                  </Typography>
                }
                sx={{
                  mb: 0.5,
                  ml: 0,
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    borderRadius: 1,
                  },
                  '& .MuiFormControlLabel-label': {
                    width: '100%',
                  },
                  px: 1,
                  py: 0.25,
                  borderRadius: 1,
                }}
                disabled={isLoading}
              />
            ))}
          </RadioGroup>
        </Box>
      </FormControl>
    </Paper>
  );
};

export default CategorySidebar;
