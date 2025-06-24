import { fail, redirect } from '@sveltejs/kit';

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const form = {
      nomeCartao: data.get('nomeCartao')?.toString().trim() || '',
      numeroCartao: data.get('numeroCartao')?.toString().trim() || '',
      validade: data.get('validade')?.toString().trim() || '',
      cvv: data.get('cvv')?.toString().trim() || '',
      plano: data.get('plano')?.toString() || 'basico'
    };

    // Validações
    const errors = {};

    if (form.nomeCartao.length < 3) {
      errors.nomeCartao = 'Mínimo 3 caracteres';
    }

    if (!/^\d{16}$/.test(form.numeroCartao)) {
      errors.numeroCartao = 'Deve ter 16 dígitos';
    }

    if (!/^\d{2}\/\d{2}$/.test(form.validade)) {
      errors.validade = 'Formato inválido (MM/AA)';
    } else {
      const [mm, aa] = form.validade.split('/');
      const now = new Date();
      const currentMonth = now.getMonth() + 1;
      const currentYear = now.getFullYear() % 100;

      if (mm < 1 || mm > 12) {
        errors.validade = 'Mês inválido';
      } else if (aa < currentYear || (aa == currentYear && mm < currentMonth)) {
        errors.validade = 'Cartão expirado';
      }
    }

    if (!/^\d{3}$/.test(form.cvv)) {
      errors.cvv = 'Código inválido';
    }

    if (Object.keys(errors).length > 0) {
      return fail(400, { form, errors });
    }

    // Redirecionamento
    const routes = {
      basico: '/06/inscricao/basico',
      intermediario: '/06/inscricao/intermediario',
      premium: '/06/inscricao/premium'
    };

    throw redirect(303, routes[form.plano]);
  }
};