const todo_form = document.querySelector("#todo-form");
const todo_input = todo_form.querySelector("input");
const todo_ul = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos(){ // 로컬 스토리지에 toDos 배열 추가 (배열 string)
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function removeToDo(event){
    /////////////HTML 태그 삭제/////////////////
    const li = event.target.closest(":not(button)");
    li.remove();
    /////////////Local Storage 삭제/////////////
    function removeFileter(todo){
        return todo.id !== parseInt(li.id);
    }
    toDos = toDos.filter(removeFileter);
    saveToDos();
    // this.parentElement.remove();
}

function addToDo(newTodo){
    const create_li = document.createElement("li");
    const create_span = document.createElement("span");
    const button = document.createElement("button");
    create_span.innerText = newTodo.text;
    create_li.id = newTodo.id;
    button.innerText = "➖";  //❌
    button.addEventListener("click", removeToDo);

    create_li.appendChild(create_span);
    create_li.appendChild(button);
    todo_ul.appendChild(create_li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = todo_input.value;
    todo_input.value = "";
    const newTodoObj = {
        text:newTodo,
        id:Date.now()
    };
    toDos.push(newTodoObj);
    addToDo(newTodoObj);
    saveToDos();
}
todo_form.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) { 
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(function(e){
        addToDo(e);
    });
}


