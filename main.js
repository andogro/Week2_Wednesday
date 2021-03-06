// JavaScript Looping Exercise

// 1. Output each item in the following Array to your console:

console.log("Question1");
var livingRoom = ['couch', 'lamp', 'rug', 'shelf'];
for(i=0; i<livingRoom.length; i++) {
  console.log(livingRoom[i]);
}

// 2. Using a loop, log numbers 22-33 in the console.
console.log("Question2");
for (j=22; j<=33; j++) {
  console.log(j);
};


// 3. Using a similar loop, log numbers 75 to 100, only in increments of five.
console.log("Question3");
for (i=75; i<=100; i=i+5) {
  console.log(i);
}

// 4. Write a while loop that logs "This is how a professional loops." to the console 5 times.
//     Use this as an example:
//        var counter = 0;
//        var num = 2;

//        while (num < 1000) {
//        num += num;
//        counter++;
//        }

//        console.log(counter);

console.log("Question4");
var counter = 1
var pro = "I am an amateur professional"
while (counter <= 5) {
  counter++;
  console.log(pro);
}

// 5. Write a conditional statement to find the largest of the numbers in the array provided.
// set a variable with a really high number then overwrite that number in a loop until it is the highest number
// compare biggest at the time to the variable big
//if largestnum at i is greater than current biggest number that make it equal the new number
//at end of loop console log big

var highest = -Infinity;
var largestNum = [-5, -2, -6, 0, -1, 222];

for (i=0; i != largestNum.length; i++) {
if (largestNum[i] > highest) {highest = largestNum[i]};
}
console.log(highest);


// 6. Separately, use both a for loop and while loop to do the same thing.
//     Print out the sentence "At home, I have _____ cats." Use the number from your counter to fill in the number.
//     The numbers should range from 10 to 100, in increments of 25.


console.log("Question6");
for (i=10; i<=75; i=i+25) {
  console.log ("At home, I have " + i + " cats.");
}

var cats = 10;
var num = 0;
while (cats < 85) {  // condition
  num++;         // statement
  cats=cats+25;
  console.log("At home, I have " + cats + " cats.");
}


// 7. Given the following Array, console log 'Even' if the number is even, 'Even and greater than 10' if the
//    number is even and greater than 10, and 'Odd' if the number is odd.
//    HINT: Google 'remainder operator'

console.log("Question7");
var numArray = [2, 17, 9, 24, 8];
var test = 0;
for (i=0; i<numArray.length; i++) {
if(numArray[i] % 2 === 0 && numArray[i]<10)
{
  console.log('Even');
}
else if(numArray[i] % 2 === 0 && numArray[i]>10)
{
  console.log('Even and greater than 10');
}
else
{
  console.log('Odd');
}
}

// 8. Given the following Array, create variable primeArray with the value [2, 7, 17, 29, 41, 53, 67, 79, 97]
console.log("Question8");

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,];
var primeArray = [];
for(i=0;i<primes.length;i+=3)
{
primeArray.push(primes[i]);
}
  console.log(primeArray);


// 9. Prompt a user to pick either a number or a word. Create a script that alerts the user whether they chose a number or a word.
// Hint: Google 'typeof'
console.log("Question9");
var n = prompt("Write either a number or word");
if (isNaN(n) === false)
   {
   alert("You Picked a Number");
   }
else {
  alert("You picked a Word");
     }

// 10. Write a loop that outputs the following to the console:
// #
// ##
// ###
// ####
// #####
// ######
// #######

console.log("Question10");
var chain = "#";
var chain2 = "";
for (var i =0; i<7; i++) {
chain2 += chain;
console.log(chain2);
}


// RO SHAM BO!
// We're going to create a paper, rock, scissors game that prompts you for your choice and allows the computer to
// randomly choose. You will use an alert to define the winner.


// 11. Use a variable called "human" to prompt the user to type their choice.

var human = prompt("Rock, Paper or Scissors");

// 12. Define an array called "choices" that consists of "paper", "rock", and "scissors".

var choices = ["rock", "paper", "scissors"];

// 13. Define a variable called "computer" and use Math.random to allow the computer to randomly select a number.
//    For reference:
//    Math.random gives you a random number between 0 and 1, which is different each time you call it.

var computer = Math.random();

// 14. Let's start our conditional statement. Start by reassigning the computer variable to "rock" if the random number
//    falls between 0 and .33. Run the code until the console prints out "rock" instead of the number.
//    In English, it will look like this:
//      var computer = my Math.random code here
//       if the number is between 0 and 33
//          computer = "rock"
//       log computer to the console

