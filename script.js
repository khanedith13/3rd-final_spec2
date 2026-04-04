let userScore = 0;
let computerScore = 0;
let gameNumber = 1;

let userHistory = {
    rock: 0,
    paper: 0,
    scissor: 0
};

function getComputerChoice(userChoice) {
    const choices = ["rock", "paper", "scissor"];

    // check last user move
    const lastMove = userHistory.lastMove;

    // detect repeat
    const isRepeat = lastMove === userChoice;

    // update last move
    userHistory.lastMove = userChoice;

    // 🎲 RULE: always random if repeat OR "unpredictable behavior"
    if (isRepeat || userHistory[userChoice] >= 2) {
        return choices[Math.floor(Math.random() * 3)];
    }

    // otherwise still random (as per your request = ALWAYS random overall)
    return choices[Math.floor(Math.random() * 3)];
}

