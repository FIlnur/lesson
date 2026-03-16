// 32 Создай функцию новыеДанныеТелефона (newPhoneData),
// которая принимает модель, количество памяти и возвращает новый обьект,
// в котором будут переданные значения, а так же заряд батареи,
// установленный изначально на 0.

// function newPhoneData (model, memoryСapacity) {
//     return {
//         model,
//         memoryСapacity,
//         batteryCharge: 0,
//     };
// }
// console.log(newPhoneData("Huawei", 512))

// function PhoneData (model, memoryСapacity) {
//     this.model = model;
//     this.memoryСapacity = memoryСapacity;
//     this.batteryCharge = 0;
// }
// const phoneData = new PhoneData("Huawei", 512);
// console.log(phoneData)

// 33. Создай функцию-конструктор Питомец, которая принимает
// кличку и вид животного, создает обьект питомца, имеющий эти
// данные и метод, выводящий в консоль информацию о нем.

// function Pet(name, specie) {
//     this.name = name;
//     this.specie = specie;
// }
// Pet.prototype.printData = function () {
//     console.log(this.specie, this.name);
// }
// const pet = new Pet("Dick", "dog");
// pet.printData()

// 34. Создайте два конструктора: Заправка (FuelStation) и Машина (Car).
// Добавьте машине метод добавить топлива (TryAddFuel), который не сможет
// превышать внутренний лимит, заданный при создании машины, и должен возвращать
// сколько топлива удалось заправить. Добавьте заправке метод FuelUp, принимающий
// машину, которую нужно будет заправить до предела. При этом у заправки есть
// определенное количество хранимого топлива, которое должно уменьшаться при
// заправке машин, и которое нельзя превзойти при попытке заправить машину.


function Car(model, maxFuelAmount, initialFuelAmount) {
  this.model = model;
  this.maxFuelAmount = maxFuelAmount;
  // TODO: default 0 instead of always 0
  if (initialFuelAmount != null) {
    this.currentFuelAmount = initialFuelAmount;
  } else {
    this.currentFuelAmount = 0;
  }
}

/**
 * @returns Amount of remained fuel after fueling
 **/
Car.prototype.tryAddFuel = function (amount) {
  if (amount < 0) {
    throw new Error("Amount of fuel can't be negative");
  }
  const remainTankSpace = this.maxFuelAmount - this.currentFuelAmount;
  if (amount <= remainTankSpace) {
    this.currentFuelAmount += amount;
    return 0;
  }
  this.currentFuelAmount = this.maxFuelAmount;
  return amount - remainTankSpace;
};

function GasStation(initialFuelAmount) {
  this.currentFuelAmount = initialFuelAmount;
}

/**
 * @argument car {Car}
 */
GasStation.prototype.fuelUp = function (car) {
  // Заправляем машину всем имеющимся топливом, получаем остаток
  const remainedFuel = car.tryAddFuel(this.currentFuelAmount);
  // Заменяем текущее количество топливо на оставшееся
  // после заправки
  this.currentFuelAmount = remainedFuel;
};

const car1 = new Car("Model1", 1000);
console.log(car1.tryAddFuel(900) === 0);
console.log(car1.tryAddFuel(50) === 0);
console.log(car1.currentFuelAmount === 950);

const car2 = new Car("Model1", 1000);
console.log(car2.tryAddFuel(1100) === 100);
console.log(car2.currentFuelAmount === 1000);

const gasStation = new GasStation(30);
gasStation.fuelUp(car1);
console.log(car1.currentFuelAmount === 980);
console.log(gasStation.currentFuelAmount === 0);

const gasStation1 = new GasStation(3000);
gasStation1.fuelUp(car1);
console.log(car1.currentFuelAmount === 1000);
console.log(gasStation1.currentFuelAmount === 2980);