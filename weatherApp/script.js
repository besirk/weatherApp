window.addEventListener('load', () => {
    let lat;
    let long;
    let tempDesc = document.querySelector('.temp-description');
    let tempdegree = document.querySelector('.temp-degree');
    let timezone = document.querySelector('.location-timezone');
    let locationIcon = document.querySelector('.icon');
    let wind = document.querySelector('.winds');


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const apiKey = 'b7cee685ae678410b2ed0ee113441c69';
            const proxy = 'http://cors-anywhere.herokuapp.com/corsdemo';
            const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`;


            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    const { temp, weather, wind_speed } = data.current;
                    const { icon, description } = data.current.weather[0]
                        //set dom elements
                    console.log(icon)
                    tempdegree.textContent = temp;
                    tempDesc.textContent = description;
                    timezone.textContent = data.timezone;
                    locationIcon.innerHTML = `<img src="icons/${icon}.png">`;
                    wind.textContent = wind_speed;
                })
        })
    }
})