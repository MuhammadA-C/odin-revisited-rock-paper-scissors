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
const delayInMiliSeconds = 100;
let selectedCard = "";

rockCard.addEventListener("click", () => {
  turnOffRockCardHoverEffect();
  setTimeout(turnOffRockCardHoverEffect, delayInMiliSeconds);
  selectedCard = "rock";
  console.log("Rock");
});

paperCard.addEventListener("click", () => {
  turnOffPaperCardHoverEffect();
  setTimeout(turnOffPaperCardHoverEffect, delayInMiliSeconds);
  selectedCard = "paper";
  console.log("Paper");
});

scissorsCard.addEventListener("click", () => {
  turnOffScissorsCardHoverEffect();
  setTimeout(turnOffScissorsCardHoverEffect, delayInMiliSeconds);
  selectedCard = "scissors";
  console.log("Scissors");
});

function turnOffRockCardHoverEffect() {
  rockCard.classList.toggle("card-hover-effect");
}

function turnOffPaperCardHoverEffect() {
  paperCard.classList.toggle("card-hover-effect");
}

function turnOffScissorsCardHoverEffect() {
  scissorsCard.classList.toggle("card-hover-effect");
}

function game(selectedCard) {}
