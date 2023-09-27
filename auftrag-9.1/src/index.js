const filteredTasks = [];
const tasks = [];
const searchQueryInput = document.getElementById("searchQuery");
const searchButton = document.getElementById("searchButton");
const taskList = document.getElementById("taskList");
const createBtn = document.getElementById("createButton")

function renderTasksList(tasksToRender) {
    taskList.innerHTML = ""; 

    tasksToRender.forEach(task => {
        const listItem = document.createElement("li");
        listItem.textContent = `${task.title} `;
        const updateButton = document.createElement("button");
        const deleteButton = document.createElement("button");
        const buttons = document.createElement("div");
        updateButton.textContent = "Update";
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {  const taskId = task.id; deleteTask(taskId)});
        updateButton.addEventListener("click", () => {  const taskId = task.id; updateTask(taskId);});     
        updateButton.classList.add('updateBtn')
        deleteButton.classList.add('deleteBtn')
        buttons.classList.add('buttons')
        buttons.appendChild(updateButton);
        buttons.appendChild(deleteButton);
        listItem.appendChild(buttons);
        taskList.appendChild(listItem);
        async function checkStatus (){
            console.log(task.completed)
            if (task.completed == true){
                listItem.classList.add('completed')
            }
        }
        checkStatus();
    });
}
async function fetchTasks() {
    try {
        const response = await fetch('http://localhost/tasks');
        const data = await response.json();
        tasks.push(...data);
        renderTasksList(tasks);
        console.log(data)
    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
}
       
function searchTasksByTitle() {
const query = searchQueryInput.value.toLowerCase();
const filteredTasks= query
    ? tasks.filter(tasks =>
        (tasks.title && tasks.title.toLowerCase().includes(query))
    )
    : tasks;
renderTaskList(filteredTasks);
}

async function deleteTask(taskId) {
    console.log("deleting..")
try {
    const response = await fetch(`http://localhost/task/${taskId}`, {
        method: 'DELETE'
    });

    if (response.ok) {    
        console.log('Task deleted successfully');
    } else {
        console.error('Failed to delete tasks');
    }
} catch (error) {
    console.error('Error deleting tasks:', error);
}
}
async function updateTask(taskId) {
    window.location.replace(`http://localhost:5500/updatePage/update.html?taskId=${taskId}`);
}

searchButton.addEventListener("click", searchTasksByTitle);
fetchTasks();
console.log(tasks)

