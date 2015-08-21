/**
 * Created by ryanjones on 8/20/15.
 */


//Pizza party planner calculator.

var pizzaParty= prompt("How many will be attending your pizza party?");
var pizzaPies= prompt("How many pies will you order?");
var notEnough= 1;
var maxGuest = 50
var maxPies = 25
//Dividing total number of guests by pies being ordered.
var totalPies = pizzaParty / pizzaPies;
console.log(totalPies);

//First conditional statement
if(pizzaParty < pizzaPies){
    console.log("You do not have enough pizza for you guests.");
}else if(totalPies === notEnough){
    console.log("You may need more pies.");
}else{
    console.log("You have enough pizza.");
}

//Second conditional statement
 if(totalPies<notEnough){
     console.log("That's not enough pizza for one person.");
 }else{
     console.log("That should be enough to satisfy one person.");
 }

//Ternary condition
(notEnough >= 2) ? console.log("That's a good amount of slices per guest.") : console.log("You should make sure each guest gets another slice.");

//Utilizing logical operator in calculations

if(maxGuest >= pizzaParty && maxPies >= pizzaPies){
    console.log("You have an acceptable amount of guests and food for the party.");
}else{
    console.log("You need to review your guest list and food.");
}

var beverages = prompt("Your guest will be thirsty.. \n How many would you wish to order for them?");

if(beverages === pizzaParty){
    console.log("You have enough drinks for everyone!")
}else{
    console.log("You need to order more drinks...")
}