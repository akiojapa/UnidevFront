const images = document.querySelectorAll('.carousel-image');

let currentImageIndex = 0;

function showImage(index) {
    images.forEach(image => image.classList.remove('active', 'next', 'prev'));

    images[index].classList.add('active');
    if (index > 0) images[index - 1].classList.add('prev');
    if (index < images.length - 1) images[index + 1].classList.add('next');
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
}

setInterval(nextImage, 3000); // Troca de imagem a cada 3 segundos

// Inicialização
showImage(currentImageIndex);
