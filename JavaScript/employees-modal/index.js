const buttonOpenModal = document.querySelector("[data-open-modal]");
buttonOpenModal.onclick = function(event) {
    const element = document.getElementById('modal');
    element.classList.add('active');

}
// нужно добавить класс active в элемент id modal

const buttonCloseModal = document.querySelector("[data-close-modal]");
buttonCloseModal.onclick = function(event) {
    const element = document.getElementById('modal');
    element.classList.remove('active');
}

const buttonSaveEmployee = document.querySelector(".button-save-employee");
const listOfEmployees = document.querySelector(".list-of-employees");

buttonSaveEmployee.onclick = function(event) {
    event.preventDefault();
    const element = document.createElement('div');
    element.classList.add('card');
    listOfEmployees.appendChild(element);

    const cardName = document.createElement('div');
    cardName.classList.add('name');
    const inputName = document.querySelector('[name="name"]');
    inputName.value
    const inputRole = document.querySelector('[name="role"]');
    const inputContact = document.querySelector('[name="contact"]');
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
}
