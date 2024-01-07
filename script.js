
//Weather API URL and API Key 

const apiKey = 'b4c6bb5ed36a946f0610376e084d4431';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

//access of button ans search bar 

const weatherIcon = document.querySelector('.weathericon');

const searchBox = document.querySelector('.search input');

const searchButton = document.querySelector('.search button');

//asynchronous requests to the API

async function checkWeather (city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)

    if(response.status == 404 ){
        document.querySelector(".error").style.display = "block" ;
        document.querySelector(".weather").style.display = "none" ;
    }else{

        var data = await response.json();

console.log(data);

//processing the response, and updating the DOM (Document Object Model) to reflect the weather information.

document.querySelector('.city').innerHTML = data.name;

document.querySelector('.temp').innerHTML = Math.round( data.main.temp) + `°C`;

document.querySelector('.humidity-text').innerHTML = data.main.humidity + '%';

document.querySelector('.wind-text').innerHTML = data.wind.speed + ' km/h';

//condition for different images in different weather condition in different city 
    
    if (data.weather[0].main == 'Clouds') {
        weatherIcon.src = "clouds.png";
    } else if (data.weather[0].main == 'Clear') {
        weatherIcon.src = "clear.png";
    } else if (data.weather[0].main == 'Mist') {
        weatherIcon.src = "mist.png";
    } else if (data.weather[0].main == 'Rain') {
        weatherIcon.src = "rain.png";
    } else if (data.weather[0].main == 'Drizzle') {
        weatherIcon.src = "drizzle.png";
    }

    //Document Manipulation for Error Handling 

   document.querySelector('.weather').style.display = 'block';
   document.querySelector(".error").style.display = "none" ;
}
 }

searchButton.addEventListener('click' , ()=>{
    checkWeather(searchBox.value);
});














