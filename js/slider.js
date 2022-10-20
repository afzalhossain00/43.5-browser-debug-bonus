const images = [
    'images/pic-1.jpg',
    'images/pic-2.jpg',
    'images/pic-3.jpg',
    'images/pic-4.jpg',
    'images/pic-5.jpg',
    'images/pic-6.jpg',
];

let imgIndex = 0;
const img = document.getElementById('img-carousel');

setInterval(() => {
    if (imgIndex === images.length) {
        imgIndex = 0;
    }
    const imgSrc = images[imgIndex]
    img.setAttribute('src', imgSrc);
    imgIndex++;
}, 2000);