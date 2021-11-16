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

    gameText = document.getElementById('game-text');
    message = document.createElement('p')
    message.classList.add('choices')
    message.textContent = ('Player chose ' + player + ' and computer chose ' + computer.toLowerCase())

    gameText.appendChild(message)

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

    gameText = document.getElementById('game-text')
 

    playerWins = document.getElementById('playerWins')
    computerWins = document.getElementById('computerWins')

    if(outcome==='win'){
        playerWins.textContent = (parseInt(playerWins.textContent) + 1)
        if(playerWins.textContent == 5){
            gameEnd('player');
        }
    }

    else if(outcome==='lose'){
        computerWins.textContent = (parseInt(computerWins.textContent) + 1)
        if(computerWins.textContent == 5){
            gameEnd('computer');
        }
    }

 }


function gameEnd(winner){

    gameText = document.getElementById('game-text')
    message = document.createElement('p')
    message.classList.add('outcome')

    playerWins = parseInt(document.getElementById('playerWins')).textContent
    computerWins = parseInt(document.getElementById('computerWins')).textContent

    if(winner==='player'){
        message.textContent = ('The player won!')
    }
    else if(winner==='computer'){
        message.textContent = ('The computer won!')
    }

    gameText.appendChild(message)
    tryAgain();
}

function pauseBtns() {
    let rockBtn = document.getElementById('rock');
    let paperBtn = document.getElementById('paper')
    let scissorBtn = document.getElementById('scissors')
    let newRock = rockBtn.cloneNode(true)
    let newPaper = paperBtn.cloneNode(true)
    let newScissors = scissorBtn.cloneNode(true)

    rockBtn.parentNode.replaceChild(newRock, rockBtn)
    paperBtn.parentNode.replaceChild(newPaper, paperBtn)
    scissorBtn.parentNode.replaceChild(newScissors, scissorBtn)
}

function tryAgain(){
    
    pauseBtns()

    winnerText = document.getElementById('game-text')
    resetButton = document.createElement('button')
    resetButton.classList.add('reset')
    resetButton.textContent = 'Reset';

    winnerText.appendChild(resetButton)

    resetButton.addEventListener('click', function (e){
        initGame();
    })


}

/**
* Function that will play 5 games in a row. Determines
* the winner after games are over and returns a string
* with the winner.
*/
function game(buttonChosen){




    gameText = document.getElementById('game-text')    //resets the text box
    while(gameText.firstChild){
        gameText.removeChild(gameText.firstChild)
    }

    const computerChoice = computerPlay();
    const playerChoice = buttonChosen;

    outcome = playRound(playerChoice, computerChoice)
    
    if(outcome ==='win') {
        chooseWinner(outcome);
    }
    else if(outcome ==='lose') {
        chooseWinner(outcome);
    }

   
    
}

function initGame(){

    playerWins = document.getElementById('playerWins')
    computerWins = document.getElementById('computerWins')
    message = document.getElementById('game-text')

    message.innerHTML = ''

    
    playerWins.textContent = '0'
    computerWins.textContent = '0'

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
}


initGame();