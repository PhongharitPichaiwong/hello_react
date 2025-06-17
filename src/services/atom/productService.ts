const API_BASE_URL = 'https://dummyjson.com/';
const CAT_LIST = 'products/category-list';
const PRODUCT_BY_CAT = 'products/category/';

class ProductService {
  async getAllCategories(): Promise<string[]> {
    const response = await fetch(`${API_BASE_URL}${CAT_LIST}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.statusText}`);
    }
    return await response.json();
  }

  async getProductByCategory(catName: string): Promise<string[]> {
    const response = await fetch(`${API_BASE_URL}${PRODUCT_BY_CAT}/${catName}`);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch products by category: ${response.statusText}`
      );
    }
    return await response.json();
  }
}

export const productService = new ProductService();
