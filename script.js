/**
 * Created by USER on 19.09.2015.
 */

function createNewTodo(lbl) {

    //Make div
    var li = document.createElement("li");

    //Make paragraph
    var span = document.createElement("span");
    span.innerHTML = lbl;

    //Make remove button
    var button = document.createElement("button");
    button.onclick = removeToDo(li);
    button.innerHTML = "-";

    //Put span and button in li
    li.appendChild(span);
    li.appendChild(button);

    return li;
}

function addNewTodo(newTodo) {
    var todo_list = document.getElementById("todo-list");
    todo_list.appendChild(newTodo);
}

function getToDoLbl() {
    var todo_input = document.getElementById("todo-input");
    var val = todo_input.value;
    todo_input.value = "";
    return val;
}

function removeToDo(element) {
    //console.log("removeToDo");
}

function onAddClicked() {
    var newToDoLbl = getToDoLbl();
    var newTodo = createNewTodo(newToDoLbl);
    addNewTodo(newTodo);
}