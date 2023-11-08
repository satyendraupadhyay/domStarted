var form = document.getElementById('addForm');
var listItem = document.getElementById('items');

// form submit event
form.addEventListener('submit', addItem);
// delete event
listItem.addEventListener('click', removeItem);

// add Item
function addItem(e){
    e.preventDefault();

    // get input value
    var newItem = document.getElementById('item').value;
    
    // create new li
    var li = document.createElement('li');
    
    // add class name
    li.className = 'list-group-item';

    // append text to li
    li.appendChild(document.createTextNode(newItem));

    // create button
    var deleteBtn = document.createElement('button');

    // add class name
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // append text to button
    deleteBtn.appendChild(document.createTextNode('X'));

    // append delete to list
    li.appendChild(deleteBtn);

    // create edit button
    var editBtn = document.createElement('editbtn');

    // add class name
    editBtn.className = 'btn btn-danger btn-sm float-right delete';

    // append text to button
    editBtn.appendChild(document.createTextNode('Edit'));

    // append to list
    li.appendChild(editBtn);
    
    // append li to list
    listItem.appendChild(li);
}

// remove item
function removeItem(e){
    if (e.target.classList.contains('delete')){
        if (confirm('Are your sure?')){
            var li = e.target.parentElement;
            listItem.removeChild(li);
        }
    }

}


