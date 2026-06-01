// TODO создаем елемент, который принимает в себя елементы,
// имеет таймер переключения(*), имеет еще стрелки для перелистывания,
// перелистывание с анимацией(*).
// При клике пользователем в стрелки вправо или налево перемещаем
// ленту на выбранную сторону.



export class Carousel {
    /**
     * @param {HTMLElement} element
     * @param {Array<HTMLElement>} childrenElements
     */
    constructor(element, childrenElements, container, switchTimeout) {
        this._element = element;
        this._childrenElements = childrenElements;
        this._container = container;
        this._index = 0;
        this._leftButton = document.createElement('button');
        this._leftButton.textContent = " < ";
        this._leftButton.classList.add('left')
        this._rightButton = document.createElement('button');
        this._rightButton.textContent = " > ";
        this._rightButton.classList.add('right')
        this._element.appendChild(this._leftButton);
        this._element.appendChild(this._rightButton);
        this._carouselInner = document.querySelector(".carousel-inner");
        this._index = 0;
        this._element.append(this._leftButton, this._rightButton);
        this.addSwitchingHandlers();


        if (switchTimeout != null) {
            setInterval(() => {
            this.switchToDirection(-1)
            }, switchTimeout)
        };
    };

    switchToDirection(shift) {
        if (shift < 0) {
            this._index = this._index === 0 ? this._childrenElements.length - 1 : this._index - 1;
            
        }
        else if (shift > 0) this._index = this._index ===  this._childrenElements.length - 1 ? 0 : this._index + 1;
        this._carouselInner.style.left = `-${this._index * 100}%`;
    }
    

        // TO DO добавляет обработчики перелистывания
    addSwitchingHandlers() {
        this._leftButton.addEventListener('click', () => {
            this.switchToDirection(-1)
        })

        this._rightButton.addEventListener('click', () => {
            this.switchToDirection(+1)
        })
    };


    
}


// export class Carousel {
//     /**
//      * @param {HTMLElement} element - Основной элемент карусели
//      * @param {Array<HTMLElement>} childrenElements - Элементы, которые будут перемещаться в карусели
//      * @param {HTMLElement} container - Контейнер, внутри которого происходит перемещение
//      */
//     constructor(element, childrenElements, container) {
//         this._element = element;
//         this._childrenElements = childrenElements;
//         this._container = container;
//         this._index = 0;

//         // Создаём кнопки
//         this._leftButton = document.createElement('button');
//         this._leftButton.textContent = " < ";
//         this._leftButton.classList.add('left');

//         this._rightButton = document.createElement('button');
//         this._rightButton.textContent = " > ";
//         this._rightButton.classList.add('right');

//         // Добавляем кнопки в элемент карусели
//         this._element.appendChild(this._leftButton);
//         this._element.appendChild(this._rightButton);

//         // Инициализируем начальное состояние
//         this._updateCarouselPosition();
//     }

//     /**
//      * Обновляет позицию контейнера карусели в зависимости от текущего индекса
//      */
//     _updateCarouselPosition() {
//         this._container.style.transition = 'left 0.3s ease-in-out';
//         this._container.style.left = `-${this._index * 100}%`;
//     }

//     /**
//      * Добавляет обработчики кликов для кнопок
//      */
//     addClickHandler() {
//         this._leftButton.addEventListener('click', () => {
//             this._index = this._index === 0
//                 ? this._childrenElements.length - 1
//                 : this._index - 1;
//             this._updateCarouselPosition();
//         });

//         this._rightButton.addEventListener('click', () => {
//             this._index = this._index === this._childrenElements.length - 1
//                 ? 0
//                 : this._index + 1;
//             this._updateCarouselPosition();
//         });
//     }
// }
