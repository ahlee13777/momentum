const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newTodo; //<li
}

function handleToDoSubmit(event) {
    event.preventDefault(); //새고방지 
    const newToDo = toDoInput.value; //비우기전에 newToDo에 저장
    toDoInput.value=""; //네모칸 비우기
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);