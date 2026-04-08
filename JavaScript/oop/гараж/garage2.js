// Задание. Написать два класса: Car(автомобиль) и Garage(гараж). вместимость три машины.
// Добавить три машины и на результате проверит вместимость четвертой машины


class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    getFullName() {
        return `${this.brand}, ${this.model}`;
    }
}
class Garage {
    constructor(capacity) {
        this.capacity = capacity;
        this.parkedCars = [];
    }

    tryParkCar(car) {
        if (this.parkedCars.length >= this.capacity) {
            throw new Error(`Машина ${car.getFullName()} не поместилась. Гараж полон`);
        }
        this.parkedCars.push(car);
        console.log(`Машина ${car.getFullName()} припаркована`);
        return this.parkedCars.length - 1;
    }

}
const myGarage = new Garage(2);

const car1 = new Car("Hyndai", "VF");
const car2 = new Car("Lada", 2114);
const car3 = new Car("Nissan", "X-Trail");

try {
    myGarage.tryParkCar(car1);
    myGarage.tryParkCar(car2);
    myGarage.tryParkCar(car3);
} catch (error) {
    console.log(error.message);
} 
