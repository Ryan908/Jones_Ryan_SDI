/**
 * Created by ryanjones on 8/20/15.
 */


//Pizza party planner calculator.

var pizzaParty= prompt("How many will be attending your pizza party?");
var pizzaPies= prompt("How many pies will you order?");


var totalPies = pizzaParty / pizzaPies;
console.log(totalPies);

if(totalPies >= pizzaPies){
    console.log("You do not have enough pizza for you guests.");
}else if(totalPies > pizzaParty){
    console.log("That's a lot of pizza.");
}else{
    console.log("You have enough pizza.");
}




