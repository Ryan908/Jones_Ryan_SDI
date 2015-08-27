/**
 * Created by ryanjones on 8/26/15.
 */


//creating variables and prompting user to make a decision between Florida lottery numbers or Powerball numbers.
var lotteryNum = prompt("Would you like to use the numbers from the Florida lottery or for the Powerball lottery?");


//functions
// TODO: Create validation function
function lotteryNumValidation(fLotteryNum) {




    while (fLotteryNum === ""){

        fLotteryNum = prompt("Please do not leave blank.\n Which numbers do you wish to use?");

    }
    console.log(fLotteryNum+", great choice!")

    return fLotteryNum;

}


//function to generate random numbers



//function calls
// TODO: Create function calls
lotteryNumValidation(lotteryNum);