// In script.js
const jokeForm = document.getElementById("jokeForm");
const jokeContainer = document.getElementById("jokeContainer");
const timerDisplay = document.getElementById("timer");

let resetTimer; // Timer variable
let remainingTime = 60; // Initial remaining time in seconds
let timerRunning = false; // Indicates whether the timer is running

jokeForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get selected flags
    const selectedFlags = Array.from(document.querySelectorAll('input[name="flags"]:checked')).map(checkbox => checkbox.value);

    // Set the maximum number of retries
    const maxRetries = 119; // Adjust this as needed

    // Start fetching jokes with retries
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
            clearInterval(resetTimer); // Stop the timer when it reaches 0
            timerRunning = false;
        }
    }, 1000); // Update the timer every second
}

function fetchJoke(selectedFlags, retriesLeft) {
    if (retriesLeft === 0) {
        // No more retries left, display a message
        jokeContainer.innerHTML = `<p>No matching joke found.</p>`;
        if (!timerRunning) {
            startTimer(); // Start the timer only if it's not already running
        }
        return;
    }

    // Construct the API URL based on user selection
    let apiUrl = `https://v2.jokeapi.dev/joke/Any?type=single`;

    // Fetch a joke from the API
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            if (data.error === false) {
                // Check if the fetched joke matches any of the selected flags
                const flagsMatched = selectedFlags.some(flag => data.flags[flag]);

                if (flagsMatched) {
                    // If flags match, display the joke
                    jokeContainer.innerHTML = `<p>${data.joke}</p>`;
                } else {
                    // If flags do not match, fetch another joke recursively
                    fetchJoke(selectedFlags, retriesLeft - 1);
                    console.log(retriesLeft)
                }
            } else {
                // Handle API errors
                jokeContainer.innerHTML = `<p>Couldn't fetch a joke.</p>`;
                if (!timerRunning) {
                    startTimer(); // Start the timer only if it's not already running
                }
            }
        })
        .catch((error) => {
            // Handle fetch errors
            console.error("Error fetching joke:", error);
            jokeContainer.innerHTML = `<p>An error occurred while fetching the joke.</p>`;
            if (!timerRunning) {
                startTimer(); // Start the timer only if it's not already running
            }
        });
}

// Initial timer display
updateTimerDisplay();
