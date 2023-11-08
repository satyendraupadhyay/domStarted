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
// var headerTitle = document.getElementById('header-title');
// //console.log(headerTitle);
// var header = document.getElementById('main-header');
// //header.style.borderBottom = 'solid 3px black';
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[2].style.backgroundColor = 'green';
//items.style.all.fontWeight = 'bold';

// for (var i  = 0;i < items.length;i++){
//     items[i].style.fontWeight = 'bold';
// }
// var lastItem = document.getElementsByTagName('li');
// // lastItem.style.fontWeight = 'bold';
// console.log('lastItem');

// var secondItem = document.querySelector('.list-group-item:nth-Child(2)');
// secondItem.style.backgroundColor = 'green';

// var thirdItem = document.querySelector('.list-group-item:nth-Child(3)');
// thirdItem.style.color = 'white';

// var secItem = document.querySelectorAll('.list-group-item');
// secItem[1].style.color = 'green';

// var odd = document.querySelectorAll('li:nth-child(odd)');

// for (var i = 0;i < odd.length;i++){
//     odd[i].style.backgroundColor = 'green';
// }

// Traversing the DOM
// var itemList = document.querySelector('#items');

// parentNode Property
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'gray'; 
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = 'gray'; 
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes);

// children
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow'; 

// firstChild
// console.log(itemList.firstChild);
// itemList.firstChild.style.color = 'yellow';

// firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.style.color = 'red';

// lastChild
// console.log(itemList.lastChild);

// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.style.color = "orange";

// nextSibling
// console.log(itemList.nextSibling);

// nextElementSiblings
// console.log(itemList.nextElementSibling);

// previousSiblings
// console.log(itemList.previousSibling);

// previousElementSiblings
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'red';

//create Element
// var newDiv = document.createElement('div');


// // add class
// newDiv.className = 'hello';

// // add ID
// newDiv.id = 'hello1';

// // add Attribute
// newDiv.setAttribute('title', 'hello div');

// // add text
// var addText = document.createTextNode('Hello World');

// // append

// newDiv.appendChild(addText);

// console.log(newDiv);

// ============================================================

// Traversing the DOM
var beforeItem = document.querySelector('#header-title');

// add hello before Item Lister
beforeItem.previousSibling.textContent = 'Hello';

// add hello before list 1
var beforeList = document.querySelector('#items');
beforeList.previousSibling.textContent = 'Hello';



