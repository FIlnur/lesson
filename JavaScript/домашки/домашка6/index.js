// Замените 'your_api_key_here' на ваш реальный API-ключ с OpenWeatherMap
const API_KEY = 'your_api_key_here';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Элементы DOM
const currentData = document.getElementById('currentData');
const forecastData = document.getElementById('forecastData');
const errorMsg = document.getElementById('errorMsg');
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');

// Функция для получения данных о текущей погоде
async function getCurrentWeather(city) {
    try {
        const response = await fetch(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ru`);
        if (!response.ok) throw new Error('Город не найден или ошибка API');
        return await response.json();
    } catch (error) {
        showError('Не удалось получить данные о текущей погоде: ' + error.message);
        throw error;
    }
}

// Функция для получения прогноза на 5 дней (3-часовой интервал, берём один раз в день)
async function getForecast(city) {
    try {
        const response = await fetch(`${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=ru`);
        if (!response.ok) throw new Error('Ошибка при получении прогноза погоды');
        return await response.json();
    } catch (error) {
        showError('Не удалось получить прогноз погоды: ' + error.message);
        throw error;
    }
}

// Отображение текущей погоды
function displayCurrentWeather(data) {
    const lastUpdated = new Date(data.dt * 1000).toLocaleString('ru-RU');
    
    currentData.innerHTML = `
        <div class="current-item">
            <div>
                <h3>${data.name}, ${data.sys.country}</h3>
                <p>Обновлено: ${lastUpdated}</p>
                <div style="font-size: 2em; margin: 10px 0;">${Math.round(data.main.temp)}°C</div>
                <p>${data.weather[0].description}</p>
            </div>
            <img class="current-icon" src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="${data.weather[0].description}">
        </div>
        <div class="current-item">
            <div>
                <p>Скорость ветра: ${data.wind.speed * 3.6} км/ч</p>
                <p>Давление: ${data.main.pressure} мб</p>
                <p>Влажность: ${data.main.humidity}%</p>
            </div>
        </div>
    `;
}

// Обработка прогноза на 5 дней
function displayForecast(data) {
    // Группируем данные по дням и вычисляем средние значения
    const dailyForecast = {};
    
    data.list.forEach(item => {
        const date = new Date(item.dt * 1000);
        const dayKey = date.toLocaleDateString('ru-RU');
        
        if (!dailyForecast[dayKey]) {
            dailyForecast[dayKey] = {
                temps: [],
                conditions: [],
                icon: item.weather[0