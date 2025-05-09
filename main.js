$(document).ready(() =>{
    setInterval(() => {
        const agora = new Date();
        const horaAtual = agora.toLocaleTimeString();
        $('#horas').text(horaAtual);
    }, 1000);

    $('#toggleTema').click(() => {
        $('body').toggleClass('dark-theme');
        const modoEscuroAtivo = $('body').hasClass('dark-theme');
        $('#toggleTema').text(modoEscuroAtivo ? 'Modo Claro' : 'Modo Escuro');
    });
})
