console.log("hello world");

//we are going to create a variable and use an operator within the if condition 

// structure: if(condition) [block] 


// let randomNumer = Math.random(); //0.0-1

// if (randomNumer < 0.50) {

//     console.log("Condition Was Met");
//     console.log(randomNumer); 

// }

//if larger than 0.5 then display "Condition was met"
// if (randomNumer >= 0.5) { 

//     console.log('Condition Was Met');
//     console.log(randomNumer);

// }

//if (condition is not met) {block} else if (condition) {   [block]  }

// const dayOfWeek = 'saturday';

// if (dayOfWeek === 'monday') {

//     console.log("yay its monday"); 

// } else if (dayOfWeek === 'friday') {

//     console.log("yay its friday"); 

// } else if (dayOfWeek === 'saturday') {

//     console.log("you have the correct day from the variable");

// }

//this should populate with "correct day from variable" because it has passed the arguement parameter
//this is an example of an if else condition ^^

//here we will create an application that takes in a number and whatever the number is will be run 
//under several if conditions, and whichever matches the condition will show an output

// const age = prompt("Enter an age");

// if (age < 5) { 

//     console.log("Hey you are a baby");

// } else if (age < 10) {

//     console.log("Hey you are just a kid");
// } else if (age < 35) {

//     console.log("You are getting older")
// } 
// //an else statement is when first two conditions fail
// else {

//     console.log("you are over the age of 35");
// }

//if, else if, "switch statement" switch (x ) case x, case y, case z - these make the code more readable
//switch statement: allows the value of a variable/expression to change the control flow of program execution via search and map
//aka case, select, or inspect in other c languages 

// const fruit = 'Peach';

// switch (fruit) {

//     case 'Oranges':
//         console.log("Oranges are $0.59 a pound"); 
//         break;
//     case 'Bananas':
//         console.log("Oranges are $0.59 a pound");
//         break;
//     case 'Avocados':
//         console.log("Oranges are $0.59 a pound");
//         break;
//     case 'Papayas':
//          console.log("Oranges are $0.59 a pound");
//         break;
//     default: 
//     console.log("Last resort if all conditions fail");

// }

//if all conditions fail we can write a default (equivalent of else)
//we need to write a break statement to stop the execution of code
//the break statement breaks out of a switch or loop
//indexOf() method returns the position of the first occurance of a value in a string
//this method returns -1 if the value is not found + will be case sensitive

// const password = prompt("Enter in a new password");

// if (password.length >= 6) {
//     if (password.indexOf(' ') === -1) {
//         console.log("Valid Password");
//     } else {
//         console.log("Password Cant Have Spaces");
//     }
// } else {
//     console.log("Password is too short");
// }

///////////////////////////////////////Functions

//functions: a set of statements that performs a task or calculates a value, but for a procedure
// to qualify as a function, it should take some input and return an output where there is some
//obvious relationship between input/output. 
//to use a function you must define it somewhere in the scope from which you wish yo call it. 

//Function declarations: name function, list of parameter to the function in parentheses and separated by commas 
//the JS statements that define the function enclosed in curly brackets {...}

function singSong() {

    console.log("DO");
    console.log("RE");
    console.log("ME");

}
//we must call the variable as shown below
 singSong()
 singSong()
 singSong()
// here we create a variable - we will use template literals (strings) delimited with backtick "`"
//this will allow multi-line strings, for string interpolation with embedded expressions, and for 
//special constructs called tagged templates
function greet(firstName) {
//placeholders are delimited by ${expression}
    console.log(`Hey There, ${firstName}`)
}

greet('Boomer');

function greet1(firstName,lastName) {
        console.log(`Hey There, ${firstName} ${lastName}`)
    }
    
    greet1('Boomer','Sooner');
