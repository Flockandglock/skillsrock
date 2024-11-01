document.addEventListener("DOMContentLoaded", () => {
    // Получаем наши элементы со страницы
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const listItem = document.createElement('li');
            listItem.className = 'task';
            
            listItem.textContent = taskText;

            // Добавление кнопки "Удалить"
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Удалить';
            deleteButton.addEventListener('click', () => {
                taskList.removeChild(listItem);
            });

            // Добавление обработчика клика для отметки задачи как выполненной
            listItem.addEventListener('click', () => {
                listItem.classList.toggle('completed');
            });

            listItem.appendChild(deleteButton);
            taskList.appendChild(listItem);
            
            // Очистка поля ввода
            taskInput.value = ''; 
        }
    });
});

