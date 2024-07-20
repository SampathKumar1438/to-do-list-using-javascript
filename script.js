function addTask() {
  const taskInput = document.getElementById("task");
  const taskValue = taskInput.value;
  if (taskValue.trim() !== "") {
    const li = document.createElement("li");
    const taskText = document.createTextNode(taskValue);
    li.appendChild(taskText);
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = function () {
      li.remove();
    };
    li.appendChild(deleteButton);
    document.getElementById("list").appendChild(li);
    taskInput.value = "";
  } else {
    alert("Please enter a task.");
  }
}
