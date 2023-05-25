// you can write js here
console.log('exo-3');

var playerInput = prompt("Your choice ( rock, paper, scissors) ?");
playerInput = playerInput.toLowerCase();
console.log(playerInput)

function getPlayerChoice(playerInput) {
    if (playerInput === "rock" || playerInput === "paper" || playerInput === "scissors") {
        console.log(playerInput);
        return playerInput;
     } else {
        console.log("Erreur de saisie bg !")
     }
}

getPlayerChoice(playerInput);

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * (3 - 0) + 0 );
    console.log(randomNumber);

    let possibleChoices = ["rock", "paper", "scissors"];

    let choice;

    if (randomNumber == 0) {
        choice = possibleChoices[0];
        console.log(choice);
        return choice;
    }

    if (randomNumber == 1) {
        choice = possibleChoices[1];
        console.log(choice);
        return choice;
    }

    if (randomNumber == 2) {
        choice = possibleChoices[2];
        console.log(choice);
        return choice;
    }
}

getComputerChoice();
