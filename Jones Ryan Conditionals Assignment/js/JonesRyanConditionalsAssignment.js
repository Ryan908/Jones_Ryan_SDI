/*
Ryan Jones
SDI Section 02
Conditionals Assignment
09/16/15
 */

//set up files and first variable of maximum capacity of guests allowed on the museum tour.
var tourGuestMax = 10;
//adding variable for second conditional
var captainMax = 5;


var tourWelcome = prompt("Welcome to the museum! \n Would you like to take a free tour?");

if (tourWelcome === "yes"){
    console.log("Great let's make sure your group is prepared and we'll get started.")
}else{
    console.log("Aw, come on it will be fun I promise.");
}

if (tourWelcome === ""){
    console.log("Please give a valid response.");
}
//prompt user for the number of guests.
var guests = prompt("How many guests would you like to invite on your tour?");

//Prompt user whether they have an adequate number of guests and validate entry.
(guests <= tourGuestMax) ? console.log("We can begin the tour!") : console.log("You have too many people.");

if (guests === ""){
    console.log("You must enter a number!");
    alert("You must enter a number!");
}

var captains = prompt("You cannot have a tour group without designating a captain. \n How many captains will you have in your group?");

//calculated booleans using logical operators
if (captains >= captainMax && captains < tourGuestMax ){
    console.log("Ok now we may start the tour.")

}else {
    console.log("But you need more captains.");
}


//validated prompt
if (captains === "") {
    console.log("Please enter how many captains you will need.");
    alert("Please enter how many captains you will need.");
}

/*
I opened the program by welcoming the user. I tested my opening prompt by entering a blank value and I was alerted to enter a value.
Next I entered yes as the value and was able to access the next prompt.I then attempted to make the computer calculate using the greater than and less than operators.
I ran a test by first enter nothing at all. This resulted in a prompt for me to enter a specific value.  I entered 20 which was more than what was required and the computer informed me that
I had enter an amount that was too large. Once entered 9 the computer allowed me to proceed to the next prompt. I then entered a blank value for the number
of captains I would have and was alerted to re-enter the value. After entering a value of 7 I was allowed to start the tour. When I entered 3 the console
informed me that I could start the tour but I needed more captains.
 */