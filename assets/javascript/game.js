
// create variables for computer to choose from 

function computerSelect() {
var computerChoices = [];
        for (i=19; i<121; i++){
            computerChoices.push(i);
        }

// computer create random number from array
computerRandom = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerRandom);

    

//randomly assign a number 1-12 to each button
var buttonValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

 button1Value = buttonValues[Math.floor(Math.random() * buttonValues.length)];
console.log(button1Value);

 button2Value = buttonValues[Math.floor(Math.random() * buttonValues.length)];
console.log(button2Value);

 button3Value = buttonValues[Math.floor(Math.random() * buttonValues.length)];
console.log(button3Value);

 button4Value = buttonValues[Math.floor(Math.random() * buttonValues.length)];
console.log(button4Value);


    }

computerSelect ();

var wins = 0;
var losses = 0;
var userInputAdd = [];



//pushing value to display on page
var computerRandomDisplay = document.getElementById("computer-random");
var button1valueDisplay = document.getElementById("button1");
var button2valueDisplay = document.getElementById("button2");
var button3valueDisplay = document.getElementById("button3");
var button4valueDisplay = document.getElementById("button4");
var declarationWinLose = document.getElementById("declaration");
var winsDisplay = document.getElementById("row2");
var lossesDisplay = document.getElementById("row3");
var userInputAddDisplay = document.getElementById("user-guess")

computerRandomDisplay.textContent = computerRandom;
// button1valueDisplay.textContent = button1Value;
// button2valueDisplay.textContent = button2Value;
// button3valueDisplay.textContent = button3Value;
// button4valueDisplay.textContent = button4Value;
winsDisplay.textContent = "Wins: " + wins;
lossesDisplay.textContent = "Losses: " + losses;
userInputAddDisplay.textContent = "Your total score is: " + userInputAdd;


function reset() {
    userInputAdd = [];
    computerRandom = [];
    computerSelect();
    computerRandomDisplay.textContent = computerRandom;
    // button1valueDisplay.textContent = button1Value;
    // button2valueDisplay.textContent = button2Value;
    // button3valueDisplay.textContent = button3Value;
    // button4valueDisplay.textContent = button4Value;
    userInputAddDisplay.textContent = "Your total score is: " + userInputAdd;
    
}




//on click event for button
//capture value of button
//add the value to the user score


$("#button1").on("click", function() {

    declarationWinLose.textContent = " ";

    button1Value = parseInt(button1Value);
    userInputAdd = Number(userInputAdd) + Number(button1Value);

    console.log(userInputAdd);
    console.log(userInputAddDisplay);
    userInputAddDisplay.textContent = "Your total score is: " + userInputAdd;

    checkScore();
})
$("#button2").on("click", function() {

    declarationWinLose.textContent = " ";

    button2Value = parseInt(button2Value);
    userInputAdd = Number(userInputAdd) + Number(button2Value);

    console.log(userInputAdd);
    console.log(userInputAddDisplay);
    userInputAddDisplay.textContent = "Your total score is: " + userInputAdd;

    checkScore();
})
$("#button3").on("click", function() {

    declarationWinLose.textContent = " ";

    button3Value = parseInt(button3Value);
    userInputAdd = Number(userInputAdd) + Number(button3Value);

    console.log(userInputAdd);
    console.log(userInputAddDisplay);
    userInputAddDisplay.textContent = "Your total score is: " + userInputAdd;

    checkScore();
})
$("#button4").on("click", function() {

    declarationWinLose.textContent = " ";

    button4Value = parseInt(button4Value);
    userInputAdd = Number(userInputAdd) + Number(button4Value);

    console.log(userInputAdd);
    console.log(userInputAddDisplay);
    userInputAddDisplay.textContent = "Your total score is: " + userInputAdd;

    checkScore();
})


//to determine if win/lose

function checkScore() {
if (userInputAdd == computerRandom) {
    wins++;
    reset();
    declarationWinLose.textContent = "You Won!!";
    winsDisplay.textContent = "Wins: " + wins;

}
else if (userInputAdd > computerRandom ) {
    losses++;
    reset();
    declarationWinLose.textContent = "You lost :(";
    lossesDisplay.textContent = "Losses: " + losses;
}

}












