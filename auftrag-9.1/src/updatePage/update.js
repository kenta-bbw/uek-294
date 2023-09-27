const createFrom = document.getElementById('myForm');

document.addEventListener("DOMContentLoaded", () => {
    let titleElement = document.getElementById('title');
    let status = document.getElementById('status').checked;
    let checkbox = document.getElementById('status');
    let title = titleElement.value;
    const urlParams = new URLSearchParams(window.location.search);
    const taskId = urlParams.get('taskId');
    async function fetchTask() {
        try {
            console.log(taskId); 
            const response = await fetch(`http://localhost/task/${taskId}`);
            const data = await response.json();
            console.log(data.completed)
            titleElement.value = data.title;
            if (data.completed == false) {
                checkbox.checked = false; 
              } else if (data.completed == true) {
                checkbox.checked = true;  
              }
            
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    }
    createFrom.addEventListener("submit", async (event) => {
        let titleElement = document.getElementById('title');
        let status = document.getElementById('status').checked;
        let title = titleElement.value;
        const urlParams = new URLSearchParams(window.location.search);
        const taskId = urlParams.get('taskId');
        event.preventDefault();
        const taskData = {
            id: taskId,
            title: title,
            completed: status,
        };
        const TaskJson = JSON.stringify(taskData);
        console.log(TaskJson);
        console.log(`Going to send Username: ${title} message: ${status} with id ${taskId}`);

        const response = await fetch(`http://localhost/tasks`, {
            method: 'PUT',
            headers:{
                "Content-Type" : "application/json"
            },
            body: TaskJson
        });

        if (response.ok) {
            console.log('Task updated successfully');
        } else {
            console.error('Failed to update tasks');
        }
    });
    fetchTask();
});
