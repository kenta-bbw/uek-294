const commentUrl = "http://10.71.4.34/comments";
const tokenUrl = "http://10.71.4.34/challenges/1";
const commentForm = document.getElementById("commentForm");

document.addEventListener("DOMContentLoaded", () => {
  commentForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const headerResponse = await fetch(tokenUrl, {method: "POST"})
    const accessToken = headerResponse.headers.get('Authorization');
    const username = document.getElementById('username').value;
    const message = document.getElementById('message').value; 
    console.log(`Going to send Username: ${username} message: ${message} with token ${accessToken}`)    
    const jsonToSend = JSON.stringify({username : username, message: message});
    await fetch(commentUrl, {
      method : "POST",
      headers:{
        Authorization: accessToken,
        "Content-Type" : "application/json"
      },
      body: jsonToSend
    })
  });
});

