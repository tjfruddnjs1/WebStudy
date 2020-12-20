function addNewItem(list, itemText){
    var listItem = document.createElement('li');
    listItem.innerText = itemText;
    list.appendChild(listItem);
}

var btnNew = document.getElementById('btnAdd');

btnNew.onclick = function () {
    var inputText = document.getElementById('inputText');
    var itemText = inputText.value;

    if (!itemText || itemText == "" || itemText == " ") return false;

    addNewItem(document.getElementById('todolist'), itemText);
}