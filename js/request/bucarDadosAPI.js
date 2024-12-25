function buscarDados() {
    fetch("http://localhost:9090/v1/cliente", {
        method: 'GET',
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao buscar recurso');
            }
            return response.json();
        })
        .then(data => {
            // console.log('Resposta da API:', data);
            if (data.length === 0) {
                window.document.getElementById("table").innerHTML = "<h2 style='text-align: center; font-size: 7vh;'>Lista Vazia</h2>"
            } else {
                for (let i = 0; i < data.length; i++) {
                    data[i].dataTime = formatTimestampToBR(data[i].dataTime)
                }
                montarTable(data, true)
            }
        })
        .catch(error => {
            alert('ERROR IN REQUEST');
            console.error('Erro:', error);
        });
}
function montarTable(data, bl) {
    if (bl !== undefined) {
        let div = window.document.getElementById("table")
        let tableHTML = "<table class='tabela'>\n\
                            <thead>\n\
                                <tr>\n\
                                    <th class='tabela'>Nome</th>\n\
                                    <th class='tabela'>Idade</th>\n\
                                    <th class='tabela'>Altura</th>\n\
                                    <th class='tabela'>Data</th>\n\
                                    <th class='tabela'>DELETAR</th>\n\
                                    <th class='tabela'>ATUALIZAR</th>\n\
                                </tr>\n\
                            </thead>\n\
                        <tbody>\n";
        for (let i = 0; i < data.length; i++) {
            tableHTML += `<tr>\n\
                            <td class='tabela'>${data[i].name}</td>\n\
                            <td class='tabela'>${data[i].oldYear}</td>\n\
                            <td class='tabela'>${data[i].heigth}</td>\n\
                            <td class='tabela'>${data[i].dataTime}</td>\n\
                            <td class='tabela'><button type='button' onClick='deletar("${data[i].idCliente}")'>DELETAR</button></td>\n\
                            <td class='tabela'><button type='button' onClick='atualizar("${data[i].idCliente}")'>ATUALIZAR</button></td>\n\
                        </tr>\n`;
        }
        tableHTML += "</tbody>\n\
                        <tfoot>\n\
                            <tr class='tabela'>\n\
                                <th class='tabela'>Nome</th>\n\
                                <th class='tabela'>Idade</th>\n\
                                <th class='tabela'>Altura</th>\n\
                                <th class='tabela'>Data</th>\n\
                                <th class='tabela'>DELETAR</th>\n\
                                <th class='tabela'>ATUALIZAR</th>\n\
                            </tr>\n\
                        </tfoot>\n\
                    </table>";
        div.innerHTML = tableHTML
    }
}