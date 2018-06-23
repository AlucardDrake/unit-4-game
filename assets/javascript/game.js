var randomNumber = (Math.floor(Math.random() * 50));
var guessNumber = 0;
var number1 = (Math.ceil(Math.random()*5));
var number2 = (Math.ceil(Math.random()*5));
var number3 = (Math.ceil(Math.random()*5));
var number4 = (Math.ceil(Math.random()*5));
var wins = 0;
var losses = 0;
$(document).ready(function() {
    //sets the winNumber equal to the random number target
    $("#winNumber").text(randomNumber);
    //sets the totalScore to 0, or the guess number;
    $("#totalScore").text(guessNumber);
    //sets wins to the win number
    $("#wins").text(wins);
    //sets losses to the loss number
    $("#losses").text(losses);
    //on clicking image #, add 1 to the guessNumber
    $("#image1").on("click", function() {
        guessNumber += number1;
        $("#totalScore").text(guessNumber);
        if (guessNumber === randomNumber){
            wins++;
            $("#wins").text(wins);
            alert("WooHoo!, You won the game!");
            reset();
        } else if (guessNumber > randomNumber) {
            losses++;
            $("#losses").text(losses);
            reset();
        }
    });
    $("#image2").on("click", function() {
        guessNumber += number2;
        $("#totalScore").text(guessNumber);
        if (guessNumber === randomNumber){
            wins++;
            $("#wins").text(wins);
            alert("WooHoo!, You won the game!");
            reset();
        } else if (guessNumber > randomNumber) {
            losses++;
            $("#losses").text(losses);
            reset();
        }
    });
    $("#image3").on("click", function() {
        guessNumber += number3;
        $("#totalScore").text(guessNumber);
        if (guessNumber === randomNumber){
            wins++;
            $("#wins").text(wins);
            alert("WooHoo!, You won the game!");
            reset();
        } else if (guessNumber > randomNumber) {
            losses++;
            $("#losses").text(losses);
            reset();
        }
    });
    $("#image4").on("click", function() {
        guessNumber += number4;
        $("#totalScore").text(guessNumber);
        if (guessNumber === randomNumber){
            wins++;
            $("#wins").text(wins);
            alert("WooHoo!, You won the game!");
            reset();
        } else if (guessNumber > randomNumber) {
            losses++;
            $("#losses").text(losses);
            reset();
        }
    });
    //checks to see if the user has reached the win condition, or loss condition, and resets if either is met
    function reset(){
        randomNumber=Math.floor(Math.random()*50);
        $('#winNumber').text(randomNumber);
        number1= (Math.ceil(Math.random()*5));
        number2= (Math.ceil(Math.random()*5));
        number3= (Math.ceil(Math.random()*5));
        number4= (Math.ceil(Math.random()*5));
        guessNumber= 0;
        $('#totalScore').text(guessNumber);
        } 
  
});