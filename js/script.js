"use strict"

const elForm = document.querySelector(".form");
const elInput = document.querySelector(".form-input");
const elWeather = document.querySelector(".result");

const renderCountry = function(data) {
    const html = `
    <h1 class="weather__heading">${data.name}</h1>
    <div class="weather__desc">Country: ${data.sys.country}</h3>
    <p class="weather__paragraf">${data.main.temp}</p>
    <p class="weather__speed">Speed: ${data.wind.speed}</p>
    `
    elWeather.innerHTML = null
    elWeather.insertAdjacentHTML("beforeend", html)
}

const getCountryData = async function(location){
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=277e160f5af509c9f6e384d7cbe3501c`)

    const [data] = await promise.json();

    renderCountry(data)
}




elForm.addEventListener("change", function(e) {
    e.preventDefault()

    const inputValue = elInput.value;
    elInput.value = null

    console.log(inputValue);

    getCountryData(inputValue)
})
