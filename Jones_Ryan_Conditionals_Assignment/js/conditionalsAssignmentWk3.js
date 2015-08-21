/**
 * Created by ryanjones on 8/20/15.
 */


//Pizza party planner calculator.

var pizzaParty= prompt("How many will be attending your pizza party?");
var pizzaPies= prompt("How many pies will you order?");
var notEnough= 1;

var totalPies = pizzaParty / pizzaPies;
console.log(totalPies);

if(pizzaParty < pizzaPies){
    console.log("You do not have enough pizza for you guests.");
}else if(totalPies === notEnough){
    console.log("You may need more pies.");
}else{
    console.log("You have enough pizza.");
}

 if(totalPies<notEnough){
     console.log("That's not enough pizza for one person.");
 }else{
     console.log("That should be enough to satisfy one person.");
 }

(notEnough >= 2) ? console.log("That's a good amount of slices per guest.") : console.log("You should make sure each guest gets another slice.");


