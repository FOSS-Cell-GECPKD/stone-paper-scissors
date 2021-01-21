// jshint esversion:8
const result = document.getElementById('result');
const yourScore = document.querySelector('.your-score');
const computerScore = document.querySelector('.computer-score');
const btn = document.querySelectorAll('.btn');
const welcome = document.querySelector('.welcome');
const userName = document.getElementById('user-name');
const game = document.querySelector('.game-board');
const name = document.getElementById('name-tag');
const form = document.getElementById('form');
const img = document.querySelectorAll('.img');

let yScore = 0;
let cScore = 0;
let computerChoice = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
        welcome.hidden = true;
        name.innerText = userName.value;
        game.style.display = "block";
    
});

const computerOption = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    
    if(randomNumber === 0){
        computerChoice = 'stone';
    } else if(randomNumber === 1){
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissor';
    }
    return computerChoice;
};



for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', function() {
        for(let j = 0; j < img.length; j++){
            img[j].classList.remove('apply-shake'); 
        }
    let cmp = computerOption();
    if(cmp == this.id){
        for(let j = 0; j < img.length; j++){
            if(img[j].classList.contains(cmp)){
                img[j].classList.toggle('apply-shake');
            }
        }
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
