/**
 * Created by ryanjones on 8/26/15.
 */


//creating variables and prompting user to make a decision between Florida lottery numbers or Powerball numbers.
//var lotteryNum = prompt("Would you like to use the numbers from the Florida lottery or for the Powerball lottery?");


//This function is validating the type of lottery numbers the user wishes to use.
// TODO: Create validation function
function lotteryNumValidation(fLotteryNum) {




    while (fLotteryNum === ""){

        fLotteryNum = prompt("Please do not leave blank.\n Which numbers do you wish to use?");

    }
    console.log(fLotteryNum+", great choice!")

    return fLotteryNum;

}


//function to generate random numbers
function floridaLottery(){

    var floridaLotteryNum = [];

    for (var i = 0; i < 6; i++) {

        console.log(i);

        floridaLotteryNum[i] = Math.random() * (53 - 1) + 1;
        floridaLotteryNum[i] = Math.round(floridaLotteryNum[i]);

    }
    console.log(floridaLotteryNum);


}


//This section is calling my functions.
// TODO: Create function calls
//lotteryNumValidation(lotteryNum);
floridaLottery();