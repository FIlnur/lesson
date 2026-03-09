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

function Pet(name, specie) {
    this.name = name;
    this.specie = specie;
}
Pet.prototype.printData = function () {
    console.log(this.specie, this.name);
}
const pet = new Pet("Dick", "dog");
pet.printData()