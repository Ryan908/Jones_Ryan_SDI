
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

 //Validating number of vip guests.
 while(vip==="" || isNaN(vip))

 //Prompting user using if else
 if(vip===""){

     vip=prompt("Please enter the amount of guests in vip.\n Do not leave blank.");

 } else{

     vip=prompt("Please give only numerical responses.");
 }

 var other= prompt("How many other attendees will there be?");

 //Validating number of other guests.
 while(other==="" || isNaN(other))

     //Prompting user using if else
     if(other===""){

         other=prompt("Please enter the amount of other guests that will be attending.\n Do not leave blank.");

     } else{

         other=prompt("Please give only numerical responses.");
     }


 var staff= prompt("How many staff members will be present?");

 //Validating number of staff working.
 while(staff==="" || isNaN(staff))

     //Prompting user using if else
     if(staff===""){

         staff=prompt("Please enter the amount of staff that will be needed.\n Do not leave blank.");

     } else{

         staff=prompt("Please give only numerical responses.");
     }


//Function call including 3 arguments

 var attendance1 = calcAttendance(vip,other,staff);

//Function including parameters
 function calcAttendance(vip,other,staff){

     var total = Number(vip)+Number(other)+Number(staff);


     console.log("You will have"+total+"guests and staff present at this event.")

     return total;
 }

 //anon function
var totalWeight = function (tomatoes, price) {

    var total = tomatoes*price;

    return total;

};

 //anon function call

 var tomatoWeight = totalWeight(8,Math.$2);


 if(tomatoWeight<8){

     console.log("The total cost of your tomatoes is "+tomatoWeight);


 }else{
     console.log("You have too many tomatoes!");

     return tomatoWeight;
 }