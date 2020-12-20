function updateItemStatus(){
    var chId = this.id.replace('cb_','');
    var itemText = document.getElementById('item_'+ chId);

    if(this.checked){
        itemText.className = 'checked';
    }else{
        itemText.className = '';
    }
}

function renameItem(){
    //this == span
    var newText = prompt("What should this item be renamed to?");
    //prevent blank
    if(!newText || newText=="" || newText==" ") return false;

    this.innerText = newText;
}

function removeItem(){
    //this == listItem
    var listItemId = this.id.replace('li_','');
    document.getElementById('li_' + listItemId).style.display = "none";
}

function addNewItem(list, itemText){
    var date = new Date();
    var id = "" + date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds();

    var listItem = document.createElement('li');
    listItem.id = 'li_' + id;
    listItem.ondblclick = removeItem;

    var checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    //checkbox has date id
    checkBox.id= 'cb_' + id;
    checkBox.onclick = updateItemStatus;

    var span = document.createElement('span');
    //span has date id
    span.id = 'item_' + id;
    span.innerText = itemText;
    span.onclick = renameItem;

    listItem.appendChild(checkBox);
    listItem.appendChild(span);
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