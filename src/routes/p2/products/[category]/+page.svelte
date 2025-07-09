<script>
    export let data;
    
    let searchTerm = '';
    let selectedTag = '';
    
    // Filtra produtos por termo de busca e tag selecionada
    $: filteredProducts = data.products.filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                             product.description.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesTag = !selectedTag || (product.tags && product.tags.includes(selectedTag));
        
        return matchesSearch && matchesTag;
    });
</script>

<div class="container mt-5">
    <h1 class="mb-4">Produtos em {data.category.replace(/-/g, ' ')}</h1>
    
    <!-- Barra de busca -->
    <div class="row mb-4">
        <div class="col-md-6">
            <input 
                type="text" 
                class="form-control" 
                placeholder="Buscar produtos..." 
                bind:value={searchTerm}
            >
        </div>
        <div class="col-md-6">
            <select class="form-select" bind:value={selectedTag}>
                <option value="">Todas as tags</option>
                {#each data.allTags as tag}
                    <option value={tag}>{tag}</option>
                {/each}
            </select>
        </div>
    </div>
    
    <!-- Lista de produtos -->
    <div class="row">
        {#each filteredProducts as product}
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <img 
                        src={product.thumbnail} 
                        class="card-img-top" 
                        alt={product.title}
                        style="height: 200px; object-fit: cover;"
                    >
                    <div class="card-body">
                        <h5 class="card-title">{product.title}</h5>
                        <p class="card-text">{product.description}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="badge bg-primary">{product.brand}</span>
                            <span class="text-success fw-bold">${product.price}</span>
                        </div>
                        {#if product.tags && product.tags.length > 0}
                            <div class="mt-2">
                                {#each product.tags as tag}
                                    <span class="badge bg-secondary me-1">{tag}</span>
                                {/each}
                            </div>
                        {/if}
                    </div>
                    <div class="card-footer bg-transparent">
                        <small class="text-muted">Rating: {product.rating}/5</small>
                    </div>
                </div>
            </div>
        {:else}
            <div class="col-12">
                <div class="alert alert-warning">
                    Nenhum produto encontrado com os critérios atuais.
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    .card {
        transition: transform 0.2s;
    }
    .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    }
</style>