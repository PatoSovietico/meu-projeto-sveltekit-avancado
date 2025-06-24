<script>
    export let data;
</script>

<h1>Resultado - Número</h1>

{#if data?.result}
    <p>Número digitado: {data.result}</p>
{:else if data?.error}
    <p>{data.error}</p>
{/if}

<a href="/06/ifms">Voltar para Central</a>