const form = document.querySelector(`form`);
const input = document.querySelector(`input`);
const cityName = document.querySelector(`.cityName`);
const conditions = document.querySelector(`.conditions`);
const temperature = document.querySelector(`.temperature`);
const humidity = document.querySelector(`.humidity`);

form.addEventListener(`submit`, (e) => {
  e.preventDefault();
  getWeather(input.value);
});

function onLoad() {
  getWeather(input.value);
}

async function getWeather(myCityChoice) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${myCityChoice}?key=3NA388TD6TTM2FBY63WMSUDZL`,
    {
      mode: "cors",
    }
  );
  const weatherData = await response.json();
  console.log(weatherData.currentConditions);
  const city = weatherData.resolvedAddress;
  const cond = weatherData.currentConditions.conditions;
  const temp = weatherData.currentConditions.temp;
  const hum = weatherData.currentConditions.humidity;

  setCityData(city, cond, temp, hum);
}

function setCityData(city, cond, temp, hum) {
  cityName.textContent = city;
  conditions.textContent = cond;
  temperature.textContent = `${temp} °C`;
  humidity.textContent = `${hum} %`;
}
