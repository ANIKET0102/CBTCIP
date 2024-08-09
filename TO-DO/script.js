document.addEventListener("DOMContentLoaded", function() {
    const taskList = document.getElementById('task-list');
    const completedTaskList = document.getElementById('completed-task-list');
    const newTaskInput = document.getElementById('new-task');
    const addTaskBtn = document.getElementById('add-task-btn');

    // Function to create a new task item
    function createTaskItem(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.classList.add('complete-btn');

        completeBtn.addEventListener('click', function() {
            li.classList.add('completed');
            completedTaskList.appendChild(li);
            li.removeChild(completeBtn);
        });

        li.appendChild(completeBtn);
        return li;
    }

    // Event listener for adding new tasks
    addTaskBtn.addEventListener('click', function() {
        const taskText = newTaskInput.value.trim();

        if (taskText !== '') {
            const taskItem = createTaskItem(taskText);
            taskList.appendChild(taskItem);
            newTaskInput.value = '';
        }
    });
});