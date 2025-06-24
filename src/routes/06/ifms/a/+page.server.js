export const actions = {
    default: async ({ request, url }) => {
        const formData = await request.formData();
        const umnumero = formData.get('umnumero');
        
        if (url.searchParams.has('redirect')) {
            return {
                result: umnumero || 'preencha o formulário',
                redirect: true
            };
        }
        
        return {
            result: umnumero || 'preencha o formulário'
        };
    }
};