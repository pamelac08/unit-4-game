$(document).ready(function() {


$("#wins-box, #losses-box, #target-score-box, #user-score-box").css("max-width","48%");

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
$("#target-score").text(computerRandom);
$("#declaration").text("test");
$("#wins").text(wins);
$("#losses").text(losses);
$("#user-score").text("0");

//to display the image on the button
$("#crystal-images").append('<button><img id="button1image" src="assets/images/red_heart.jpeg"/></button>')
$("#crystal-images").append('<button><img id="button2image" src="assets/images/purple-crystal.jpeg"/></button>')
$("#crystal-images").append('<button><img id="button3image" src="assets/images/clear_heart.jpeg"/></button>')
$("#crystal-images").append('<button><img id="button4image" src="assets/images/heart_crystal.jpeg"/></button>')


function reset() {
    userInputAdd = [];
    computerRandom = [];
    computerSelect();
    $("#target-score").text(computerRandom);
    $("#user-score").text("0");
}



//on click event for button
//capture value of button
//add the value to the user score

$("#button1image").on("click", function() {

    $("#declaration").text(" ");

    button1Value = parseInt(button1Value);
    userInputAdd = Number(userInputAdd) + Number(button1Value);
    console.log(userInputAdd);

    $("#user-score").text(userInputAdd);
    checkScore();
})

$("#button2image").on("click", function() {

    $("#declaration").text(" ");

    button2Value = parseInt(button2Value);
    userInputAdd = Number(userInputAdd) + Number(button2Value);

    console.log(userInputAdd);
    
    $("#user-score").text(userInputAdd);
    checkScore();
})

$("#button3image").on("click", function() {

    $("#declaration").text(" ");

    button3Value = parseInt(button3Value);
    userInputAdd = Number(userInputAdd) + Number(button3Value);

    console.log(userInputAdd);
    
    $("#user-score").text(userInputAdd);
    checkScore();
})

$("#button4image").on("click", function() {

    $("#declaration").text(" ");

    button4Value = parseInt(button4Value);
    userInputAdd = Number(userInputAdd) + Number(button4Value);

    console.log(userInputAdd);

    $("#user-score").text(userInputAdd);
    checkScore();
})


//to determine if win/lose

function checkScore() {
if (userInputAdd == computerRandom) {
    wins++;
    reset();
    $("#declaration").text("You Won!");
    $("#wins").text(wins);
    }
else if (userInputAdd > computerRandom ) {
    losses++;
    reset();
    $("#declaration").text("You Lost :(");
    $("#losses").text(losses);
    }
}

})



