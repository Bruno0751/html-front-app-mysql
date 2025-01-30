var url = new URL(window.location);
var parametros = new URLSearchParams(url.search);
var req = ''
if (parametros.get('id') === null) {
    req = "insert"
} else {
    req = 'update'
}
var form = `<div>\n\
                <form id='form'>\n\
                    <div class='dv-input'>\n\
                        <label>Nome: </label><input type='text' placeholder='Obrigatório' id='name' name='txtName' class='int-entrada'>\n\
                    </div>\n\
                    <div class='dv-input'>\n\
                        <label>Idade: </label><input type='number' placeholder='...' id='oldYear' name='numOldYear' class='int-entrada'>\n\
                    </div>\n\
                    <div class='dv-input'>\n\
                        <label>Altura: </label><input type='text' placeholder='...' id='heigth' name='txtHeigth' class='int-entrada'>\n\
                    </div>\n\
                    <div>\n\
                        <input type='reset' value='Limpar'>\n\
                        <input type='button' value='Salvar' onclick='salvarDados("${req}")'></input>\n\
                    </div>\n\
                </form>\n\
            </div>`;
document.write(form);
function salvarDados(req) {
    console.log($('#name').val())
    console.log($('#oldYear').val())
    console.log($('#heigth').val())
    if ($('#name').val() === '') {
        toast(`Nome obrigatorio`, 'ERRO', 'error')
    } else {

        if (req !== undefined) {
            const data = {
                name: $('#name').val(),
                oldYear: parseInt($('#oldYear').val()),
                heigth: parseFloat($('#heigth').val())
            };

            let mt, text
            if (req === "insert") {
                mt = 'POST'
                req = 'http://localhost:9090/v1/cliente'
                text = "Cadastrado"
            } else if (req === "update") {
                mt = 'PUT'
                req = `http://localhost:9090/v1/cliente/${parametros.get('id')}`
                text = "Atualizado"
            }
            $.blockUI({ message: "<h3 style='font-style: italic;'>Loading...</h3>" });

            fetch(req, {
                method: mt,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(response => {
                    if (!response.ok) {
                        alert('ERRO AO CADASTRAR');
                        throw new Error('Erro ao enviar requisição.');
                    }
                    return response.json();
                })
                .then(data => {
                    toast(`Cliente ${text}`, 'OK', 'success')
                    if (text === "Cadatrado") {
                        console.log('Resposta da API:', data);
                    } else {
                        setTimeout(() => {
                            window.location.href = "buscar.html";
                        }, 3000);
                    }
                })
                .catch(error => {
                    alert('ERROR IN REQUEST');
                    console.error('Erro:', error);
                });
            $('#nome').val("")
            $('#idade').val("")
            $('#altura').val("")
            setTimeout(() => {
                $.unblockUI();
            }, 2000);
        }
    }
}