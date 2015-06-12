/*
Ryan Jones
SDI Section #2
GoTo Training Week #2
6/11/2015
 */

//alert("Test to see if connected.");

//Create an sale calculator

//Ask the user what they would like to buy
var item = prompt("What can I get for you today?");

//Use the variable and confirm item for purchase
alert("Great "+item+"!");

//Ask user for quantity
var itemQuantity = prompt("How many do you wish to buy?");

//Console.log the answer to check it
console.log (itemQuantity);

//Calculate their total

//We need to know the cost of the item
//Hardcoded means- Type in a specific value
var itemPrice= 65;

//Figure out total
var total = itemPrice * itemQuantity;

//Alert the user with their age.
alert("Your "+item+" will be "+total+ " dollars");
console.log ("Your "+item+" will be "+total+ " dollars");

var change =  prompt("How much would you like to put toward your bill?");

console.log (change);

//New total is total + more items
//Cast the variable as a number when using +
var newTotal = parseInt(change) - total ;

//Console.log and alert the final values
console.log (newTotal+ " dollars is your change");
