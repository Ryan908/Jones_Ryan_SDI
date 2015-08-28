/**
 * Created by ryanjones on 8/26/15.
 */


//creating variables and prompting user to make a decision between Florida lottery numbers or Powerball numbers.
var lotteryNum = prompt("If you wish to use Florida lottery numbers enter florida?\n If you want the power ball enter powerball.");
var lotteryRandom;
var lotteryRandom2;

//This function is validating the type of lottery numbers the user wishes to use.
// TODO: Create validation function
function lotteryNumValidation(lotteryNum) {




    while (lotteryNum === ""){

        lotteryNum = prompt("Please do not leave blank.\n Which numbers do you wish to use?");

    } if(lotteryNum === "florida"){
        console.log("Great let's play the "+lotteryNum+".");

    }else{
        console.log("Awesome let's play the "+lotteryNum+".");
    }


    return lotteryNum;

}


//function to generate random numbers
function randomLottery(min,max,num){

    //Created two math objects to generate random numbers.
    var randomLotteryNum = [];

    for (var i = 0; i < num; i++) {



        randomLotteryNum[i] = Math.random() * (max - min) + min;
        randomLotteryNum[i] = Math.round(randomLotteryNum[i]);

    }
    return randomLotteryNum;


}


//This section is calling my functions.
// TODO: Create function calls
lotteryNumValidation(lotteryNum);
lotteryRandom = randomLottery(1,53,6);
console.log("Your florida lottery numbers are: " + lotteryRandom+".");


lotteryRandom2 = randomLottery(1,59,5);
console.log("Your power ball lottery numbers are: "+lotteryRandom2+".");
lotteryRandom2 = randomLottery(1,35,1);
console.log("Your PB is "+lotteryRandom2+".");