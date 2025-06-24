export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const umnumero = formData.get('umnumero');
        
        return {
            result: umnumero || 'preencha o formulário'
        };
    }
};