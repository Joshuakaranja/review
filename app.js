// Simple Task Manager using Fetch API and JSON Server

// HTML Elements

const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");

const BASE_URL = "http://localhost:3000/tasks";

// GET all tasks

function fetchTasks() {
  fetch(BASE_URL)
    .then(res => res.json()) // convert response to JS
    .then(tasks => {
      taskList.innerHTML = ""; // clear list

      tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task.title;

        // Toggle completed
        li.addEventListener("click", () => {
          fetch(`${BASE_URL}/${task.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ completed: !task.completed })
          }).then(() => fetchTasks()); // reload
        });

        // Delete button
        const delBtn = document.createElement("button");
        delBtn.textContent = "❌";
        delBtn.addEventListener("click", () => {
          fetch(`${BASE_URL}/${task.id}`, { method: "DELETE" })
            .then(() => fetchTasks());
        });

        li.appendChild(delBtn);
        taskList.appendChild(li);
      });
    });
}

// POST new task
addTaskBtn.addEventListener("click", () => {
  const newTask = { title: taskInput.value, completed: false };

  fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTask)
  }).then(() => {
    taskInput.value = "";
    fetchTasks(); // refresh
  });
});

// Initialize
fetchTasks();
