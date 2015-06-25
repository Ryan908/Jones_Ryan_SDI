
 /*
Ryan Jones
SDI Section #2
Jones_Ryan_Functions_Assignment
6-24-15
 */

 //alert("This is a test")

//Asking user to confirm number of guests that will be attending their event.
//Prompt requesting on number of vip reservations,other attendees and staff.
 var vip= prompt("How many reservations do you have for vip?");
 var other= prompt("How many other attendees will there be?");
 var staff= prompt("How many staff members will be present?");


//Function call including 3 arguments

 var attendance1 = calcAttendance(vip,other,staff);

//Function including parameters
 function calcAttendance(vip,other,staff){

     var total = Number(vip)+Number(other)+Number(staff);

     return total;

     console.log("You will have"+total+"guests and staff present at this event.")

 }
