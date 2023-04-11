const prompt = require('prompt-sync')({ sigint: true });
const colour = require('ansi-colors');

let wins = 0, losses = 0, draws = 0;

const gameStart = () => {
    const tools = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3);
    let response = tools[choice];

    const userInput = prompt("Choose your tool (rock, paper, or scissors), or type 'quit' to exit: ");
    if (userInput.toLowerCase() === "quit") {
        console.log("Thanks for playing! Final scores: ", { "wins": wins, "losses": losses, "draws": draws });
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
                    console.log(colour.yellow("Draw"));
                    ++draws;
                    break;
                case "paper":
                    console.log(colour.red("Loss"));
                    ++losses;
                    break;
                case "scissors":
                    console.log(colour.green("Win"));
                    ++wins;
                    break;
            }
            break;
        case "paper":
            switch (response) {
                case "rock":
                    console.log(colour.green("Win"));
                    ++wins;
                    break;
                case "paper":
                    console.log(colour.yellow("Draw"));
                    ++draws;
                    break;
                case "scissors":
                    console.log(colour.red("Loss"));
                    ++losses;
                    break;
            }
            break;
        case "scissors":
            switch (response) {
                case "rock":
                    console.log(colour.red("Loss"));
                    ++losses;
                    break;
                case "paper":
                    console.log(colour.green("Win"));
                    ++wins;
                    break;
                case "scissors":
                    console.log(colour.yellow("Draw"));
                    ++draws;
                    break;
            }
            break;
    }

    console.log("Current scores, ", { "wins": wins, "losses": losses, "draws": draws });
    gameStart();
}

gameStart();



