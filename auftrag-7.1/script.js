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
                const temperature = data.temperature;
                const date = new Date(data.timestamp);
                const weatherForecast = data.weather_forecast; 
                
                weatherInfo.innerHTML = `
                    <h2>Wetterinformation für Postleitzahl ${zipcode}</h2>
                    <p>Aktuelle Temperatur: ${temperature}°C</p>
                    <p>Datum: ${date.toLocaleString()}</p>
                    ${weatherForecast ? `<p>Wettervorhersage: ${weatherForecast}</p>` : ''}
                `;
            })
            .catch(error => {
                console.error('Fehler bei der API-Anfrage:', error);
                weatherInfo.innerHTML = '<p>Es gab ein Problem bei der Abfrage der Wetterdaten.</p>';
            });
    });
});
