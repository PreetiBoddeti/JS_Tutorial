const startBtn=document.getElementById("start")
const ROCK='ROCK'
const PAPER='PAPER'
const SCISSORS='SCISSORS'
const RESULT_DRAW='DRAW'
const PLAYER_WINS='PLAYER_WINS'
const RESULT_COMPUTER_WINS='COMPUTER_WINS'

DEFAULT_SELECTION='ROCK'

let gameIsRunning=false

const getPlayerChoice=function getPlayerChoice(){
    const selection=prompt(`${ROCK} ${PAPER} ${SCISSORS}` , ' ').toUpperCase()
    if(selection!==ROCK && selection!==PAPER && selection!=SCISSORS){
        alert('INVALID INPUT, Default value is selected!!!')
        return DEFAULT_SELECTION
    }
    return selection
}

const getComputerChoice=function(){
    const randomValue=Math.random()
    if (randomValue < 0.34){
        return ROCK         
    }
    else if(randomValue<0.67){
        return PAPER
    }else{
        return SCISSORS
    }
}
const determineWinner=function(cChoice, pChoice){
    if(cChoice==pChoice){
        return RESULT_DRAW
    }else if(cChoice==ROCK && pChoice== PAPER || cChoice==PAPER && pChoice == SCISSORS || cChoice==SCISSORS && pChoice==ROCK){
        return PLAYER_WINS
    }else{
        return RESULT_COMPUTER_WINS 
    }
}
startBtn.addEventListener('click', function(){   
    if(gameIsRunning){
        return;
    }
    gameIsRunning=true
    console.log('GAME STARTED!!!....')
    const playerselected=getPlayerChoice()
    const computerSelected=getComputerChoice()
    const winner=determineWinner(computerSelected,playerselected)
   //console.log(winner)
   let message=`you picked ${playerselected} and computer picked ${computerSelected}`
   if(winner===RESULT_DRAW){
       message=message+' had a draw'
   }else if(message===PLAYER_WINS){
       message=message+' player wins'
   }else{
       message=message+' computer wins'
   }
   console.log(message)
})