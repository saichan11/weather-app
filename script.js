document.getElementById('searchBtn').addEventListener('click', getWeather);

async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '55c9ed8ca97a459d555cf042ae5a797a'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById('weatherResult').innerHTML = `<p>${error.message}</p>`;
    }
}

function displayWeather(data) {
    const weatherResult = document.getElementById('weatherResult');
    weatherResult.innerHTML = `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
    `;
}
