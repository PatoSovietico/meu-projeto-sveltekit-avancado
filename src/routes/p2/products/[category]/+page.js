export const load = async ({ params }) => {
  const { category } = params;
  
  try {
      // Busca produtos por categoria
      const res = await fetch(`https://dummyjson.com/products/category/${category}`);
      if (!res.ok) throw new Error(`Failed to fetch products: ${res.status}`);
      
      const data = await res.json();
      
      // Extrai todas as tags únicas para a busca
      const allTags = [...new Set(data.products.flatMap(product => 
          product.tags || []
      ))];
      
      return {
          products: data.products,
          category,
          allTags
      };
  } catch (error) {
      return {
          status: 500,
          error: error.message
      };
  }
};