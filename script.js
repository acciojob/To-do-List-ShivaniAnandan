//your code here
//your code here
document.addEventListener("DOMContentLoaded", function () {
  const newTodoInput = document.getElementById("newTodoInput");
  const addTodoBtn = document.getElementById("addTodoBtn");
  const todoList = document.getElementById("todoList");

  addTodoBtn.addEventListener("click", function () {
    const todoText = newTodoInput.value.trim(); // Remove leading and trailing spaces

    if (todoText !== "") {
      // Check if the input is not empty
      const listItem = document.createElement("li");
      listItem.textContent = todoText;
      todoList.appendChild(listItem);

      newTodoInput.value = ""; // Clear the input field
    }
  });

  newTodoInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      // Handle Enter key press
      addTodoBtn.click(); // Trigger the click event on the "Add todo" button
    }
  });
});

