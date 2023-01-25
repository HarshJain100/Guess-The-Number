'use strict';
let x = Math.floor(Math.random()*20 + 1);
let score=20;
let highscore=0;
const displayMessage=function(message){
    document.querySelector('.message').textContent=message;
}
document.querySelector('.check').addEventListener
('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    if(!guess){
        displayMessage('👀 No number!');
    }
    else if(guess==x){
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent=x;
        document.querySelector('.number').style.width='30rem';
        document.querySelector('body').style.backgroundColor='#60b347';
        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }
    }
    else{
        if(score>1){
            displayMessage(guess<x ? '📈 Try Large Number!' : '📉 Try Small Number!');
            score--;
            document.querySelector('.score').textContent=score;
        }
        else{
            displayMessage('😥 You Lost The Game!');
            document.querySelector('body').style.backgroundColor='#DC143C';
            document.querySelector('.score').textContent=0;
        }
    }
});

document.querySelector('.again').addEventListener
('click',function(){
    score=20;
    x = Math.floor(Math.random()*20 + 1);
    displayMessage('🤔 Start guessing...');
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
});