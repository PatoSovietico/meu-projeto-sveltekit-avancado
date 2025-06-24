<script>
    export let data;
    
    import { page } from '$app/stores';
    import { redirect } from '@sveltejs/kit';
    
    // Redireciona de volta para a principal se não vier de um submit
    if (!data?.redirect && !$page.form) {
        throw redirect(303, '/06/ifms');
    }
</script>

<h1>Resultado - Número</h1>

{#if data?.result}
    <p>Número digitado: {data.result}</p>
{:else if data?.error}
    <p>{data.error}</p>
{/if}

<a href="/06/ifms">Voltar para Central</a>