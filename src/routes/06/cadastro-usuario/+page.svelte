<script>
    export let form;
    export let data;
    
    $: success = data?.success;
    $: nome = data?.nome;
</script>

<div class="container">
    {#if success}
        <div class="success-message">
            <h2>Cadastro concluído com sucesso!</h2>
            <p>Bem-vindo(a), {nome}!</p>
        </div>
    {:else}
        <h1>Cadastro de Usuário</h1>
        
        {#if form?.message}
            <div class="error-message">{form.message}</div>
        {/if}
        
        <form method="POST">
            <div class="form-group">
                <label for="nome">Nome:</label>
                <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={form?.nome || ''}
                    class={form?.erros?.nome ? 'error' : ''}
                />
                {#if form?.erros?.nome}
                    <span class="error-text">{form.erros.nome}</span>
                {/if}
            </div>
            
            <div class="form-group">
                <label for="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={form?.email || ''}
                    class={form?.erros?.email ? 'error' : ''}
                />
                {#if form?.erros?.email}
                    <span class="error-text">{form.erros.email}</span>
                {/if}
            </div>
            
            <div class="form-group">
                <label for="senha">Senha:</label>
                <input
                    type="password"
                    id="senha"
                    name="senha"
                    class={form?.erros?.senha ? 'error' : ''}
                />
                {#if form?.erros?.senha}
                    <span class="error-text">{form.erros.senha}</span>
                {/if}
            </div>
            
            <div class="form-group">
                <label for="confirmacaoSenha">Confirme a Senha:</label>
                <input
                    type="password"
                    id="confirmacaoSenha"
                    name="confirmacaoSenha"
                    class={form?.erros?.confirmacaoSenha ? 'error' : ''}
                />
                {#if form?.erros?.confirmacaoSenha}
                    <span class="error-text">{form.erros.confirmacaoSenha}</span>
                {/if}
            </div>
            
            <div class="form-group">
                <label for="nascimento">Data de Nascimento:</label>
                <input
                    type="date"
                    id="nascimento"
                    name="nascimento"
                    value={form?.nascimento || ''}
                    class={form?.erros?.nascimento ? 'error' : ''}
                />
                {#if form?.erros?.nascimento}
                    <span class="error-text">{form.erros.nascimento}</span>
                {/if}
            </div>
            
            <button type="submit">Cadastrar</button>
        </form>
    {/if}
</div>

<style>
    .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
    }
    
    .form-group {
        margin-bottom: 15px;
    }
    
    label {
        display: block;
        margin-bottom: 5px;
    }
    
    input {
        width: 100%;
        padding: 8px;
        box-sizing: border-box;
    }
    
    .error {
        border: 1px solid red;
    }
    
    .error-text {
        color: red;
        font-size: 0.8em;
        display: block;
        margin-top: 5px;
    }
    
    .error-message {
        color: red;
        margin-bottom: 15px;
        padding: 10px;
        background-color: #ffeeee;
        border: 1px solid red;
    }
    
    .success-message {
        color: green;
        text-align: center;
        padding: 20px;
        background-color: #eeffee;
        border: 1px solid green;
    }
    
    button {
        background-color: #4CAF50;
        color: white;
        padding: 10px 15px;
        border: none;
        cursor: pointer;
        font-size: 1em;
    }
    
    button:hover {
        background-color: #45a049;
    }
</style>