const plzField = document.getElementById("plz");
const ortField = document.getElementById("ort");

plzField.addEventListener("blur", function () {
  const plz = plzField.value;
  
  fetch('places.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      if (data && Array.isArray(data)) {
        const placeData = data.find(place => place.zipcode === plz);
        if (placeData) {
          ortField.value = placeData.place;
        } else {
          ortField.value = "Unbekannt"; 
        }
      } else {
        console.error('Invalid JSON data:', data);
      }
    })
    .catch(error => {
      console.error('Error fetching JSON data:', error);
    });
});
