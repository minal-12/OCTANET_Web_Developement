let tasks = [];

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    if (taskText) {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = '';
        renderTasks();
    }
}

function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';
        li.innerHTML = `
            <span onclick="toggleTask(${index})">${task.text}</span>
            <div class="buttons">
                <button class="edit" onclick="editTask(${index})">Edit</button>
                <button class="delete" onclick="deleteTask(${index})">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function editTask(index) {
    const newTaskText = prompt('Edit task:', tasks[index].text);
    if (newTaskText !== null) {
        tasks[index].text = newTaskText;
        renderTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

document.addEventListener('DOMContentLoaded', () => {
    renderTasks();
});
