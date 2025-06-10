<script>
  export let data;
  const { pokemon } = data;
</script>

<style>
  .card {
      border-radius: 15px;
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      border: none;
      overflow: hidden;
      background: linear-gradient(135deg, #f5f7fa 0%, #e4efe9 100%);
  }
  
  .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
  }
  
  .card-img-top {
      background-color: #f8f9fa;
      border-bottom: 1px solid #eee;
      transition: transform 0.3s ease;
  }
  
  .card:hover .card-img-top {
      transform: scale(1.05);
  }
  
  .card-body {
      padding: 1.5rem;
  }
  
  .card-title {
      color: #2c3e50;
      font-weight: 700;
      margin-bottom: 1rem;
      font-size: 1.8rem;
  }
  
  .card p {
      margin-bottom: 0.5rem;
      color: #34495e;
      font-size: 1.1rem;
  }
  
  .card p strong {
      color: #2c3e50;
      font-weight: 600;
  }
  
  .btn-primary {
      background-color: #3498db;
      border-color: #3498db;
      padding: 0.5rem 1.5rem;
      font-weight: 600;
      border-radius: 50px;
      transition: all 0.3s ease;
  }
  
  .btn-primary:hover {
      background-color: #2980b9;
      border-color: #2980b9;
      transform: translateY(-2px);
  }
</style>

<div class="card mx-auto mt-4" style="max-width: 400px;">
  <img class="card-img-top p-4" src={pokemon.image} alt={pokemon.name} />

  <div class="card-body text-center">
      <h2 class="card-title text-capitalize">{pokemon.name}</h2>
      <p><strong>Altura:</strong> {pokemon.height / 10} m</p>
      <p><strong>Peso:</strong> {pokemon.weight / 10} kg</p>

      <p><strong>Tipos:</strong> {pokemon.types.join(', ')}</p>
      <p><strong>Habilidades:</strong> {pokemon.abilities.join(', ')}</p>

      <a href="/03/pokemon" class="btn btn-primary mt-3">Voltar</a>
  </div>
</div>