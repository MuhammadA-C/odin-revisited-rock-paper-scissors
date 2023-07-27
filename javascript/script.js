/*
Name: Muhammad
Course: The Odin Project - Foundations
Date: 07/26/2023
  
*/
const rockCard = document.querySelector(".cards > :first-child");
const paperCard = document.querySelector(".cards > :nth-child(2)");
const scissorsCard = document.querySelector(".cards > :last-child");
const announceWinner = document.querySelector(".annoucement > :first-child");
const announceRound = document.querySelector(".annoucement > :last-child");
const playerScoreUI = document.querySelector(".player-score > :first-child");
const computerScoreUI = document.querySelector(
  ".computer-score > :first-child"
);
const playersPlayedCard = document.querySelector(".game-board > :first-child");
const computersPlayedCard = document.querySelector(".game-board > :last-child");

const delayInMiliSeconds = 100;
const maxRounds = 5;

let roundNumber = 0;
let playerSelectedCard = 0;
let playerScore = 0;
let computerScore = 0;

rockCard.addEventListener("click", () => {
  playerSelectedCard = 1;

  turnOffRockCardHoverEffect();
  game(playerSelectedCard);
  setTimeout(turnOffRockCardHoverEffect, delayInMiliSeconds);
});

paperCard.addEventListener("click", () => {
  playerSelectedCard = 2;

  turnOffPaperCardHoverEffect();
  game(playerSelectedCard);
  setTimeout(turnOffPaperCardHoverEffect, delayInMiliSeconds);
});

scissorsCard.addEventListener("click", () => {
  playerSelectedCard = 3;

  turnOffScissorsCardHoverEffect();
  game(playerSelectedCard);
  setTimeout(turnOffScissorsCardHoverEffect, delayInMiliSeconds);
});

function getRock() {
  return 1;
}

function getPaper() {
  return 2;
}

function getScissors() {
  return 3;
}

function turnOffRockCardHoverEffect() {
  rockCard.classList.toggle("card-hover-effect");
}

function turnOffPaperCardHoverEffect() {
  paperCard.classList.toggle("card-hover-effect");
}

function turnOffScissorsCardHoverEffect() {
  scissorsCard.classList.toggle("card-hover-effect");
}

function randomNumberGenerator() {
  const maxNumber = 3;
  return Math.floor(Math.random() * maxNumber) + 1;
}

function didYouWin(number1, number2) {
  if (number1 === getRock() && number2 === getScissors()) {
    return true;
  } else if (number1 === getPaper() && number2 === getRock()) {
    return true;
  } else if (number1 === getScissors() && number2 === getPaper()) {
    return true;
  }
  return false;
}

function didYouTie(number1, number2) {
  if (number1 === number2) {
    return true;
  }
  return false;
}

function setPlayedCard(card, number) {
  if (number === getRock()) {
    card.textContent = "Rock";
  } else if (number === getPaper()) {
    card.textContent = "Paper";
  } else if (number === getScissors()) {
    card.textContent = "Scissors";
  } else {
    card.textContent = "";
  }
}

function resetValues() {
  announceWinner.textContent = "Select a Card";
  playerScoreUI.textContent = 0;
  computerScoreUI.textContent = 0;
  playersPlayedCard.textContent = "";
  computersPlayedCard.textContent = "";
  playerScore = 0;
  computerScore = 0;
  roundNumber = 0;
}

function announceGameWinner() {
  if (playerScore > computerScore) {
    alert("Game Over. You Won!");
  } else if (playerScore < computerScore) {
    alert("Game Over. You Lost!");
  } else {
    alert("You Tied");
  }
}

function game(playerSelectedCard) {
  let computerSelectedCard = randomNumberGenerator();

  if (roundNumber >= maxRounds) {
    announceGameWinner();
    resetValues();
    return;
  }

  setPlayedCard(playersPlayedCard, playerSelectedCard);
  setPlayedCard(computersPlayedCard, computerSelectedCard);

  if (didYouWin(playerSelectedCard, computerSelectedCard)) {
    announceWinner.textContent = "You Win!";
    playerScore++;
    playerScoreUI.textContent = playerScore;
    console.log("You Win!");
  } else if (didYouTie(playerSelectedCard, computerSelectedCard)) {
    announceWinner.textContent = "You Tied!";
    console.log("You Tied");
  } else if (didYouWin(computerSelectedCard, playerSelectedCard)) {
    announceWinner.textContent = "You Lose!";
    computerScore++;
    computerScoreUI.textContent = computerScore;
    console.log("You Lose!");
  } else {
    console.log("Error");
  }

  roundNumber++;
}
