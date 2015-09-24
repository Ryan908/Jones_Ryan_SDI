/*
Ryan A. Jones
09-23-15
SDI Section 02
Functions Assignment
 */


//Prompted user to enter value for first variable and validated using while loop.
var a = prompt("How do the pair of jeans you wish to buy cost?");

while(a===""){
    console.log("Please enter the cost to continue");
    a= prompt("Please enter the cost to continue");
}