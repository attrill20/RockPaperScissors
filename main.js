// make a rock, paper or scissors game ✅
// 1. get the user's choice from a text input button 
// 2. get the computer's choice from a random number generator
// 3. compare the two choices and determine a winner
// 4. display the results to the user
// 5. keep score
// 6. display the score to the user✅
// 7. play again

// starting variables

const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

// confirm code

confirm("Do you want to play a game?");
const playerName = prompt("What is your name?");
alert(`Welcome ${playerName}!`);

// rename Player: as a var
// change the .textContent of that var to ${playerName}

document.getElementById("player-name").textContent = `${playerName} : `;
console.log(playerName);

// defining buttons and other scores

const buttons = document.querySelectorAll(".btn");
const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");
const resultText = document.getElementById("result-text");
const playAgainButton = document.getElementById("play-again");

// adding event listeners to buttons

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.id;
    playRound(playerChoice);
  });
});
playAgainButton.addEventListener("click", () => {
  resetGame();
});

//when either the computer or player gets to 5, the game ends
//if player score === 5 or computer score === 5, then display the winner 

if (playerScore === 5) {
  alert = "You win the game!";
  playAgainButton.style.display = "block";
} else if (computerScore === 5) {
  alert = "Computer wins the game!";
  playAgainButton.style.display = "block";
} else {
  resultText.style.display = "block";
}
function playRound(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  if (playerChoice === computerChoice) {
    resultText.textContent = "It's a tie!";

    // display computer choice and result in alert

    alert(`It's a tie - Computer chose ${computerChoice}`);
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    playerScoreSpan.textContent = playerScore;
    resultText.textContent = "You win!";

  // display computer choice and result in alert

  alert(`You win! - Computer chose ${computerChoice}`);
  } else {
    computerScore++;
    computerScoreSpan.textContent = computerScore;
    resultText.textContent = "Computer wins!";

    // display computer choice and result in alert

      alert(`Computer wins - Computer chose ${computerChoice}`);
  }
//  updateScoreboard();
}
// function to update scoreboard
// function updateScoreboard() {
//   if (playerScore === 5) {
//     resultText.textContent = "You win the game!";
//     playAgainButton.style.display = "block";
//   } else if (computerScore === 5) {
//     resultText.textContent = "Computer wins the game!";
//     playAgainButton.style.display = "block";
//   } else {
//     resultText.style.display = "block";
//   }
// }

// function to reset game

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreSpan.textContent = "0";
  computerScoreSpan.textContent = "0";
  resultText.style.display = "none";
  playAgainButton.style.display = "none";
}