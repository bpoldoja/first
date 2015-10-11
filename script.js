/**
 * Created by USER on 19.09.2015.
 */

function createNewTodo(lbl) {

    console.log("createNewToDo");
    //create new to-do with label and remove button
    //return ex. <div><p>lbl<p/><button onclick="removeToDo(this)">-</button></div>
}

function addNewTodo(newTodo) {
    console.log("addNewToDo");
    //select list
    var todo_list = document.getElementById("todo-list");

    //create new li, ex. <li> newToDo </li>
    //todo

    //adds new li to list
    todo_list.appendChild(newTodo);
}

function getToDoLbl() {
   console.log("getToDoLbl");
    //return the label in the text box
}

function removeToDo(id) {
    console.log("removeToDo");
}

function onAddClicked() {
    console.log("onAddClicked");

    var newToDoLbl = getToDoLbl();
    var newTodo = createNewTodo(newToDoLbl);
    addNewTodo(newTodo);
}