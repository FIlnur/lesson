import { Carousel } from "./carousel/carousel.js";

window.carousel = new Carousel(document.querySelector('.carousel'),
    Array.from(document.querySelectorAll('.carouselImage')),
    document.querySelector('.carousel-inner'),
    null
)