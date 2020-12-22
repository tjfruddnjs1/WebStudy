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
    //this == pencilIcon
    var newText = prompt("What should this item be renamed to?");
    //prevent blank
    if(!newText || newText=="" || newText==" ") return false;
    var spanId = this.id.replace('pencilIcon_','');
    var span = document.getElementById('item_'+spanId);

    span.innerText = newText;
}

 function deleteItem(){
     //this == listItem
    var listItemId = this.id.replace('minusIcon_','');
    document.getElementById('li_' + listItemId).style.display = "none";
}

// var todolist = document.getElementById('todolist');
var donelist = document.getElementById('donelist');

function moveItem(){
    //this == span
    var listItemId = this.id.replace('li_','');
    var listItem = document.getElementById('li_' + listItemId);
    var listItemParentId = listItem.parentElement;
    if(listItemParentId == donelist){
        todolist.appendChild(listItem);
    }else{
        donelist.appendChild(listItem);
    }
}

function mouseover(){
    //this == li
    var pencilIconId = this.id.replace('li_','');
    var pencilIcon = document.getElementById('pencilIcon_'+pencilIconId);
    var minusIcon = document.getElementById('minusIcon_' + pencilIconId);

    pencilIcon.style.visibility = 'visible';
    minusIcon.style.visibility = 'visible';
}

function mouseout(){
    //this == li
    var pencilIconId = this.id.replace('li_','');
    var pencilIcon = document.getElementById('pencilIcon_'+pencilIconId);
    var minusIcon = document.getElementById('minusIcon_' + pencilIconId);

    pencilIcon.style.visibility = 'hidden';
    minusIcon.style.visibility = 'hidden';
}


function addNewItem(list, itemText){
    var date = new Date();
    var id = "" + date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds();

    var listItem = document.createElement('li');
    listItem.id = 'li_' + id;
    listItem.ondblclick = moveItem;
    listItem.addEventListener('mouseover',mouseover);
    listItem.addEventListener('mouseout',mouseout);

    var span = document.createElement('span');
    //span has date id
    span.id = 'item_' + id;
    span.innerText = itemText;

    var pencilIcon = document.createElement('i');
    pencilIcon.className = 'fas fa-pencil-alt';
    pencilIcon.id ='pencilIcon_' + id;
    pencilIcon.onclick = renameItem;

    var minusIcon = document.createElement('i');
    minusIcon.className = 'fa fa-minus';
    minusIcon.id = 'minusIcon_' + id;
    minusIcon.onclick = deleteItem;

    listItem.appendChild(span);
    listItem.appendChild(minusIcon);
    listItem.appendChild(pencilIcon);
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