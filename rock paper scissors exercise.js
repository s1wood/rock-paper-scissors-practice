const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('error with input');
    }
}

const getComputerChoice = () => {
  let randomIndex = Math.floor(Math.random() * 3);
  switch (randomIndex) {
    case 0:
    return 'rock';
    break;

    case 1:
    return 'scissors';
    break;

    case 2:
    return 'paper';
    break;
  }
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'This game was a tie';
    }
    if (userChoice === 'bomb') {
      return 'Auto win';
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'You lose';
      } else {
        return 'You won!'
      }
    }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'You lose';
      } else {
        return 'You won!'
      }
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'You lose';
      } else {
        return 'You won!'
      }
    }
}

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('Your choice = ' + userChoice);
  console.log('Computer choice = ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();

