const fizzbuzzButton = document.getElementById("fizzbuzzButton");
const outputDiv = document.getElementById("output");

const Fizzbuzz = () => {
  var outputText = ""; 

  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      outputText += "FizzBuzz<br>";
    } else if (i % 5 === 0) {
      outputText += "Buzz<br>";
    } else if (i % 3 === 0) {
      outputText += "Fizz<br>";
    } else {
      outputText += i + "<br>";
    }
  }

  outputDiv.innerHTML = outputText;
};

fizzbuzzButton.onclick = Fizzbuzz;