var human = prompt("Rock, Paper or Scissors");
var choices = ["rock", "paper", "scissors"];
var computer = Math.random();
if (computer<.33)
   {
console.log("rock");
   }
if (computer>.66);
    {
console.log("scissors")
    }
else
    {
console.log("paper")
    }
if(human == "rock")
{
}
if(human == "scissors")
{
}
else
{
}

// 15. Now add the following conditionals to the same statement:
//    If the random number is between .34 and .66, set the computer variable to "paper".
//    If the random number is between .67 and 1, set the computer variable to "scissors". (Who the hell seriously chooses scissors first?)

var human = prompt("Rock, Paper or Scissors");
var choices = ["rock", "paper", "scissors"];
var computer = Math.random();
if (computer<.33)
   {
computer = "rock"
   }
else if (computer<.66)
   {
computer = "scissors"
   }
else
    {
computer = "paper"
    }

// 16. Using both "human", begin another conditional statement. At this time, leave the statements blank.
//    In English, it will look like this:
//      if human is "rock"
//        leave this blank
//      if human is "paper"
//        leave this blank
//      else
//        leave this blank

if (human = "rock" && computer = "rock"); || (human = "scissors" && computer = "scissors"); || (human = "paper" && computer = "paper");
{
console.log("Human" + human + "vs Computer" + computer + "You and the computer are equals")
}
else if (human == "rock" && computer = ""); || (human = "scissors") && (computer = "paper"); || (human = "paper") && (computer = "rock");
{
console.log ("Human" + human + "vs Computer" + computer + "You are smarter than a computer")
}
else
{
console.log ("Human" + human + "vs Computer" + computer + "You lost to the computer again")
}

// 17. Now inside of each condition, we need to compare the "human" variable to the "computer" variable,
//    then print to the console who won the game.

var human = prompt("Rock, Paper or Scissors");
var human = human.toLowerCase();
var choices = ["rock", "paper", "scissors"];
var computer = Math.random();
var switchWay = 0;
if (computer<.33)
   {
computer = choices[0];
   }
else if (computer<.66)
   {
computer = choices[2];
   }
else
    {
computer = choices[1];
   }
console.log(computer + " vs " +  human);

if (computer === human) {
    console.log ("You tied");
}
else if (computer == "rock" && human == "paper") {
console.log ("You defeated the computer");
}
else if (computer == "rock" && human == "scissors") {
 console.log ("The computers have won");
}
else if (computer == "scissors" && human == "rock") {
 console.log ("You defeated the computer");
}
else if (computer == "scissors" && human == "paper") {
 console.log ("The computers have won");
}
else if (computer == "paper" && human == "scissors") {
console.log ("You defeated the computer");
}
else if (computer == "paper" && human == "rock") {
 console.log ("The computers have won");
}
else {console.log ("wtf");}

///



// 18. Give yourself a high five for completing your first javascript game!
// 19. Use the game you made above and rework it using a switch statement.


var human = prompt("Rock, Paper or Scissors");
var human = human.toLowerCase();
var choices = ["rock", "paper", "scissors"];
var computer = Math.random();
var switchWay = 0;
if (computer<.33)
   {
computer = choices[0];
   }
else if (computer<.66)
   {
computer = choices[2];
   }
else
    {
computer = choices[1];
   }
console.log(computer + " vs " +  human);

if (computer === human) {
  switchWay = 1;
}
else if (computer == "rock" && human == "paper") {
  switchWay = 2;
}
else if (computer == "rock" && human == "scissors") {
switchWay = 3; }
else if (computer == "scissors" && human == "rock") {
  switchWay = 2;
}
else if (computer == "scissors" && human == "paper") {
switchWay = 3;
}
else if (computer == "paper" && human == "scissors") {
  switchWay = 2;
}
else if (computer == "paper" && human == "rock") {
switchWay = 3;
}

else {console.log ("wtf");}

switch(switchWay) {
  case 1:
    var message = 'You Tied';
    break;
  case 2:
    var message = 'You defeated the computer';
    break;
  case 3:
    var message = 'The computers have won, resistance is futile';
    break;
  default:
    var message = 'wtf2';
    break;
}

console.log(message);

// 20. What happens if your user enters something other than "rock", "paper", or "scissors?". Change your default case
//     to print a snarky message to the console if the input doesn't match any of the options.

