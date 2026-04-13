import { counterButton } from "./counterButton.js";
import { CounterController } from "./counterController.js"
export class Counter {
    constructor() {
        this._controller = new CounterController();
        this._element = this._createRoot(this._controller);
        this._element.appendChild(
            new counterButton('+', this._controller.increment).getElement()
        );
        this._element.appendChild(
            new counterButton('-', this._controller.decrement).getElement()
        );
        
    }
    _createRoot(counterController) {
        const root = document.createElement('div');
        root.style.textAlign = "center";
        root.textContent = `${counterController.count}`;
        // При клике увеличивать текст (число) на еденицу
       root.addEventListener("click", () => {
            counterController.increment();
            root.textContent = `${counterController.count}`;
        });
        return root;
    }

    getElement () {
        return this._element;
    }

}

