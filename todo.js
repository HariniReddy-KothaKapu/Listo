window.addEventListener("DOMContentLoaded", () => {
  const savedTask = localStorage.getItem("initialTask");

  if (savedTask) {
    addTaskToList(savedTask);
    localStorage.removeItem("initialTask");
  }
});

function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();

  if (task !== "") {
    addTaskToList(task);
    input.value = "";
  }
}

function addTaskToList(taskText) {
  const ul = document.getElementById("taskList");

  const li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.className = "delete-btn";
  delBtn.onclick = () => li.remove();

  li.appendChild(delBtn);
  ul.appendChild(li);
}
