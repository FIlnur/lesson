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
listOfEmployees.onclick = function(event) {
    const card = event.target.closest('.card')
    if (!card) return;

    
    const element = document.getElementById('modal');
    element.classList.add('active');

}

buttonSaveEmployee.onclick = function(event) {
    event.preventDefault();
    const cardFieldElements = createCard();
    // TODO: Получить поля карточки, если нажали на карточку вместо создания
    updateCard(cardFieldElements);

    const modal = document.getElementById('modal');
    modal.classList.remove('active');

    
};
function updateCard(card) {
    const inputName = document.querySelector('[name="name"]');
    card.name.textContent = inputName.value;

    const inputRole = document.querySelector('[name="role"]');
    card.role.textContent = inputRole.value;

    const inputContact = document.querySelector('[name="contact"]');
    card.contact.textContent = inputContact.value;
}
// создаем новые карточки
function createCard() {
    const element = document.createElement('div');
    element.classList.add('card');
    listOfEmployees.appendChild(element);
// принимаем имя
    const cardName = document.createElement('div');
    cardName.classList.add('name');
    element.appendChild(cardName);
// принимаем должность
    const cardRole = document.createElement('div');
    cardRole.classList.add('role');
    element.appendChild(cardRole);
    // принимаем адрес эл.почты
    const cardContact = document.createElement('div');
    cardContact.classList.add('contact');
    element.appendChild(cardContact);
    
    return { name: cardName, role: cardRole, contact: cardContact}
}

 