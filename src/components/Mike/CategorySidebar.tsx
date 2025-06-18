import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';

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
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid lightgray',
        borderRadius: 1,
        width: 200,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: 2,
          backgroundColor: 'lightgray',
        }}
      >
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{ fontWeight: 'bold' }}
        >
          Search by category
        </Typography>
      </Box>
      <Box sx={{ width: '100%', padding: 2 }}>
        <RadioGroup
          value={selectedCategory}
          onChange={onCategoryChange}
          name="mike-product-category"
        >
          {categories.map(category => (
            <FormControlLabel
              key={category}
              value={category}
              control={<Radio />}
              label={category}
              disabled={isLoading}
            />
          ))}
        </RadioGroup>
      </Box>
    </Box>
  );
};

export default CategorySidebar;
