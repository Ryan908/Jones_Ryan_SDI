/*
Ryan A. Jones
09-23-15
SDI Section 02
Functions Assignment
 */


//Prompted user to enter value for first variable and validated using while loop.
var a = prompt("How much do the pair of jeans you wish to buy cost?");

while(a===""){
    console.log("Please enter the cost to continue");
    a= prompt("Please enter the cost to continue");
}

//Setup second variable and validated using while loop.
var b = prompt("How many pairs do you wish to buy?");

while(b===""){
    console.log("Please enter how many pairs you wish do buy. \n Do not leave blank.");
    b= prompt("Please enter how many pairs you wish do buy. \n Do not leave blank.");
}
//Calling function
retailCalc(a,b);

//Created function and calculated variable values.
function retailCalc ( a,b ){
    retailCalc = a * b;
    console.log(retailCalc);

}

