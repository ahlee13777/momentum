const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //로컬스토리지 todos에 toDos string으로저장하기 
}

function deleteToDo(event) {
    const li = event.target.parentElement; //console.dir(event)해서 찾아냄
    li.remove();
}

function paintToDo(newToDoOBj) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDoObj.; //<li><span>newTodo 이런 형식으로 만듦

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
    const newToDoObj = {
        text:newToDo,
        id: Date.now(),
    }; //식별가능한 random id부여
    toDos.push(newToDoObj); //toDos에 newTodo넣기
    paintToDo(newToDoObj); //newTodo 그리기
    saveToDos(); //로컬에 저장
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos){
    const parsedToDos = JSON.parse(savedToDos); //string파싱
    toDos = parsedToDos; //있으면 갖다쓰기 (새고 초기화 방지)
    parsedToDos.forEach(paintToDo);
}