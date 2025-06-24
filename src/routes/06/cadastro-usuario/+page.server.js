import {fail, redirect} from '@sveltejs/kit';

function contem(texto, caracteres){
    for (const caractere of caracteres)
        if (texto.includes(caractere)) return true;
    return false;
}

export const actions = {
    default: async ({request}) => {
        const data = await request.formData();
        const dados = {
            nome: data.get('nome'), 
            email: data.get('email'),
            nascimento: data.get('nascimento'), 
            senha: data.get('senha'),
            confirmacaosenha: data.get('confirmacaosenha'), 
            erros: []
        }

        if (!dados.nome || !dados.email || !dados.nascimento || !dados.senha || !dados.confirmacaosenha) 
            dados.erros.push('Preencha todos os campos');

        if(!dados.email.includes('@')) 
            dados.erros.push('Email inválido');

        if (dados.senha !== dados.confirmacaosenha) 
            dados.erros.push('Senhas não conferem');

        // Verificação mais robusta da senha
        const temMinuscula = /[a-z]/.test(dados.senha);
        const temMaiuscula = /[A-Z]/.test(dados.senha);
        const temNumero = /[0-9]/.test(dados.senha);
        const temEspecial = /[!@#$%¨&*()\-_=+]/.test(dados.senha);
        
        if (!temMinuscula || !temMaiuscula || !temNumero || !temEspecial)
            dados.erros.push('A senha deve ter pelo menos uma letra maiúscula, uma minúscula, um número e um caractere especial');

        let agora = new Date(), nascimento = new Date(dados.nascimento);
        if (agora - nascimento < 368691200000) 
            dados.erros.push('Você ainda não completou 12 anos!');
        
        // Verificação do nome com 2 caracteres ou menos
        if (dados.nome && dados.nome.length <= 2) 
            dados.erros.push('Nome deve ter mais de 2 caracteres');

        if (dados.erros.length > 0) 
            return fail(400, dados);

        redirect(303, '/06/profile');
    }
};