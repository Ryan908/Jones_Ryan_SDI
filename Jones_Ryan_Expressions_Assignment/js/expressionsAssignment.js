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
alert("Your desired weight is "+ total + "lbs.");

var weightLossTime = prompt("How many days will it take you to lose"+ total + "lbs.?");

var dailyWeightLoss = weight2 / weightLossTime;
console.log(dailyWeightLoss);
alert("Your daily weight loss will be "+ dailyWeightLoss + " lbs. per day.");

//Expressing values with an Array

var increaseWeightLoss = [weightLossTime,2];

var newTotal = increaseWeightLoss[0] * increaseWeightLoss[1];
console.log(newTotal);
alert("If you lose 2lbs. per " + weightLossTime+ " days you will lose a total of " +newTotal+ "lbs.!");

//Apply logic using assignment operators
var weight = weight1;
weight -= newTotal;
console.log(weight);
alert("If you lose " +newTotal+ " your total weight will be" +weight+"lbs.\n Wouldn't that be amazing!");

var weightIncrease = weightLossTime;
weightIncrease *= 2;
console.log(weightIncrease);
alert("If you gained 2lbs. per day your weight would be " +weightIncrease+ "lbs. heavier.\n That would suck! :(");