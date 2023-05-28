const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event) {
    event.preventDefault();
    console.log(toDoIn)
}

toDoForm.addEventListener("submit", handleToDoSubmit);