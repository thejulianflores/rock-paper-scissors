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

    container = document.getElementById('container');
    message = document.createElement('p')
    message.textContent = ('Player chose ' + player + ' and computer chose ' + computer)

    container.appendChild(message)

    if(player==='rock'){                // if the player chose ROCK
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

    if(player==='paper'){               // if the player chose PAPER
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

    if(player==='scissors'){            // if the player chose SCISSORS
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
function chooseWinner(outcome){

    container = document.getElementById('container')
    message = document.createElement('p')

    playerWins = document.getElementById('playerWins')
    computerWins = document.getElementById('computerWins')

    if(outcome==='win'){
        message.textContent = ('The player won!')
        playerWins.textContent = playerWins.textContent.slice(0,14) + (parseInt(playerWins.textContent.slice(14)) + 1)
    }
    else if(outcome==='lose'){
        message.textContent = ('The computer won!')
        computerWins.textContent = computerWins.textContent.slice(0,16) + (parseInt(computerWins.textContent.slice(16)) + 1)

    }
    else  
        message.textContent = ('Tie game!')

    container.appendChild(message)
}



/**
* Function that will play 5 games in a row. Determines
* the winner after games are over and returns a string
* with the winner.
*/
function game(buttonChosen){
    let playerWins = 0
    let computerWins = 0

    container = document.getElementById('container')
    while(container.firstChild){
        container.removeChild(container.firstChild)
    }

    const computerChoice = computerPlay();
    const playerChoice = buttonChosen;
    outcome = playRound(playerChoice, computerChoice)
        
    chooseWinner(outcome)
}


const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

rock.addEventListener('click', function (e){
    setTimeout(() => (game(e.target.id)), 500)
})

paper.addEventListener('click', function (e){
    setTimeout(() => (game(e.target.id)), 500)
})

scissors.addEventListener('click', function (e) {
    setTimeout(() => (game(e.target.id)), 500)
})