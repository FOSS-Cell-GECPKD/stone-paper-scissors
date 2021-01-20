// jshint esversion:6

const stone = document.getElementById('stone');
const scissor = document.getElementById('scissor');
const paper = document.getElementById('paper');
const result = document.getElementById('result');
const score = document.querySelector('.score');
const yourScore = document.querySelector('.your-score');
const computerScore = document.querySelector('.computer-score');
const btn = document.querySelectorAll('.btn');
let yScore = 0;
let cScore = 0;
let computerChoice = '';

function computerOption(){
    let randomNumber = Math.floor(Math.random() * 3);
    
    if(randomNumber === 0){
        computerChoice = 'stone';
    } else if(randomNumber === 1){
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissor';
    }
    return computerChoice;
}

for(var i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', function(){
    let cmp = computerOption();
    console.log(cmp + ' ' + this.id);
    if(cmp == this.id){
        result.innerText = "Tie";
    } else if(cmp == 'stone' && this.id == 'paper'){
        result.innerText = "Paper covers the stone you win.";
        yScore++;
        yourScore.innerText = yScore;
    } else if(cmp == 'stone' && this.id == 'scissor'){
        result.innerText = "Stone break scissor you lose";
        cScore++;
        computerScore.innerText = cScore;
    } 
     else if(cmp == 'paper' && this.id == 'scissor'){
         result.innerText = "Scissor cuts paper you win";
         yScore++;
        yourScore.innerText = yScore;
    }
     else if(cmp == 'paper' && this.id == 'stone'){
        result.innerText = "paper cover stone you lose";
        cScore++;
        computerScore.innerText = cScore;
    }
     else if(cmp == 'scissor' && this.id == 'paper'){
        result.innerText = "sciccor cuts paper you lose";
        cScore++;
        computerScore.innerText = cScore;
    }
     else if(cmp == 'scissor' && this.id == 'stone'){
        result.innerText = "Stone break scissor you win.";
        yScore++;
        yourScore.innerText = yScore;
    }
  });  
}
