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
//Calling function with arguments
retailCalc(a,b);

//Created function parameters.
function retailCalc ( a,b ){
    retailCalc = a * b;
    console.log(retailCalc);
    return retailCalc

}

//Prompting user to commit values to variables that will be used in second function.
prompt("You should buy some other items to go with your new jeans. \n How about a new shirt, a jacket and a new pair of shoes");

var c= prompt("How much is your shirt?");

while(c===""){
    console.log("Please enter the price of your shirt.");
    c= prompt("Please enter the price of your shirt.");
}

var d = prompt("How much is the jacket?");

while(d=== ""){
    console.log("Please enter the price of the jacket.");
    d = prompt("Please enter the price of the jacket.");
}

var e = prompt("How much are is the pair of shoes that you plan to buy?");

while(e===""){
    console.log("Please enter the price of the shoe you are buying.");
    e = prompt("Please enter the price of the shoe you are buying.");
}
