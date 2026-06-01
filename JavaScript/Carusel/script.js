import { Carousel } from "./carousel/carousel.js";

new Carousel(document.querySelector('.carousel'),
    document.querySelectorAll('.carouselImage'),
    document.querySelectorAll('carousel-inner'), null
) 

// const carouselElement = document.querySelector('.carousel');
// const container = document.querySelector('.carousel-container');
// const slides = Array.from(document.querySelectorAll('.slide'));

// const carousel = new Carousel(carouselElement, slides, container);
// carousel.addClickHandler();
