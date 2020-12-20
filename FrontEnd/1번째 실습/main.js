//number of item
var totalItems = 0;

function updateItemStatus(){
    var chId = this.id.replace('cb_','');
    var itemText = document.getElementById('item_'+ chId);

    if(this.checked){
        itemText.className = 'checked';
    }else{
        itemText.className = '';
    }
}

function addNewItem(list, itemText){
    totalItems++;

    var listItem = document.createElement('li');
    var checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    //checkbox has different id
    checkBox.id= 'cb_' + totalItems;
    checkBox.onclick = updateItemStatus;

    var span = document.createElement('span');
    //span has diffrent id
    span.id = 'item_' + totalItems;
    span.innerText = itemText;

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