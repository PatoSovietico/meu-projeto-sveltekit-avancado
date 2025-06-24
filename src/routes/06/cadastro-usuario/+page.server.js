import { fail } from '@sveltejs/kit';

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const dados = {
            nome: formData.get('nome')?.trim() || '',
            email: formData.get('email')?.trim() || '',
            senha: formData.get('senha') || '',
            confirmacaoSenha: formData.get('confirmacaoSenha') || '',
            nascimento: formData.get('nascimento') || '',
            erros: {}
        };

        // Validação do nome
        if (!dados.nome) {
            dados.erros.nome = 'Nome é obrigatório';
        } else if (dados.nome.length < 2) {
            dados.erros.nome = 'Nome deve ter pelo menos 2 caracteres';
        }

        // Validação do email
        const emailRegex = /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
        if (!dados.email) {
            dados.erros.email = 'Email é obrigatório';
        } else if (!emailRegex.test(dados.email)) {
            dados.erros.email = 'Email inválido (exemplo: usuario@dominio.com)';
        }

        // Validação da senha
        const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{4,}$/;
        if (!dados.senha) {
            dados.erros.senha = 'Senha é obrigatória';
        } else if (!senhaRegex.test(dados.senha)) {
            dados.erros.senha = 'Senha deve ter: 4+ caracteres, 1 maiúscula, 1 minúscula, 1 número e 1 especial';
        }

        // Validação da confirmação de senha
        if (!dados.confirmacaoSenha) {
            dados.erros.confirmacaoSenha = 'Confirmação de senha é obrigatória';
        } else if (dados.senha !== dados.confirmacaoSenha) {
            dados.erros.confirmacaoSenha = 'Senhas não coincidem';
        }

        // Validação da data de nascimento
        if (!dados.nascimento) {
            dados.erros.nascimento = 'Data de nascimento é obrigatória';
        } else {
            const nascimento = new Date(dados.nascimento);
            const hoje = new Date();
            const idadeMinima = new Date(nascimento);
            idadeMinima.setFullYear(nascimento.getFullYear() + 12);
            
            if (idadeMinima > hoje) {
                dados.erros.nascimento = 'Você deve ter pelo menos 12 anos';
            }
        }

        // Se houver erros, retorna com fail
        if (Object.keys(dados.erros).length > 0) {
            return fail(400, {
                ...dados,
                message: 'Corrija os erros abaixo'
            });
        }

        // Se tudo válido, retorna sucesso
        return {
            success: true,
            nome: dados.nome
        };
    }
};