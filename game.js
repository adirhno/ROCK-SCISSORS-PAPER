/** @format */

let computerSelection = "";
let playerSelection = "";
let computer = 0;
let player = 0;
let count = 1;
const myArray = ["rock", "paper", "scissors"];
let rand = myArray[(Math.random() * myArray.length) | 0];

function playRound(playerSelection, computerSelection) {
  let option = 0;
  if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper") & (computerSelection == "rock")
  ) {
    option = 1;
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (computerSelection == "rock" && playerSelection == "scissors")
  ) {
    option = 2;
  } else if (
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    option = 3;
  }

  switch (option) {
    case 1:
      if (playerSelection == "paper") {
        console.log("player won");
        player++;
      } else {
        console.log("computer won");
        computer++;
      }
      break;

    case 2:
      if (playerSelection == "rock") {
        console.log("player won");
        player++;
      } else {
        console.log("computer won");
        computer++;
      }
      break;

    case 3:
      if (playerSelection == "scissors") {
        console.log("player won");
        player++;
      } else {
        console.log("computer won");
        computer++;
      }
      break;

    default:
      console.log("its a draw");
      break;
  }
}
let names = document.getElementById("names");
let result = document.getElementById("result");
let game = document.getElementById("game");
let playAgain = document.getElementById("playAgain");

game.innerHTML = "ROUND " + count + "!";

document.addEventListener("click", (e) => {
  let pre = e.target.parentNode;
  if (e.target.id == "playAgain" || pre.className == "playerBtn") {
    if (playAgain) {
      playAgain.remove();
    }
    game.innerHTML = "ROUND " + (count + 1) + "!";
    playerSelection = pre.value;
    computerSelection = rand;
    playRound(playerSelection, computerSelection);
    if (e.target.id != "playAgain") {
      names.innerHTML = `<span>PLAYER ${player}</span><span>COMPUTER ${computer}</span>`;
      result.innerHTML = ` <div id="playerRes" class="selectionRes">
        <div id="result1" class='results1'><img src='./images/${playerSelection}2.png' alt=""></div>
      </div>
      <div id="computerRes" class="selectionRes"><div class='results2'><img src='./images/${computerSelection}2.png' alt=""></div></div>
      `;
    }

    count++;

    if (count == 6) {
      if (player > computer) {
        game.innerHTML = "PLAYER IS THE WINNER!";
      } else if (player == computer) {
        game.innerHTML = " ITS DRAW!";
      } else {
        game.innerHTML = " COMPUTER IS THE WINNER!";
      }

      count = 0;
      setTimeout(() => {
        document.getElementById(
          "game"
        ).innerHTML += `<div><button id="playAgain">PLAY AGAIN</button></div>`;
        result.innerHTML = "";
        names.innerHTML = "";

        document.getElementById("playAgain").addEventListener("click", () => {
          names.innerHTML = "";
          player = 0;
          computer = 0;
        });
      }, 2000);
    }
  }
});
