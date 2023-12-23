const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const toggleMode = document.getElementById("toggle-mode");
const modeLabel = document.getElementById("mode-label");
const body = document.body;

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    li.innerHTML = `
            <span>${taskText}</span>
            <button onclick="deleteTask(this)">Delete</button>
            <input type="checkbox" onchange="toggleTaskStatus(this)">
        `;
    taskList.appendChild(li);
    taskInput.value = "";
  }
}

function deleteTask(button) {
  const li = button.parentNode;
  taskList.removeChild(li);
}

function toggleTaskStatus(checkbox) {
  const li = checkbox.parentNode;
  li.classList.toggle("completed", checkbox.checked);
}

toggleMode.addEventListener("change", () => {
  body.classList.toggle("dark-mode");
  modeLabel.textContent = body.classList.contains("dark-mode")
    ? "Dark Mode"
    : "Light Mode";
});
