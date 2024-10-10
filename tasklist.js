document.addEventListener('DOMContentLoaded', loadTasks);

function addTask() {
    const input = document.getElementById('taskInput');
    const newTask = input.value;
    if (newTask.trim() === '') {
        alert("Please enter a task.");
        return;
    }
    const tasksList = document.getElementById('tasksList');
    const li = document.createElement('li');
    li.textContent = newTask;
    li.setAttribute('onclick', 'removeTask(this)');
    tasksList.appendChild(li);
    saveTasks();
    input.value = ''; // Clear input after adding
}

function removeTask(taskItem) {
    taskItem.remove();
    saveTasks();
}

function saveTasks() {
    const tasksList = document.querySelectorAll('#tasksList li');
    const tasks = [];
    tasksList.forEach(task => {
        tasks.push(task.textContent);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const tasksList = document.getElementById('tasksList');
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        li.setAttribute('onclick', 'removeTask(this)');
        tasksList.appendChild(li);
    });
}
