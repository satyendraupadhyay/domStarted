var form = document.getElementById('addForm');
var listItem = document.getElementById('items');

// form submit event
form.addEventListener('submit', addItem);
// delete event
listItem.addEventListener('click', removeItem);
// filter event
filter.addEventListener('keyup' , filterItem);

// add Item
function addItem(e){
    e.preventDefault();

    // get input value
    var newItem = document.getElementById('item').value;
    var desCrip = document.getElementById('description').value;
    var combine = newItem + ' ' + desCrip;
    
    // create new li
    var li = document.createElement('li');
    
    // add class name
    li.className = 'list-group-item';

    // append text to li
    li.appendChild(document.createTextNode(combine));

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

// filter item
function filterItem(e){
    // convert text to lower case
    var text = e.target.value.toLowerCase();
    
    // get list
    var items = listItem.getElementsByTagName('li');
    
    // convert to array
    Array.from(items).forEach(function(combine){
        var itemName = combine.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1){
            combine.style.display = 'block';

        }
        else {
            combine.style.display = 'none';
        }

    });
}


