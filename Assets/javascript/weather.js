var searchCity = document.querySelector("#search-city");

function getWeather(event) {
    event.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity.value}&appid=a274732eb18548f51d89011169773a83&units=imperial`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        var currentDiv = $("#current-weather")
        renderWeather(data, currentDiv)
    })
}
function renderWeather(data, currentDiv) {
    console.log(currentDiv)
    // var cityH2 = document.createElement("h2")
    var cityH2 = $("<h2>");
    var tempP = $("<p>");
    var windSp = $("<p>");
    var humidity = $("<p>");
;
    cityH2.text(data.name)
    tempP.text(`Temp: ${data.main.temp}`)
    windSp.text(`Wind Speed: ${data.wind.speed}`)
    humidity.text(`Humidity: ${data.main.humidity}`)

    currentDiv.append(cityH2);
    currentDiv.append(tempP);
    currentDiv.append(windSp);
    currentDiv.append(humidity);

    // var cityH2 = document.createElement("p")
    // var cityH2 = document.createElement("p")
    // var cityH2 = document.createElement("p")

}

document.querySelector("#search-form-weather").addEventListener("submit", getWeather)