const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

const toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, toDos); //로컬스토리지 todos에 toDos 저장하기 
}

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
    toDos.push(newToDo);
    paintToDo(newToDo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(){
    console.log("hello");
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos){
    const partsedToDos = JSON.parse(savedToDos); //string파싱
    partsedToDos.forEach(sayHello);
}