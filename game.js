// declare a variable
var userChoice = prompt("Do you choose rock, paper or scissors?");

// have comuter choose a random number 0-1
var computerChoice = Math.random();

// translate random choice to rock, paper, scissors
if (computerChoice < 0.34) {
  computerChoice = "rock";
} else if(computerChoice <= 0.67) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

// create a function with 2 parameters and then return the winning choice
// declare the function
var compare = function (choice1, choice2){
    if(choice1 === choice2) {
    return "The result is a tie!";
    }
    else if(choice1 === "rock") {
        if(choice2 === "scissors") {
            return "Rock wins!";
        }
        else {
            return "Paper wins!";
        }
    }
    else if(choice1 === "paper") {
        if(choice2 === "rock") {
            return "paper wins!";
        }
        else {
            return "scissors wins!";
        }
    }
    else if(choice1 === "scissors") {
        if(choice2 === "rock") {
            return "rock wins";
        }
        else {
            return "scissors wins";
        }
    }

};

// call the function and pass in userChoice and computerChoice as the 2 arguments - compare(userChoice, computerChoice);
// use document.write to print it 
document.write(compare(userChoice, computerChoice));

            