// Examine the Document Object
// console.dir(Document)

//console.log(document.URL);
//console.log(document.title);
// document.title = 'Satyendra';
// console.log(document.all);
//console.log(document.forms);
//console.log(document.links);
//console.log(document.images);
//console.log(document.head.innerText)
//console.log(document.head.textContent)
//console.log(document.body.innerText)
//console.log(document.body.textContent)
// all
//console.log(document.all.innerText)
//console.log(document.all.textContent)
// console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
//console.log(headerTitle);
var header = document.getElementById('main-header');
//header.style.borderBottom = 'solid 3px black';
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[2].style.backgroundColor = 'green';
//items.style.all.fontWeight = 'bold';

for (var i  = 0;i < items.length;i++){
    items[i].style.fontWeight = 'bold';
}
