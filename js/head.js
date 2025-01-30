const refresh = "<meta http-equiv='refresh' content='3; '>";
function toast(texto, cabecalho, icone) {
        if (texto == undefined) {
                console.log(texto)
                texto = "Don't forget to star the repository if you like it."
        }
        if (cabecalho == undefined) {
                console.log(cabecalho)
                cabecalho = 'Note'
        }
        if (icone == undefined) {
                console.log(icone)
                icone = "warning"
        }
        $.toast({
                text: texto,
                heading: cabecalho,
                icon: icone,
                showHideTransition: 'fade',
                allowToastClose: true,
                hideAfter: 3000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
                stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
                position: 'top-right',
                textAlign: 'left',
                loader: true,
                loaderBg: '#9EC600',
                beforeShow: function () { },
                afterShown: function () { },
                beforeHide: function () { },
                afterHidden: function () { }
        });
}
// document.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>\n\
//         <meta name='author' content='Bruno Gresslerda Silveira'>\n\
//         <meta name='description' content='Testes para chamadas de end-points'>\n\
//         <meta name='keywords' content='HTML, CSS, JavaScript'>\n\
//         <link rel='stylesheet' type='text/css' href='style/estilos.css'>\n\
//         " + refresh + "\n\
//         <link rel='stylesheet' type='text/css' href='style/jquery/jquery-toast-plugin-1.3.2.min.css'>\n\
//         <script src='js/jquery/jquery-3.7.1.min.js'></script>\n\
//         <script src='js/jquery/query.toast-1.3.2.min.js'></script>\n\
//         <script src='js/jquery/jquery.blockUI-2.70.0.min.js'></script>";
document.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>\n\
        <meta name='author' content='Bruno Gresslerda Silveira'>\n\
        <meta name='description' content='Testes para chamadas de end-points'>\n\
        <meta name='keywords' content='HTML, CSS, JavaScript'>\n\
        <link rel='stylesheet' type='text/css' href='style/estilos.css'>\n\
        <link rel='stylesheet' type='text/css' href='style/jquery/jquery-toast-plugin-1.3.2.min.css'>\n\
        <script src='js/jquery/jquery-3.7.1.min.js'></script>\n\
        <script src='js/jquery/query.toast-1.3.2.min.js'></script>\n\
        <script src='js/jquery/jquery.blockUI-2.70.0.min.js'></script>\n\
        <script src='js/util.js'></script>");