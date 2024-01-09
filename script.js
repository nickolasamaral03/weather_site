const search = document.querySelector('button .search')

search.addEventListener('click', () => {
    const ApiKey = '1926580c2b4adc0b4274cc81be83a27c';
    const city = document.querySelector('.input_city').value;

    if(city == "")
    return

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${ApiKey}`).then(response => response.json()).then(json => {


    const temperatura = document.querySelector('.weather_box .temperature')
    const wind = document.querySelector('.weather_details .wind span')
    const humidity = document.querySelector(' .weather_details .humidity span')
    const image = document.querySelector('.weather_box img')
    
    switch(json.weather[0].main){
        case 'Clear':
            image.src = 'icones/icone_sun.png';
            break;

        case 'Rain':
            image.src = 'icones/icone_rain.png';
            
        case 'Snow':
            image.src = 'icones/icone_rain.png';
            break;

        case 'Clouds':
            image.src = 'icones/icone_cloud.png';
            break;

            default:
                img.src = ""
    }

    temperatura.innerHTML = `${parseInt(json.main.temp)} <span>graus</span>`
    humidity.innerHTML = `Humidity: ${(json.main.humidity)}%`
    wind.innerHTML = `Wind Speed: ${parseInt(json.wind.speed)} Km/h`

    })
})

