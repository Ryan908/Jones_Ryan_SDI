/**
 * Created by ryanjones on 8/13/15.
 */

//alert ("Testing to see if connected.");

//This will be a weight loss calculator.

//prompt user asking current weight + weight for the previous two months

var weight1 = prompt("How much do you currently weigh?");
var weight2 = prompt("How much weight would you like to lose?");


var total = weight1 - weight2;
console.log(total);
alert("Your desired weight is "+ total + "lbs.")

var weightLossTime = prompt("How many days will it take you to lose"+ total + "lbs.?");

var dailyWeightLoss = weight2 / weightLossTime;
console.log(dailyWeightLoss);
alert("Your daily weight loss will be "+ dailyWeightLoss + " lbs. per day.");



