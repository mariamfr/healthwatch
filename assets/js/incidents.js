// Variable para llevar la cuenta del índice actual
let currentIndex = 0;

// Función para mover el carrusel
function moveCarousel(step) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    // Calcular el nuevo índice
    currentIndex += step;

    // Ajustar el índice si se sale del rango
    if (currentIndex >= totalItems) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    }

    // Mover el carrusel
    const newTransform = `translateX(-${currentIndex * 100}%)`;
    document.querySelector('.carousel').style.transform = newTransform;
}
