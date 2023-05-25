// you can write js here
console.log('exo-3');

var playerInput = prompt("Your choice ( rock, paper, scissors) ?");
playerInput = playerInput.toLowerCase();

function getPlayerChoice(playerInput) {
    if (playerInput === "rock" || playerInput === "paper" || playerInput === "scissors") {
        console.log("choix du joueur :", playerInput);
        return playerInput;
     } else {
        console.log("Erreur de saisie bg !")
     }
}

getPlayerChoice(playerInput);

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * (3 - 0) + 0 );
    console.log("resultat du nombre aléatoire :", randomNumber);

    let possibleChoices = ["rock", "paper", "scissors"];

    let choice;

    if (randomNumber == 0) {
        choice = possibleChoices[0];
        // console.log("choix de l'ordi", choice);
        // return choice;
    }

    if (randomNumber == 1) {
        choice = possibleChoices[1];
        // console.log(choice);
        // return choice;
    }

    if (randomNumber == 2) {
        choice = possibleChoices[2];
        // console.log(choice);
        // return choice;
    }
    console.log("choix de l'ordi", choice);
    return choice;
}

getComputerChoice();

function findWinner(playerChoice, computerChoice) {
    let result;

    if (playerChoice == computerChoice) {
        result = "Tied";
        console.log("résultat du match :", result);
        return result;
    } 
    if (playerChoice == "rock") {
        if (computerChoice == "scissors") {
            result = "Won";
            console.log("résultat du match :", result);
            return result;
        }
        result = "Lost";
        console.log("résultat du match :", result);
        return result;
    }

    if (playerChoice == "paper") {
        if (computerChoice == "rock") {
            result = "Won";
            console.log("résultat du match :", result);
            return result;
        }
        result = "Lost"
        console.log("résultat du match :", result);
        return result;
    }

    if (playerChoice == "scissors") {
        if (computerChoice == "paper") {
            result = "Won";
            console.log("résultat du match :", result);
            return result;
        }
        result = "Lost"
        console.log("résultat du match :", result);
        return result;
    }
}

findWinner(getPlayerChoice(playerInput), getComputerChoice());

function playGame() {
    let uChoice = getPlayerChoice(playerInput);
    let computerChoice = getComputerChoice();
    console.log(uChoice);
    console.log(computerChoice);
}

playGame();