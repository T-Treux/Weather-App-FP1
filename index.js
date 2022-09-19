function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let description = document.querySelector("#description");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  description.innerHTML =
  
}

let apiKey = "2470c77565feed5f5dce3347bf4cb0f2";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q={Chicago}&appid={2470c77565feed5f5dce3347bf4cb0f2}&units=metrics";

axios.get(apiUrl).then(displayTemperature);
