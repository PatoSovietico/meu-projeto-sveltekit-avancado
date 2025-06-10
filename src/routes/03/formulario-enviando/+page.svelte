<style>
  .form-container {
    max-width: 500px;
    margin: 0 auto;
    padding: 2rem;
    background: white;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .form-title {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 2rem;
    font-weight: 600;
  }

  .input-group {
    margin-bottom: 1.5rem;
  }

  input {
    width: 100%;
    padding: 12px 20px;
    border: 2px solid #e0e0e0;
    border-radius: 50px;
    font-size: 1rem;
    transition: all 0.3s ease;
    box-sizing: border-box;
  }

  input:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  input::placeholder {
    color: #95a5a6;
  }

  .submit-btn {
    width: 100%;
    padding: 14px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-bottom: 1.5rem;
  }

  .submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  .link-btn {
    display: block;
    text-align: center;
    padding: 12px;
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 500;
    transition: all 0.3s ease;
  }

  .link-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
</style>

<div class="form-container">
  <h2 class="form-title">Preferências Alimentares</h2>
  
  <form action="/03/formulario-recebendo" method="GET">
    <div class="input-group">
      <input 
        name="fruta" 
        placeholder="Qual tua fruta preferida?" 
        required
      />
    </div>
    
    <div class="input-group">
      <input 
        name="legume" 
        placeholder="E legume?" 
        required
      />
    </div>
    
    <button type="submit" class="submit-btn">Enviar</button>
  </form>
  
  <a href="/03/formulario-recebendo" class="link-btn">Ir diretamente</a>
</div>