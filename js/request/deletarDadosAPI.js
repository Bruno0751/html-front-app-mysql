function deletar(id) {
    if (confirm('Tem certeza que Deseja Excluir este registro') == true) {
        fetch(`http://localhost:9090/v1/cliente/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao deletar recurso');
                }
            })
            .then(data => {
                alert('Cliente Deletado com Sucessoa');
                window.location.reload()
            })
            .catch(error => {
                alert('ERROR IN REQUEST');
                console.error('Erro:', error);
            });
    }
}