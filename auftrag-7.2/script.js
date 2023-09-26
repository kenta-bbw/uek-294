document.addEventListener("DOMContentLoaded", function () {
    const commentForm = document.getElementById("commentForm");
    const commentsContainer = document.getElementById("comments");

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

        // Display the comment
        displayComment(comment);

        // Clear input fields
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

        // Prepend the comment to the top of the comments container
        commentsContainer.insertBefore(commentDiv, commentsContainer.firstChild);
    }
});
