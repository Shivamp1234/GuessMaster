'use strict'


let originalNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//When the player clicks the check button.
document.querySelector(".check-btn").addEventListener("click", function () {
    const guessedValue = Number(document.querySelector(".guessed-number").value);

    //When there is no input.
    if (!guessedValue) {
        document.querySelector(".message").textContent = "No Number";
    }

    //When the guess is wrong.
    else if (guessedValue !== originalNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = guessedValue > originalNumber ? "Your guess is higher" : "Your guess is lower";
            score = score - 1;
            document.querySelector(".score").textContent = score;
        }
        else {
            document.querySelector(".message").textContent = "You lost the game"
            document.querySelector(".score").textContent = 0;
        }
    }

    //When the player wins.
    else if (guessedValue === originalNumber) {
        document.querySelector(".message").textContent = "🎉 You Won";
        document.querySelector(".original-number").textContent = originalNumber;
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".original-number").style.width = "15rem";
        document.querySelector(".original-number").style.left = "34rem";
        document.querySelector(".original-number").style.fontSize = "7rem";
        let media = window.matchMedia("(max-width: 600px)");
        if (media.matches) {
            document.querySelector(".original-number").style.left = "5.5rem";
        }
        if (score > highScore) {
            highScore = score;
            document.querySelector(".high-score").textContent = highScore;
        }
    }
});

//When the player clicks the play again button.
document.querySelector(".play-again").addEventListener("click", function () {
    originalNumber = Math.floor(Math.random() * 20) + 1;
    score = 20;
    document.querySelector(".original-number").textContent = "?";
    document.querySelector(".guessed-number").value = "";
    document.querySelector(".message").textContent = "Start Guesssing...";
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "#2d2d31";
    document.querySelector(".original-number").style.width = "8rem";
    document.querySelector(".original-number").style.left = "38rem";
    document.querySelector(".original-number").style.fontSize = "5rem";
    let media = window.matchMedia("(max-width: 600px)");
    if (media.matches) {
        document.querySelector(".original-number").style.left = "8.5rem";
        document.querySelector(".play-again").style.backgroundColor = "black";
        document.querySelector(".play-again").style.color = "#f9f9fb";
    }
})