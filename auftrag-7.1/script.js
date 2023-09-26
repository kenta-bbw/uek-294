document.addEventListener("DOMContentLoaded", function () {
    const zipcodeForm = document.getElementById('zipcodeForm');
    const weatherInfo = document.getElementById('weatherInfo');
  
    zipcodeForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const zipcodeInput = document.getElementById('zipcode');
        const zipcode = zipcodeInput.value.trim();
  
        if (!/^\d{4}$/.test(zipcode)) {
            alert('Bitte geben Sie eine gültige 4-stellige Postleitzahl ein.');
            return;
        }
  
        const apiUrl = `https://cors-anywhere.herokuapp.com/https://app-prod-ws.meteoswiss-app.ch/v1/plzDetail?plz=${zipcode}00`;
  
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const currentWeather = data.currentWeather;
                const temperature = currentWeather.temperature;
                const date = new Date(currentWeather.time);
                const forecast = data.forecast;
  
                let forecastHTML = '';
                if (forecast && forecast.length > 0) {
                    forecastHTML = '<p>Wettervorhersage:</p>';
                    forecast.forEach(day => {
                        forecastHTML += `
                            <p>Datum: ${day.dayDate}</p>
                            <p>Max. Temperatur: ${day.temperatureMax}°C</p>
                            <p>Min. Temperatur: ${day.temperatureMin}°C</p>
                            <p>Niederschlag: ${day.precipitation} mm</p>
                            <hr>
                        `;
                    });
                }
  
                weatherInfo.innerHTML = `
                    <h2>Wetterinformation für Postleitzahl ${zipcode}</h2>
                    <p>Aktuelle Temperatur: ${temperature}°C</p>
                    <p>Datum: ${date.toLocaleString()}</p>
                    ${forecastHTML}
                `;
            })
            .catch(error => {
                console.error('Fehler bei der API-Anfrage:', error);
                weatherInfo.innerHTML = '<p>Es gab ein Problem bei der Abfrage der Wetterdaten.</p>';
            });
    });
  });