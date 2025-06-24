<script>
    import { enhance } from '$app/forms';
</script>

<h1>Formulário Central</h1>

<form method="POST" use:enhance>
    <input name="umnumero" type="number" placeholder="Digite um número" /><br />
    <input name="umtexto" type="text" placeholder="Digite um texto" /><br />
    <input name="umadata" type="date" /><br />
    <div class="buttons">
        <button formaction="/06/ifms/a">Enviar para A</button>
        <button formaction="/06/ifms/b">Enviar para B</button>
        <button formaction="/06/ifms/c">Enviar para C</button>
    </div>
</form>

<style>
    .buttons {
        margin-top: 1rem;
        display: flex;
        gap: 1rem;
    }
    button {
        padding: 0.5rem 1rem;
    }
</style>