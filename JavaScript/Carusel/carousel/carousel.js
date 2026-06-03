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
        this._index = 0;
        this._leftButton = document.createElement('button');
        this._leftButton.textContent = " < ";
        this._leftButton.classList.add('left')
        this._rightButton = document.createElement('button');
        this._rightButton.textContent = " > ";
        this._rightButton.classList.add('right')
        this._element.appendChild(this._leftButton);
        this._element.appendChild(this._rightButton);
        this._carouselInner = container;
        this._index = 0;
        this._shiftsCount = 0;
        this._element.append(this._leftButton, this._rightButton);
        this.addSwitchingHandlers();
        this._animationTime = 300;
        this._enableAnimation();

        this._carouselInner.prepend(this._childrenElements[this._childrenElements.length - 1].cloneNode(true));
        this._carouselInner.appendChild(this._childrenElements[0].cloneNode(true));
        this.switchToIndex(0);

        if (switchTimeout != null) {
            setInterval(() => {
            this.switchToDirection(-1)
            }, switchTimeout)
        };
    };

    _enableAnimation() {
        this._carouselInner.style.transition = `left ${this._animationTime}ms ease-in`;
    }

    _disableAnimation() {
        this._carouselInner.style.transition = "none";
    }

    async _disableAnimationDelayed(ms) {
        return await new Promise((resolve) => setTimeout(() => resolve(this._disableAnimation()), ms)); 
    }


    async switchToDirection(shift) {
        if (shift === 0) return;

        this.switchToIndex(this._index + (shift < 0 ? -1 : 1));

        if (this._index < 0) {
            await this._disableAnimationDelayed(this._animationTime);
            this.switchToIndex(this._childrenElements.length - 1);
            await new Promise((resolve) => setTimeout(() => resolve(this._enableAnimation()), 0));
        }
    }

    switchToIndex(index) {
        this._index = index;
        this._carouselInner.style.left = `${(this._index + 1) * -1 * 100}%`;
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
