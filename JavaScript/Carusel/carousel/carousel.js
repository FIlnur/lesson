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
    constructor(element, childrenElements) {
        this._element = element;
        this._childrenElements = childrenElements;
        this._leftButton = document.createElement('button');
        this._rightButton = document.createElement('button');
    }

    initializ () {
        
    }
}

