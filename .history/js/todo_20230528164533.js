const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const todos = []

function deleteToDo(event) {
    const li = event.target.parentElement; //console.dir(event)해서 찾아냄
    li.remove();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDo; //<li><span>newTodo 이런 형식으로 만듦

    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li); //"todo-list"안에 li 넣기
}

function handleToDoSubmit(event) {
    event.preventDefault(); //새고방지 
    const newToDo = toDoInput.value; //비우기전에 newToDo에 저장
    toDoInput.value=""; //네모칸 비우기
    paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);