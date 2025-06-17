const API_BASE_URL = 'https://dummyjson.com';
const CATEGORY_LIST = 'products/category-list';
const CATEGORY = 'products/category';

class ProductionService {
  async getProductsByCategory(name: string): Promise<any[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/${CATEGORY}/${name}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch productions: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : 'Get productions failed'
      );
    }
  }

  async getProductionCategoryList(): Promise<any[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/${CATEGORY_LIST}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch productions: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      throw new Error(
        error instanceof Error
          ? error.message
          : 'Get productions category list failed'
      );
    }
  }
}

export const productionService = new ProductionService();
