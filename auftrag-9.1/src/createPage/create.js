const createFrom = document.getElementById('myForm');

document.addEventListener("DOMContentLoaded", () => {
  createFrom.addEventListener("submit", async (event) => {
    event.preventDefault();
    const titleElement = document.getElementById('title');
    let status = document.getElementById('status').checked;
    const title = titleElement.value;
    const taskData = {
        title: title,
        completed: status,
      };
    const TaskJson = JSON.stringify(taskData);
    console.log(TaskJson);
    console.log(`Going to send Username: ${title} message: ${status}`);

    const response = await fetch(`http://localhost/tasks`, {
        method: 'POST',
        headers:{
            "Content-Type" : "application/json"
          },
        body: TaskJson
    });

    if (response.ok) {
        console.log('Task created successfully');
    } else {
        console.error('Failed to create tasks');
    }
  });
});
