const key = "eae8e1c67dbcf3f8db87c4e8a5d4a2b0";

function dataOnScreen(data) {
  document.querySelector(".city").innerHTML = "Tempo em " + data.name;
  document.querySelector(".graus").innerHTML =
    Math.floor(data.main.temp) + "°C";
  document.querySelector(".clima").innerHTML = data.weather[0].description;
  document.querySelector(".umidade").innerHTML =
    "Umidade: " + data.main.humidity + "%";
  document.querySelector(
    ".img-icon"
  ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

  console.log(data);
}
async function citySearch(city) {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
  ).then((response) => response.json());

  dataOnScreen(data);
}

function clickSearch() {
  const city = document.querySelector(".input-city").value;
  citySearch(city);
}

document.addEventListener("DOMContentLoaded", () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("pt-BR");
  document.querySelector(".data").innerHTML = formattedDate;
});
