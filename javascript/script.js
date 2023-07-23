/*
Name: Muhammad
Course: The Odin Project - Foundations
Date: 07/20/2023
  
Overview: This is version 1 of the Rock, Paper, and Scissors Project in 
The Odin Project Foundations course. 

For this project you're supposed to create a rock, paper, and scissors console game
where the player can play against the computer. 
*/

game(5);

//Funciton to output "Rock" as a string to minimize the posibility of typos
function getRock() {
  return "Rock";
}

//Funciton to output "Paper" as a string to minimize the posibility of typos
function getPaper() {
  return "Paper";
}

//Funciton to output "Scissors" as a string to minimize the posibility of typos
function getScissors() {
  return "Scissors";
}

//Generates a random number from 1 to x
function generateRandomNumber(upperBound) {
  return Math.floor(Math.random() * upperBound) + 1;
}

//Gets the computer choice by taking a number from 1 to 3 then outputs the correspodning rock, paper, or scissors
function getComputerChoice() {
  switch (generateRandomNumber(3)) {
    case 1:
      return getRock();
    case 2:
      return getPaper();
    case 3:
      return getScissors();
    default:
      return "Error number is out of bounds. Numbers can only be 1 to 3";
  }
}

//Contains the logicx to decide who wins based on rock, paper, scissors
function didYouWin(player1, player2) {
  if (
    player1 === getRock().toLowerCase() &&
    player2 === getScissors().toLowerCase()
  ) {
    return true;
  } else if (
    player1 === getPaper().toLowerCase() &&
    player2 === getRock().toLowerCase()
  ) {
    return true;
  } else if (
    player1 === getScissors().toLowerCase() &&
    player2 === getPaper().toLowerCase()
  ) {
    return true;
  } else {
    return false;
  }
}

//Checks to see if there was a tie
function wasATie(player1, player2) {
  if (
    player1 === getRock().toLowerCase() &&
    player2 === getRock().toLowerCase()
  ) {
    return true;
  } else if (
    player1 === getPaper().toLowerCase() &&
    player2 === getPaper().toLowerCase()
  ) {
    return true;
  } else if (
    player1 === getScissors().toLowerCase() &&
    player2 === getScissors().toLowerCase()
  ) {
    return true;
  } else {
    return false;
  }
}

//Outputs the winning choice. Ex: Rock beats Scissors
function winningChoice(player1, player2) {
  if (
    player1 === getRock().toLowerCase() &&
    player2 === getScissors().toLowerCase()
  ) {
    return `${getRock()} beats ${getScissors()}`;
  }

  if (
    player1 === getPaper().toLowerCase() &&
    player2 === getRock().toLowerCase()
  ) {
    return `${getPaper()} beats ${getRock()}`;
  }

  if (
    player1 === getScissors().toLowerCase() &&
    player2 === getPaper().toLowerCase()
  ) {
    return `${getScissors()} beats ${getPaper()}`;
  }
}

//Plays a single round of rock, paper, scissors
function playRound(computerSelection, playerSelection) {
  let computer = computerSelection.toLowerCase();
  let player = playerSelection.toLowerCase();

  if (didYouWin(computer, player)) {
    return `You Lose! ${winningChoice(computer, player)}`;
  } else if (didYouWin(player, computer)) {
    return `You Win! ${winningChoice(player, computer)}`;
  } else if (wasATie(player, computer)) {
    return `You Tied!`;
  } else {
    return `Error: Incorrect input. Player input was: "${player}", Computer input was: "${computer}"`;
  }
}

//Plays multiple rounds rock, paper, scissors
function game(rounds) {
  let playerWins = 0;
  let playerLosses = 0;
  let ties = 0;
  let computerWins = 0;

  for (let i = 1; i <= rounds; i++) {
    let playerSelection = prompt("Enter rock, papaer, or scissors");

    //Validates users input
    if (!isInputValid(playerSelection)) {
      console.log(`Input: ${playerSelection} is invalid`);
      continue;
    }

    let roundResult = playRound(getComputerChoice(), playerSelection);

    //Keeps track of the score, wins, losses, and ties
    if (roundResult.includes("You Win!")) {
      playerWins++;
    }
    if (roundResult.includes("You Lose!")) {
      playerLosses++;
      computerWins++;
    }
    if (roundResult.includes("You Tied!")) {
      ties++;
    }

    //Outputs the result for the round
    console.log(roundResult);
  }

  whoWonTheGame(playerWins, computerWins);
  endOfGameResults(rounds, playerWins, playerLosses, ties);
}

//Validates the users input
function isInputValid(playerSelection) {
  switch (playerSelection.toLowerCase()) {
    case getRock().toLowerCase():
      return true;
    case getPaper().toLowerCase():
      return true;
    case getScissors().toLowerCase():
      return true;
    default:
      return false;
  }
}

//Announces who won the game
function whoWonTheGame(playerWins, computerWins) {
  if (playerWins > computerWins) {
    console.log(`You Won against the Computer!`);
  } else if (playerWins < computerWins) {
    console.log(`You Lost against the Computer!`);
  } else {
    console.log("You tied against the Computer.");
  }
}

//Outputs the overall results for the game
function endOfGameResults(rounds, playerWins, playerLosses, ties) {
  console.log(
    `Results: Total Rounds = ${rounds}, Wins = ${playerWins}, Losses = ${playerLosses}, Ties = ${ties}`
  );
}
