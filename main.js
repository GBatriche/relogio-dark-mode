$(document).ready(() =>{
    setInterval(() => {
        const agora = new Date();
        const horaAtual = agora.toLocaleTimeString('pt-br', {
            timeZone: 'America/Rio_Branco',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
        $('#horas').text(horaAtual);
    }, 1000);

    $('#toggleTema').click(() => {
        $('body').toggleClass('dark-theme');
        const modoEscuroAtivo = $('body').hasClass('dark-theme');
        $('#toggleTema').text(modoEscuroAtivo ? 'Modo Claro' : 'Modo Escuro');
    });
})
