<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  export let data;

  let results = data.pokemons;
  const offset = data.offset;
  const limit = 12;

  let searchName = '';
  let error = '';

  let types = [];
  let selectedType = '';

  onMount(async () => {
    const res = await fetch('https://pokeapi.co/api/v2/type');
    const data = await res.json();
    types = data.results;
  });

  async function search() {
    if (searchName.trim() === '') {
      results = data.pokemons;
      error = '';
      return;
    }

    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchName.toLowerCase()}`);
      if (!res.ok) throw new Error('Pokémon não encontrado');
      const poke = await res.json();

      results = [{
        name: poke.name,
        image: poke.sprites.front_default || ''
      }];
      error = '';
    } catch (err) {
      results = [];
      error = 'Pokémon não encontrado.';
    }
  }

  async function filterByType() {
    if (!selectedType) {
      results = data.pokemons;
      error = '';
      return;
    }

    const res = await fetch(`https://pokeapi.co/api/v2/type/${selectedType}`);
    const dataType = await res.json();

    const filtered = dataType.pokemon.slice(0, 100).map(p => {
      const id = p.pokemon.url.split('/').at(-2);
      return {
        name: p.pokemon.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
      };
    });

    results = filtered;
    error = '';
  }

  function goToPage(newOffset) {
    goto(`?offset=${newOffset}`);
  }
</script>

<style>
  .form-control, .form-select {
    border-radius: 25px;
    padding: 10px 20px;
    border: 2px solid #e0e0e0;
    transition: all 0.3s ease;
    box-shadow: none;
  }

  .form-control:focus, .form-select:focus {
    border-color: #3498db;
    box-shadow: 0 0 0 0.25rem rgba(52, 152, 219, 0.25);
  }

  .alert-danger {
    border-radius: 10px;
    background-color: #ffebee;
    color: #c62828;
    border: none;
    padding: 15px;
  }

  .row {
    margin: 0 -10px;
  }

  .col-md-3 {
    padding: 10px;
  }

  .card {
    border-radius: 15px;
    overflow: hidden;
    border: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    height: 100%;
    background: linear-gradient(135deg, #f5f7fa 0%, #e4efe9 100%);
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }

  .card-img-top {
    height: 180px;
    object-fit: contain;
    background-color: #f8f9fa;
    padding: 20px;
    transition: transform 0.3s ease;
  }

  .card:hover .card-img-top {
    transform: scale(1.1);
  }

  .card-body {
    padding: 15px;
    text-align: center;
    background-color: white;
  }

  .card-title {
    color: #2c3e50;
    font-weight: 600;
    margin-bottom: 0;
    font-size: 1.1rem;
  }

  .stretched-link::before {
    border-radius: 15px;
  }

  .mt-4 {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 30px !important;
  }

  .mt-4 a {
    padding: 8px 20px;
    border-radius: 25px;
    background-color: #3498db;
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    border: 2px solid transparent;
  }

  .mt-4 a:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .mb-3 {
    margin-bottom: 20px !important;
  }
</style>

<div class="container">
  <input
    type="text"
    bind:value={searchName}
    on:input={search}
    placeholder="Buscar Pokémon pelo nome"
    class="form-control mb-3"
  />

  <select bind:value={selectedType} on:change={filterByType} class="form-select mb-3">
    <option value="">Filtrar por tipo</option>
    {#each types as type}
      <option value={type.name}>{type.name}</option>
    {/each}
  </select>

  {#if error}
    <div class="alert alert-danger">{error}</div>
  {/if}

  <div class="row">
    {#each results as p}
      <div class="col-md-3 col-sm-6 mb-3">
        <div class="card">
          <img src="{p.image}" alt="{p.name}" class="card-img-top" />
          <div class="card-body">
            <a href="/03/pokemon/{p.name}" class="stretched-link text-decoration-none">
              <h5 class="card-title text-capitalize">{p.name}</h5>
            </a>
          </div>
        </div>
      </div>
    {/each}
  </div>

  {#if !data.search}
    <div class="mt-4">
      {#if data.hasPrev}
        <a href="?offset={data.offset - data.limit}">Anterior</a>
      {/if}

      {#if data.hasNext}
        <a href="?offset={data.offset + data.limit}">Próximo</a>
      {/if}
    </div>
  {/if}
</div>