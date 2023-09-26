document.addEventListener("DOMContentLoaded", function () {
    const commentForm = document.getElementById("commentForm");
    const commentsContainer = document.getElementById("comments");
    const apiUrl = "http://10.71.4.34/comments";
    const tokenUrl = "http://10.71.4.34/challenges/1";
    let accessToken = null; // Store the access token

    // Function to fetch access token
    function fetchAccessToken() {
        fetch(tokenUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                accessToken = data.token;
                setTimeout(() => {
                    accessToken = null; // Clear the token after 3 seconds
                }, 3000);
            })
            .catch((error) => {
                console.error("Error fetching access token:", error);
            });
    }

    // Function to send comment with access token
    function sendCommentWithToken(comment) {
        if (!accessToken) {
            alert("Access token expired. Please try again.");
            return;
        }

        fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify(comment),
        })
            .then((response) => response.json())
            .then((data) => {
                displayComment(data); 
            })
            .catch((error) => {
                console.error("Error sending comment:", error);
            });
    }

    commentForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const usernameInput = document.getElementById("username");
        const messageInput = document.getElementById("message");

        const username = usernameInput.value;
        const message = messageInput.value;

        if (username.length < 3 || username.length > 16) {
            alert("Please enter a username between 3 and 16 characters.");
            return;
        }

        if (message.length < 3 || message.length > 300) {
            alert("Please enter a message between 3 and 300 characters.");
            return;
        }

        const comment = {
            username: username,
            message: message,
        };

        fetchAccessToken();
        sendCommentWithToken(comment);

        usernameInput.value = "";
        messageInput.value = "";
    });

    function displayComment(comment) {
        const commentDiv = document.createElement("div");
        commentDiv.className = "comment";
        commentDiv.innerHTML = `
            <strong>${comment.username}:</strong>
            <p>${comment.message}</p>
        `;
        commentsContainer.appendChild(commentDiv);
    }
});
