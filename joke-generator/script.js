const jokeForm = document.getElementById("jokeForm");
const jokeContainer = document.getElementById("jokeContainer");
const timerDisplay = document.getElementById("timer");
const retryCountDisplay = document.getElementById("retryCount"); 
const commentUrl = "http://10.71.4.34/comments";
const tokenUrl = "http://10.71.4.34/challenges/1";
const commentForm = document.getElementById("commentForm");

var tries = 0;

let resetTimer; 
let remainingTime = 60; 
let timerRunning = false;

jokeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const selectedFlags = Array.from(document.querySelectorAll('input[name="flags"]:checked')).map(checkbox => checkbox.value);
    const maxRetries = 119; 
    fetchJoke(selectedFlags, maxRetries);
});

function updateTimerDisplay() {
    timerDisplay.textContent = `Remaining Time: ${remainingTime} seconds`;
}

function startTimer() {
    timerRunning = true;
    resetTimer = setInterval(() => {
        remainingTime--;
        updateTimerDisplay();
        if (remainingTime === 0) {
            clearInterval(resetTimer);
            timerRunning = false;
        }
    }, 1000);
}

function fetchJoke(selectedFlags, retriesLeft, retryCount) {
    if (retriesLeft === 0) {
        jokeContainer.innerHTML = `<p>No matching joke found.</p>`;
        if (!timerRunning) {
            startTimer(); 
        }
        updateRetryCount();
        return;
    }
    let apiUrl = `https://v2.jokeapi.dev/joke/Any`;
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            if (data.error === false) {
                const flagsMatched = selectedFlags.some(flag => data.flags[flag]);
                if (flagsMatched) {
                    if(data.joke){
                        jokeContainer.innerHTML = `<p>${data.joke}</p>`;
                        tries = 0;
                    } else {
                        jokeContainer.innerHTML = `<p>${data.setup} <br> ${data.delivery}</p>`;
                        tries = 0;
                    }
                } else {
                    fetchJoke(selectedFlags, retriesLeft - 1,);
                    tries += 1;
                    console.log(tries);                    
                    console.log(retriesLeft);
                    updateRetryCount()
                }
            } else {
                jokeContainer.innerHTML = `<p>Couldn't fetch a joke.</p>`;
                if (!timerRunning) {
                    startTimer(); 
                }
                updateRetryCount();
            }
        })
        .catch((error) => {
            console.error("Error fetching joke:", error);
            jokeContainer.innerHTML = `<p>An error occurred while fetching the joke.</p>`;
            if (!timerRunning) {
                startTimer(); 
            }
            updateRetryCount();
        });
}
function updateRetryCount() {
    retryCountDisplay.textContent = `Retries: ${tries}`;
}
updateTimerDisplay();
updateRetryCount();