var human = prompt("Rock, Paper or Scissors");
var human = human.toLowerCase();
if ( (human !== 'rock') && (human != 'paper') && (human != 'scissors'))
{
console.log("this is rock, paper, scissors, not " + human + ", paper, scissors.");
}


// HEDS ER TALES?
// 21. Use the following variable for your coin flip action:
       var coin = Math.floor(Math.random() * 2);
//     We're using Math.random again, along with Math.floor.
//     Remember, Math.random gives you a random number between 0 and 1.
//     Calling Math.floor on that number will truncate the decimal, and give you a
//     random number within the bounds of your array. (In this case, our array will only contain two items.)
// 22. Use a while loop to keep flipping the coin until you get tails.

var coin = Math.floor(Math.random() * 2);
var win =["heads","tails"];
while (coin === 0) {
console.log(win[coin] + " Keep on flippin");
var coin = Math.floor(Math.random() * 2);
}
console.log(win[coin] + " Got yer tails");

// 23. FIZZ BUZZ
// Write a program that uses console.log to print each number up to 100, with a couple exceptions...
// If the number is divisible by 3, print "Fizz" instead of the number.
// If the number is divisible by 5, print "Buzz" instead of the number.
// If the number is divisible by both 3 and 5, print "FizzBuzz" instead of the number.

var num = 0;
for(i=0; i<=99; i++)
{
  num = i+1;
  if (num/3 % 1 === 0 && num/5 % 1 !== 0) {
  num = "fizz";
  }
  else if (num/5 % 1 === 0 && num/3 % 1 !== 0) {
  num = "buzz";
  }
  else if (num/3 % 1 === 0 && num/5 % 1 === 0) {
  num = "fizzbuzz";
  }
    console.log(num);
}

// CHESS BOARD
// 24. Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
// At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

//Passing this string to console.log should show something like this:

var board = ["#", " "];
for (i=0;i<4;i++) {
var row1 = (board[0] + board[1]).repeat(4);
var row2 = (board[1] + board[0]).repeat(4);
console.log( row1 + "\n" + row2);
}

// When you have a program that generates this pattern, define a variable size = 8 and change the program
// sso that it works for any size, outputting a grid of the given width and height.

// THAR BE DACHSHUNDS
// We're going to slay some badass dachshunds.
// 25. Start by using the following variables:


// 26. Create a while loop that runs as long as "slaying" is equal to true. For now, set "slaying" to false
//     inside of the body of the loop so we don't break stuff with an infinite loop.

var slaying = true;
var youHit = Math.floor(Math.random() * 2); // = 0 or 1
var damageThisRound = Math.floor(Math.random()*5 + 1); // = 1-5
var totalDamage = 0;
var counter = 0;

while (slaying == true)
{
if (youHit == 1){ console.log("Congratulations, Hot Dogs Tonight!"); }
if (youHit == 0) {console.log("The Dog has Won, go to your corner!"); }
slaying = false;
}
console.log("End");

// 27. Inside of your while loop, create a conditional statement. If "youHit" is 1 (which is true),
//     log to the console a congratulatory message about injuring the poor dog.
//     If "youHit" is 0 (which is false), log to the console a message about that bastard beating you.
//     The "slaying" variable should be set to false here to end the loop.

var slaying = true;
var youHit = Math.floor(Math.random() * 2); // = 0 or 1
var damageThisRound = Math.floor(Math.random()*5 + 1); // = 1 through 5
var totalDamage = 0;
var counter = 0;

while (slaying == true)
{
if (youHit == 1){
    totalDamage = (totalDamage + damageThisRound);
    console.log("Congratulations, You hit a poor defenseless dog!");
    console.log(totalDamage);
    if (totalDamage >= 4){
        slaying = false;        
         }
    }
else if (youHit == 0) {console.log("Dog hit you, go to your corner!"); }
var youHit = Math.floor(Math.random() * 2);
counter++;
console.log(slaying);
}
console.log("Congrats, you have defeated the dog from hell.  It took you " + counter + " tries.");

// 28. Inside of the first branch of our conditional statement, after the console.log statement,
//     set "totalDamage" to totalDamage plus damageThisRound.
// 29. Below that, begin a new conditional statement. If you hit the dachshund 4 times, you killed him! Log a success message to the console.
//     If the totalDamage is less than 4, set the youHit variable to the same expression we used at the top.
//     This will begin the loop again.
// 30. Play until you win!
