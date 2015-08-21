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



