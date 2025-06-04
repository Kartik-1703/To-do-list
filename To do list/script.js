document.addEventListener("DOMContentLoaded", function () {
  const addBtn = document.getElementById("addBtn");
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  addBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    // Create <li> container
    const li = document.createElement("li");

    // Create checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-check";

    // Create span to hold task text
    const span = document.createElement("span");
    span.textContent = taskText;
    span.className = "task-text";

    // Toggle done style
    checkbox.addEventListener("change", function () {
      span.classList.toggle("done", checkbox.checked);
    });

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => li.remove();

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
  });
});