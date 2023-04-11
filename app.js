const prompt = require('prompt-sync')({ sigint: true });
const colour = require('ansi-colors');

let wins = 0, losses = 0, draws = 0;

const gameStart = () => {
    const tools = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3);
    let response = tools[choice];

    const userInput = prompt("Choose your tool (rock, paper, or scissors), or type 'quit' to exit: ");
    if (userInput.toLowerCase() === "quit") {
        console.log("Thanks for playing! Final scores: ", { "Wins": wins, "Losses": losses, "Draws": draws });
        return;
    }

    if (!tools.includes(userInput.toLowerCase())) {
        console.log("Invalid input, please try again.");
        gameStart();
        return;
    }

    switch (userInput.toLowerCase()) {
        case "rock":
            switch (response) {
                case "rock":
                    console.log(colour.yellow("I chose Rock too: it's a Draw!"));
                    ++draws;
                    break;
                case "paper":
                    console.log(colour.red("I chose Paper: you Lost!"));
                    ++losses;
                    break;
                case "scissors":
                    console.log(colour.green("I chose Scissors: you Win!"));
                    ++wins;
                    break;
            }
            break;
        case "paper":
            switch (response) {
                case "rock":
                    console.log(colour.green("I chose Rock: you Win!"));
                    ++wins;
                    break;
                case "paper":
                    console.log(colour.yellow("I chose Paper too: its a Draw!"));
                    ++draws;
                    break;
                case "scissors":
                    console.log(colour.red("I chose Scissors: you Lost!"));
                    ++losses;
                    break;
            }
            break;
        case "scissors":
            switch (response) {
                case "rock":
                    console.log(colour.red("I chose Rock: you Lost!"));
                    ++losses;
                    break;
                case "paper":
                    console.log(colour.green("I chose Paper: you Win!"));
                    ++wins;
                    break;
                case "scissors":
                    console.log(colour.yellow("I chose Scissors too: its a Draw!"));
                    ++draws;
                    break;
            }
            break;
    }

    console.log("Current scores, ", { "Wins": wins, "Losses": losses, "Draws": draws });
    gameStart();
}

gameStart();



