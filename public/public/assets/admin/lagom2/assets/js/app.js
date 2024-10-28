$(document).ready(function () {
    let $btn = $('.btn-buy-float');
    let timeout;

    function showButton() {
        // Remover la clase 'hidden' para hacer visible el botón
        $btn.removeClass('hidden');

        // Limpiar el timeout anterior si existe
        clearTimeout(timeout);

        // Después de 500ms, volver a aplicar la transparencia
        timeout = setTimeout(function () {
            $btn.addClass('hidden');
        }, 500); // Tiempo de espera antes de volverlo semi-transparente
    }

    // Detectar eventos de scroll, movimiento del mouse y touch
    $(window).on('scroll mousemove touchstart', showButton);

    // Iniciar la transparencia después de 500ms al cargar la página
    timeout = setTimeout(function () {
        $btn.addClass('hidden');
    }, 500);
});
