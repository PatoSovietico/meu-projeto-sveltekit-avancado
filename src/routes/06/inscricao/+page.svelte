<script>
    import { enhance } from '$app/forms';
    
    export let form = {};
    export let errors = {};
  
    // Inicializa campos com valores do form ou vazios
    let nomeCartao = form.nomeCartao || '';
    let numeroCartao = form.numeroCartao || '';
    let validade = form.validade || '';
    let cvv = form.cvv || '';
    let plano = form.plano || 'basico';
  </script>
  
  <h1>Formulário de Pagamento</h1>
  
  <form method="POST" use:enhance>
    <!-- Nome no Cartão -->
    <div>
      <label for="nomeCartao">Nome no Cartão:</label>
      <input
        type="text"
        id="nomeCartao"
        name="nomeCartao"
        bind:value={nomeCartao}
      />
      {#if errors.nomeCartao}
        <p class="error">{errors.nomeCartao}</p>
      {/if}
    </div>
  
    <!-- Número do Cartão -->
    <div>
      <label for="numeroCartao">Número do Cartão:</label>
      <input
        type="text"
        id="numeroCartao"
        name="numeroCartao"
        bind:value={numeroCartao}
        maxlength="16"
      />
      {#if errors.numeroCartao}
        <p class="error">{errors.numeroCartao}</p>
      {/if}
    </div>
  
    <!-- Validade -->
    <div>
      <label for="validade">Validade (MM/AA):</label>
      <input
        type="text"
        id="validade"
        name="validade"
        bind:value={validade}
        placeholder="MM/AA"
        maxlength="5"
      />
      {#if errors.validade}
        <p class="error">{errors.validade}</p>
      {/if}
    </div>
  
    <!-- CVV -->
    <div>
      <label for="cvv">CVV:</label>
      <input
        type="text"
        id="cvv"
        name="cvv"
        bind:value={cvv}
        maxlength="3"
      />
      {#if errors.cvv}
        <p class="error">{errors.cvv}</p>
      {/if}
    </div>
  
    <!-- Plano -->
    <div>
      <label for="plano">Plano:</label>
      <select id="plano" name="plano" bind:value={plano}>
        <option value="basico">Plano Bit (Básico)</option>
        <option value="intermediario">Plano Byte (Intermediário)</option>
        <option value="premium">Plano Quantum (Premium)</option>
      </select>
    </div>
  
    <button type="submit">Finalizar Pagamento</button>
  </form>
  
  <style>
    .error {
      color: red;
      font-size: 0.8rem;
      margin-top: 0.25rem;
    }
    label {
      display: block;
      margin-top: 1rem;
    }
    input, select {
      width: 100%;
      padding: 0.5rem;
      margin-top: 0.5rem;
    }
    button {
      margin-top: 1.5rem;
      padding: 0.75rem 1.5rem;
    }
  </style>