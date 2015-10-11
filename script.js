/**
 * Created by USER on 19.09.2015.
 */

function createNewTodo(lbl) {

    //console.log("createNewToDo");
    //create new to-do with label and remove button
    //return ex. <div><p>lbl<p/><button onclick="removeToDo(this)">-</button></div>
}

function addNewTodo(newTodo) {
    //console.log("addNewToDo");
    //select list
    var todo_list = document.getElementById("todo-list");

    //create new li, ex. <li> newToDo </li>
    //todo

    //adds new li to list
    todo_list.appendChild(newTodo);
}

function getToDoLbl() {
    var todo_input = document.getElementById("todo-input");
    var val = todo_input.value;
    todo_input.value = "";
    return val;
}

function removeToDo(id) {
    //console.log("removeToDo");
}

function onAddClicked() {

    console.log("Result of getToDoLbl: " + getToDoLbl());
    //var newToDoLbl = getToDoLbl();
    //var newTodo = createNewTodo(newToDoLbl);
    //addNewTodo(newTodo);
}