export async function load({ url }) {
    const limit = 12;
    const offset = Number(url.searchParams.get('offset')) || 0;
    const search = url.searchParams.get('search');
  
    if (search) {
      const res = await fetch(`'https://dummyjson.com/products'${search.toLowerCase()}`);
      if (!res.ok) {
        return { produto: [], offset: 0, limit, hasNext: false, hasPrev: false, search };
      }
  
      const p = await res.json();
      const produto = {
        name: p.name,
      };
  
      return {
        produto: [produto],
        offset: 0,
        limit,
        hasNext: false,
        hasPrev: false,
        search
      };
    }
  
    const res = await fetch(`https://dummyjson.com/products?offset=${offset}&limit=${limit}`);
    const data = await res.json();
  
    
    return { produto: data.results, offset, limit, hasNext: offset + limit < data.count, hasPrev: offset > 0 };
  }