//1. create function for computer choice
let getComputerChoice = () => {
   let choice = "rock paper scissors";
   let toArr = choice.split(" ");
   let randomChoice = Math.floor(Math.random() * toArr.length);

   return toArr[randomChoice];
};
//check this function
//console.log(getComputerChoice());

//2. write a function that plays the game in one loop
let oneGameRound = (playerSelec, computerSelec) => {
   let player = playerSelec.toLowerCase();
   let result;
   //check condition using if/else
   if (
      (player === "paper" && computerSelec === "rock") ||
      (player === "rock" && computerSelec === "scissors") ||
      (player === "scissors" && computerSelec === "paper")
   ) {
      result = `You win! ${player} defeat ${computerSelec}`;
   } else if (player === computerSelec) {
      result = `draw ${player} and ${computerSelec}`;
   } else {
      result = `You lose! ${player} defeated ${computerSelec}`;
   }

   return result;
};
//check this function
//console.log(oneGameRound("rOck", getComputerChoice()));

//3. write a new function called game
let game = () => {
   let userScore = 0;
   let computerScore = 0;

   let checkResult;
   //use loop for run the function 5 times
   for (let i = 0; i < 5; i++) {
      let user = prompt("Choose rock, paper or scissors");
      let computer = getComputerChoice();
      let checkResult = oneGameRound(user, computer);

      //check condition, if user win userScore++, if user lose computerScore++
      if (checkResult.includes("win")) {
         userScore++;
      } else if (checkResult.includes("lose")) {
         computerScore++;
      }

      console.log(checkResult);
   }

   //check the
   let winner =
      userScore > computerScore
         ? "Game won by player"
         : userScore < computerScore
         ? "Game won by computer"
         : "Game is draw";

   console.log(`Player score: ${userScore}`);
   console.log(`Computer score: ${computerScore}`);
   console.log(winner);
};

//4. call the function
game();
