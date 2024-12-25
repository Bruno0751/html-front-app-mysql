function atualizar(id) {
    window.location.href = `atualizar.html?id=${id}`
}
function bucarID() {
    const url = new URL(window.location);
    const parametros = new URLSearchParams(url.search);
    fetch(`http://localhost:9090/v1/cliente/${parametros.get('id')}`, {
        method: 'GET',
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao buscar recurso');
            }
            return response.json();
        })
        .then(data => {
            console.log('Resposta da API:', data);
            $('#name').val(data.name)
            $('#oldYear').val(data.oldYear)
            $('#heigth').val(data.heigth)
        })
        .catch(error => {
            alert('ERROR IN REQUEST');
            console.error('Erro:', error);
        });
}