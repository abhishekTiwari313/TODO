
        function addTask() {
            const taskInput = document.getElementById("task");
            const taskText = taskInput.value.trim();

            if (taskText !== "") {
                const tasksList = document.getElementById("tasks");
                const li = document.createElement("li");
                li.innerHTML = `
                    ${taskText}
                    <button onclick="removeTask(this)">Remove</button>
                `;
                tasksList.appendChild(li);
                taskInput.value = "";
            }
        }

        function removeTask(button) {
            const taskItem = button.parentElement;
            taskItem.remove();
        }
