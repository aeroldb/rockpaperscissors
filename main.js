let score1 = 0;
let score2 = 0;

function game() {
    let playersChoice = document.
    /*for(let i=0; i<5; i++) {
        //let playersChoice = prompt("Rock, Paper, or Scissors?");
        let computersChoice = computerPlay();    
        //playRound(playersChoice.toLowerCase(), computersChoice.toLowerCase());
    }*/
}

function playRound(playerSelection, computerSelection) {

    //Player's Selection
    if(playerSelection === "rock" && computerSelection === "scissors" 
    || playerSelection === "paper" && computerSelection === "rock"
    || playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You Won! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) 
        + " beats " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1));
        score1++;
    }
    else if(playerSelection === computerSelection) {
        console.log(playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) 
        + " is a tie with " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1));
    }
    else {
        score2++;
        console.log("You Lose! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) 
        + " loses to " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1));
    }

    //Winner Announcement!
    if(score1 > score2) {
        console.log("You Won! Score:\n You: " + score1 + ", Computer: " + score2);
    }
    else {
        console.log("You Lose! Score:\n You: " + score1 + ", Computer: " + score2);
    }
}

const computerPlay = () => {
    const thing = ["Paper", "Rock", "Scissors"];
    return thing[Math.floor(Math.random() * 3)];
};

game();