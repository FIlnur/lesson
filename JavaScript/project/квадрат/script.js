// Получаем элементы
const square = document.getElementById('square');
const gameOverScreen = document.getElementById('game-over');

// Начальные параметры
let size = 50; // начальный размер квадрата в px
const growthRate = 1.5; // скорость роста (px за кадр)
const speed = 1; // скорость движения (px за кадр)

// Позиция квадрата (координаты левого верхнего угла)
let x = 0;
let y = 0;

// Состояния движения: 0 — вправо, 1 — вниз, 2 — влево, 3 — вверх
let direction = 0;

// Размеры экрана
let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;

// Устанавливаем начальные стили квадрата
square.style.width = `${size}px`;
square.style.height = `${size}px`;
square.style.left = `${x}px`;
square.style.top = `${y}px`;

function animateSquare() {
    // Определяем границы для текущего направления
    let targetX, targetY;

    switch (direction) {
        case 0: // Движение вправо
            targetX = screenWidth - size;
            targetY = 0;
            if (x < targetX) {
                x += speed;
            } else {
                direction = 1; // переключаем на движение вниз
            }
            break;

        case 1: // Движение вниз
            targetX = screenWidth - size;
            targetY = screenHeight - size;
            if (y < targetY) {
                y += speed;
            } else {
                direction = 2; // переключаем на движение влево
            }
            break;

        case 2: // Движение влево
            targetX = 0;
            targetY = screenHeight - size;
            if (x > targetX) {
                x -= speed;
            } else {
                direction = 3; // переключаем на движение вверх
            }
            break;

        case 3: // Движение вверх
            targetX = 0;
            targetY = 0;
            if (y > targetY) {
                y -= speed;
            } else {
                direction = 0; // переключаем на движение вправо (новый круг)
            }
            break;
    }

    // Растём
    size += growthRate;

    // Обновляем стили квадрата
    square.style.width = `${size}px`;
    square.style.height = `${size}px`;
    square.style.left = `${x}px`;
    square.style.top = `${y}px`;

    // Проверяем условие окончания игры
    if (size >= Math.max(screenWidth, screenHeight)) {
        // Останавливаем анимацию
        cancelAnimationFrame(animationId);
        // Показываем экран окончания игры
        gameOverScreen.classList.add('show');
        return;
    }

    // Продолжаем анимацию
    const animationId = requestAnimationFrame(animateSquare);
}

// Запускаем анимацию
const animationId = requestAnimationFrame(animateSquare);

// Обработчик изменения размера окна
window.addEventListener('resize', function() {
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
});
