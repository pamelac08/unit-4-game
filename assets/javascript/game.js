$(document).ready(function() {

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


//pushing values to display on page 
$("#computer-random").text(computerRandom);
$("#declaration").text("test");
$("#row2").text("Wins: " + wins);
$("#row3").text("Losses: " + losses);
$("#user-guess").text("Your total score is: " + userInputAdd);

//to display the image on the button
$("#button1").prepend('<img id="button1image" src="assets/images/red_heart.jpeg"/>')
$("#button2").prepend('<img id="button1image" src="assets/images/purple-crystal.jpeg"/>')
$("#button3").prepend('<img id="button1image" src="assets/images/clear_heart.jpeg"/>')
$("#button4").prepend('<img id="button1image" src="assets/images/heart_crystal.jpeg"/>')


function reset() {
    userInputAdd = [];
    computerRandom = [];
    computerSelect();
    $("#computer-random").text(computerRandom);
    $("#user-guess").text("Your total score is: " + userInputAdd);
}



//on click event for button
//capture value of button
//add the value to the user score

$("#button1").on("click", function() {

    $("#declaration").text(" ");

    button1Value = parseInt(button1Value);
    userInputAdd = Number(userInputAdd) + Number(button1Value);
    console.log(userInputAdd);

    $("#user-guess").text("Your total score is: " + userInputAdd);
    checkScore();
})

$("#button2").on("click", function() {

    $("#declaration").text(" ");

    button2Value = parseInt(button2Value);
    userInputAdd = Number(userInputAdd) + Number(button2Value);

    console.log(userInputAdd);
    
    $("#user-guess").text("Your total score is: " + userInputAdd);
    checkScore();
})

$("#button3").on("click", function() {

    $("#declaration").text(" ");

    button3Value = parseInt(button3Value);
    userInputAdd = Number(userInputAdd) + Number(button3Value);

    console.log(userInputAdd);
    
    $("#user-guess").text("Your total score is: " + userInputAdd);
    checkScore();
})

$("#button4").on("click", function() {

    $("#declaration").text(" ");

    button4Value = parseInt(button4Value);
    userInputAdd = Number(userInputAdd) + Number(button4Value);

    console.log(userInputAdd);

    $("#user-guess").text("Your total score is: " + userInputAdd);
    checkScore();
})


//to determine if win/lose

function checkScore() {
if (userInputAdd == computerRandom) {
    wins++;
    reset();
    $("#declaration").text("You Won!");
    $("#row2").text("Wins: " + wins);
    }
else if (userInputAdd > computerRandom ) {
    losses++;
    reset();
    $("#declaration").text("You Lost :(");
    $("#row3").text("Losses: " + losses);
    }
}

})



