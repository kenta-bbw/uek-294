const chooseButton = document.getElementById("choose");
const countryList = document.getElementsByTagName("li");

const chooseCountry = () => {
  for (const country of countryList) {
    country.classList.remove("highlighted");
  }
  const randomIndex = Math.floor(Math.random() * countryList.length);
  const randomCountry = countryList[randomIndex];
  randomCountry.classList.add("highlighted");
  randomCountry.scrollIntoView({ behavior: "smooth" });
};

chooseButton.addEventListener("click", chooseCountry);
