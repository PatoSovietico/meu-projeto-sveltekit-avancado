<script>
    let { data } = $props();
</script>

<style>
    :global(body) {
        background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        margin: 0;
        padding: 20px;
    }

    .container {
        background: white;
        border-radius: 20px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        padding: 40px;
        text-align: center;
        max-width: 600px;
        width: 100%;
        animation: fadeIn 0.5s ease-out;
    }

    .message {
        font-size: 1.5rem;
        margin-bottom: 30px;
        color: #2c3e50;
        line-height: 1.6;
    }

    .success-message {
        background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        font-weight: 600;
    }

    .empty-message {
        color: #95a5a6;
        font-style: italic;
    }

    .back-link {
        display: inline-block;
        padding: 12px 30px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        text-decoration: none;
        border-radius: 50px;
        font-weight: 500;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }

    .back-link:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
</style>

<div class="container">
    {#if data.fruta && data.legume}
        <p class="message success-message">
            � Você gosta da fruta <strong>{data.fruta}</strong> e do legume <strong>{data.legume}</strong> 🥦
        </p>
    {:else}
        <p class="message empty-message">
            ℹ️ Informe uma fruta e um legume...
        </p>
    {/if}
    
    <p><a href="/03/formulario-enviando" class="back-link">Voltar ao formulário</a></p>
</div>