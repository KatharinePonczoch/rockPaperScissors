//User Choice, checks for valid input
function getUserChoice(userInput) {
  userInput = userInput.toLowerCase();

  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb" ||
    userInput === "lava" ||
    userInput === "sword"
  ) {
    return userInput;
  } else
    console.log(
      `ERROR! User must choose rock, paper, or scissors. You entered: ${userInput}.`
    );
}

//Computer choice
function getComputerChoice() {
  randNum = Math.floor(Math.random() * 3);
  switch (randNum) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    default:
      return "scissors";
  }
}

//Compare choices to determine winner
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "The game is a tie!";
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer won!";
    } else return "You won!";
  } else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The computer won!";
    } else return "You won!";
  } else if (userChoice === "lava") {
    if (computerChoice === "rock") {
      return "The computer won! Your rock sinks into the lava.";
    } else return "Ok, you win! But run for your life! It's too hot!";
  } else if (userChoice === "bomb") {
    return "You win, of course. Rulebreaker!";
  } else if (userChoice === "sword") {
    if (computerChoice === "rock") {
      return "The computer won!";
    } else return "You won!";
  } else {
    if (computerChoice === "rock") {
      return "The computer won!";
    } else return "You won!";
  }
}
function restart() {
  window.location.reload();
}

//Play Game
function playGame() {
  var userInput = document.getElementById("userChoice").value;
  var userChoice = getUserChoice(userInput);
  if (userChoice) {
    document.getElementById("played").style.display = "block";
    const computerChoice = getComputerChoice();
    document.getElementById("user").innerHTML = "You chose: " + userChoice;
    document.getElementById("computer").innerHTML =
      "Computer chose: " + computerChoice;
    document.getElementById("winner").innerHTML =
      "Who wins? <br/><br/>" + determineWinner(userChoice, computerChoice);
  } else {
    document.getElementById("computer").innerHTML =
      "Restart, you didn't enter a correct value!";
  }
}
