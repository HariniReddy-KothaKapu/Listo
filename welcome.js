function goToTemplates() {
  const task = document.getElementById('taskInput').value.trim();

  if (task !== "") {
    // Save to localStorage
    localStorage.setItem("initialTask", task);
  }

  // Redirect to to-do page
  window.location.href = "todo.html";
}
