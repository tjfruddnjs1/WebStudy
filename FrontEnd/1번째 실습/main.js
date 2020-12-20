function addNewItem(list, itemText){
    var listItem = document.createElement('li');
    listItem.innerText = itemText;
    list.appendChild(listItem);
}

var inputText = document.getElementById('inputText');
inputText.focus();

inputText.onkeyup = function(event) {
    //event.which (13) == ENTER key
    if(event.which == 13){
        var itemText = inputText.value;
        //prevent blank
        if (!itemText || itemText == "" || itemText == " ") return false;
        addNewItem(document.getElementById('todolist'), itemText);
        inputText.focus();
        inputText.select();
    }    
}