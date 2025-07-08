export async function load({ params }) {
    const name = params.name;
  
    const res = await fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(console.log);
    
  
    const data = await res.json();
  
    return {
      produto: {
        title: data.title,
        price: data.price,
        category: data.category
      }
    };
  }