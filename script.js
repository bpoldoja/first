
//Takes to-do label as parameter.
//Creates a new li with a span and button.
function createNewTodo(lbl) {

    //Make div
    var li = document.createElement("li");

    //Make paragraph
    var span = document.createElement("span");
    span.innerHTML = lbl;

    //Make remove button
    var button = document.createElement("button");
    button.onclick = function() {
        removeToDo(li);
    };
    button.innerHTML = "-";

    //Put span and button in li
    li.appendChild(span);
    li.appendChild(button);

    return li;
}

//Adds new to-do item
function addNewTodo(newTodo) {
    var todo_list = document.getElementById("todo-list");
    todo_list.appendChild(newTodo);
}

//Makes a new lbl and returns the input empty
function getToDoLbl() {
    var todo_input = document.getElementById("todo-input");
    var val = todo_input.value;
    todo_input.value = "";
    return val;
}

// Removes an element
function removeToDo(element) {
    element.parentNode.removeChild(element);
}

//When clicked + button creates new to-do li
function onAddClicked() {
    var newToDoLbl = getToDoLbl();
    var newTodo = createNewTodo(newToDoLbl);
    addNewTodo(newTodo);
}