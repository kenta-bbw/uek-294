const data = document.getElementsByClassName('voy-qb-item-value1 voy-wikidata-content');
console.log(data)
if (data.length > 0) {
  const firstInnerText = data[0].innerText;
  console.log(firstInnerText); 
} else {
  console.log("No matching elements found.");
}

const regionen = document.getElementsByClassName('voy-regionName');
console.log(regionen.length)


var natureName = document.querySelectorAll('[data-group="nature"], .p-name');
natureName.forEach(function(element) {
  console.log(element.textContent);
});

console.log(natureName)

