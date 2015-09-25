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
    return retailCalc;

}

//Prompting user to commit values to variables that will be used in second function.
alert("You should buy some other items to go with your new jeans. \n How about a new shirt, a jacket and a new pair of shoes");

//First variable
var c= prompt("How much is your shirt?");

//Validated prompt for c variable
while(c===""){
    console.log("Please enter the price of your shirt.");
    c= prompt("Please enter the price of your shirt.");
}

//Second variable
var d = prompt("How much is the jacket?");

//Validated prompt for d variable.
while(d=== ""){
    console.log("Please enter the price of the jacket.");
    d = prompt("Please enter the price of the jacket.");
}

//Third variable
var e = prompt("How much are is the pair of shoes that you plan to buy?");

//Validated prompt for e variable
while(e===""){
    console.log("Please enter the price of the shoe you are buying.");
    e = prompt("Please enter the price of the shoe you are buying.");
}

//Created an anonymous function that will tally up the total spend on three additional items.
var totalCost = function (c,d,e){
    totalCost = Number(c) + Number(d) + Number(e);
    console.log(totalCost);
    return totalCost;
};

//Calling function with arguments
totalCost(c,d,e);

/*
 I tested my calculating program by first entering a value of 29.50 as the cost of the jeans, and a value of 2 for the quantity
 that I wished to buy. This resulted in the console logging a total of 59 as my total. Next I entered three values of 10.95,200.00, and
 60.00. This resulted with the console logging a total of 275.95 (which in this case would reflect $275.95). I checked that all user prompts were
 validated by submitting empty values to confirm that each loop was working.
 */