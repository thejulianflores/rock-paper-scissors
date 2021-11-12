/**
* Function that chooses Rock, Paper, or Scissors at random
* and returns that value.
*/
function computerPlay(){
    choices = ['Rock','Paper','Scissors'] 
    return(choices[Math.floor(Math.random()*3)])
}


/**
* Function that accepts two strings and determines the
* winner between the two.
* Arg1: Player's Choice
* Arg2: Computer's Choice
*/
function playRound(player, computer){
    player = player.toUpperCase()
    console.log('Player chose ' + player + ' and computer chose ' + computer)

    if(player==='ROCK'){                // if the player chose ROCK
        if(computer==='Rock'){
            return("tie")
        }
        else if(computer==='Paper'){
            return('lose')
        }
        else{
            return('win')
        }
    }

    if(player==='PAPER'){               // if the player chose PAPER
        if(computer==='Rock'){
            return("win")
        }
        else if(computer==='Paper'){
            return('tie')
        }
        else{
            return('lose')
        }
    }

    if(player==='SCISSORS'){            // if the player chose SCISSORS
        if(computer==='Rock'){
            return("lose")
        }
        else if(computer==='Paper'){
            return('win')
        }
        else{
            return('tie')
        }
    }
}


/**
* Function that determines the winner after 5 rounds
* of play. Returns a string with the winner.
*/
function chooseWinner(playerWins, computerWins){

    if(playerWins > computerWins)
        return('The player won with a total of ' + playerWins + ' wins!')
    else if(computerWins > playerWins)
        return('The computer won with a total of ' + computerWins + ' wins!')
    else  
        return('Tie game with ' + playerWins + ' win each!')
}



/**
* Function that will play 5 games in a row. Determines
* the winner after games are over and returns a string
* with the winner.
*/
function game(){
    let playerWins = 0
    let computerWins = 0

    for (let i = 0; i < 5; i++){
        const computerChoice = computerPlay();
        const playerChoice = prompt('Choose Rock, Paper, or Scissors:');

        outcome = playRound(playerChoice, computerChoice)

        switch(outcome) {
            case 'win':
                playerWins++;
                break;
            case 'lose':
                computerWins++;
                break;
        }
    }

    return(chooseWinner(playerWins,computerWins))
 
}



console.log(game())