document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = document.querySelector('#carouselFuncionalidades');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 5000, // Intervalo de 5 segundos entre os slides
        wrap: true // Permite que o carrossel volte ao início após o último slide
    });

    // Controles personalizados (opcional)
    document.querySelector('.carousel-control-prev').addEventListener('click', function () {
        carousel.prev();
    });

    document.querySelector('.carousel-control-next').addEventListener('click', function () {
        carousel.next();
    });
});

