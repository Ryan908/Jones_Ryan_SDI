/*
Ryan Jones
SDI Section #2
GoTo Training Week #2
6/10/2015
 */

//alert("Test to see if connected.");

//Create an age calculator

//Ask the user for their name
var name = prompt("Let's figure out how old you are!\n Please type in your name");

//Use the variable and say hello
alert("Welcome "+name+"!");

//Ask the user what year they were born
var yearBorn = prompt("What year were you born?");

//Console.log the answer to check it
console.log (yearBorn);

//Calculate their age

//We need to know the current year
//Hardcoded means- Type in a specific value
var currentYear=2015;

//Figure out age
var age = currentYear - yearBorn;

//Alert the user with their age.
alert(name+ " You are "+age+" years old");