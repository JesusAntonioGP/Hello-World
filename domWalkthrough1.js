console.dir(document);

//gives the domain of the webpage
console.log(document.domain);
//gives the url of the webpage
console.log(document.URL);


//in this section which is commented out, we practiced using the document attribute and checking the DOM inspector to confirm our moves.

//this is the document attribute - can access different elements in the tree

// console.log(document.title);

// console.log(document.doctype);

// console.log(document.head);

// console.log(document.body);

// console.log(document.all);

// console.log(document.all[10]);

// document.all[10].textContent = "I just changed the header"


// console.log(document.forms); 

// console.log(document.links);

// console.log(document.images); 
// //////////////////////
//GetElementByID -Returns an element object representing the element whose if property matches the specified string. Quick element access. 

// console.log(document.getElementById('header-title'));


// //you can create an object based on the document function

// let headerTitle = document.getElementById('header-title');

// console.log(headerTitle);

// //we can pass the object into the argument parameter

// headerTitle.textContent = "changed the title again"

// headerTitle.innerText = "hello changed you again"

// headerTitle.style.color = 'orange';


///////////////
////////GetElementByClassName- Returns an array-like object of all child 
///elements which have all of the given class names 

// var items = document.getElementsByClassName('list-group-item');

// console.log(items);

// //we are creating a reference using arrays / placement of the character to make changes


// //here we are making changes to the first three items by referencing the class and the array
// items[1].style.backgroundColor = 'blue'
// items[1].style.fontWeight ='bold';
// items[1].textContent ='skee wee'
// items[1].style.color = 'white';

// items[0].style.backgroundColor = 'black'
// items[0].style.fontWeight ='bold';
// items[0].textContent ='skee wee'
// items[0].style.color = 'white';

// items[2].style.backgroundColor = 'purple'
// items[2].style.fontWeight ='bold';
// items[2].textContent ='skee wee'
// items[2].style.color = 'black';

//here we are displaying the list using arrays, practicing for-loops
// for (let i = 1; i<=10; i++) { 

//     console.log(i);
// }


//here we are creating a list of 20, that skips every other integer
// for (let i = 1; i<=20; i+=2) {

//     console.log(i);

// }


//here we are setting the array to start at 100 and decrement by 2

// for (let i = 100; i >= 0; i-=2) {

//     console.log(i);
// }


//This for loop dispplays the names as the set within the array - iterates through a list of items without writing the same code over and over again
// const myDiamonds = ['Snacky', 'Scary', 'Lily', 'Ittybitty','Pinchie','Lanky','Nibbles','Kibbles'];

// for (let i = 0; i < myDiamonds.length; i++) {

//     console.log(i, myDiamonds[i]);
// }

//in this section we manipulated the dom by calling item i (textContent, color, style)

// for(var i = 0; i < items.length; i++) {

//     items[i].style.backgroundColor = 'grey'
//     items[i].textContent = "Changing the List Items"
//     items[i].style.color = 'white';

//////////////////////////////////////////////

// }

////////////////////////////////////////////////////////
//GetElementsByTagName 

//method of interface returns an HTMLCollection of elements written with a given name tag. 
//this will make the document work in sync with the DOM Tree without having to write the same code again.
//for loops are usually used when the number of iterations is known before entering entering the loop. for loops = shorthands while loops = incrment and test loop variable
// var li = document.getElementsByTagName('li');

// console.log(li);
// console.log(li[1]);

// //we can make changes to the DOM this is part of DOM JS - JS can be altered in the tree.


// li[1].textContent ="Hello 2 Now";
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'green';
// li[1].style.color = 'white'


// // when executing code on a list of items it will use a for loop: (1)for (2)do (3)while(conditional) "do while(condition)"
// for(var i = 0; i < li.length; i++) {

//     li[i].style.backgroundColor = 'lightgrey';
//     li[i].textContent ="I changed the items from the dom"
//     li[i].style.color = 'white';

// }


//////////////////////////////////////////////////////////////////////
///////////////////////////Query Slector- returns the first element within the 
//document that matches the specified selector, or a group of selectors. Null means no matches were found
//Using query selector we are adding a pink border.

// var header = document.querySelector('#main-header');
// header.style.borderBottom ='solid 4px hotpink';
// //to change the inside of the input box we are able to use var input to make the call
// var input = document.querySelector('input');
// input.value = "I just changed the text value in the input box"
// //to change the submit button, we referred to the html page input to call it to make changes 
// var submit = document.querySelector('input[type="submit"]');
// submit.value = "hello button";

// //we are going to call the class to take all of the list group items
// //last child refers to the last element in the called group ^ Node.lastChild

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// //we are able to use a similar technique using ood/even integers the ":nth-child(n)" selector
// //n can be a number, keyword, or a forumula - the :nth-child selector

// // We call the class tag name, using querySelector, and apply :nth-child to make changes

// var otherItem = document.querySelector('.list-group-item:nth-child(2)');

// otherItem.style.color = 'coral';

/////////////////////////////////////////////////////////////////
//////////////Document.querySelectorAll()

//the document method returns a static (not live) NodeList representing a list of the documents
//elements that match the specified group of selectors 

//we are using the class attributes of title to make a change// we need to use the array placement to make the change

var titles = document.querySelectorAll('.title');

console.log(titles);

titles[0].textContent = "hello made a change";

//we want to use the querySelectorAll + the :nth-child to differenciate between even and off list items

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

// we have to create for loop which iterates through the odd numbers 
//if i is less than the length of the 'odd' then the i increments x2 "++"
for (var i = 0; i < odd.length; i++) {

    odd[i].style.backgroundColor = 'grey';
    even[i].style.backgroundColor = 'green';
    even[i].style.color = 'whitesmoke';
    odd[i].style.color = 'whitesmoke';
}
