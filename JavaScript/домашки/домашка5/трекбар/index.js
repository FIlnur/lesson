const trackbar = document.getElementById('trackbar');
const progress = document.getElementById('progress');
const thumb = document.getElementById('thumb');
const valueDisplay = document.getElementById('valueDisplay');

let isDragging = false;

// Функция обновления положения
function updatePosition(clientX) {
    const rect = trackbar.getBoundingClientRect();
    let position = ((clientX - rect.left) / rect.width) * 100;
    
    // Ограничиваем положение в пределах трекбара
    position = Math.max(0, Math.min(100, position));
    
    // Обновляем стили
    progress.style.width = `${position}%`;
    thumb.style.left = `${position}%`;
    
    // Отображаем значение
    valueDisplay.textContent = `Значение: ${position.toFixed(0)}%`;
}

// Обработчики событий для начала перетаскивания
thumb.addEventListener('mousedown', (e) => {
    isDragging = true;
    e.preventDefault();
});

trackbar.addEventListener('mousedown', (e) => {
    if (!isDragging) {
        updatePosition(e.clientX);
    }
});

// Обработчики для перемещения указателя
document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        updatePosition(e.clientX);
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

// Инициализация начального положения
updatePosition(trackbar.getBoundingClientRect().left);