
const roll = document.querySelector('#roll');
const member1 = document.querySelector('#member-1');
const member2 = document.querySelector('#member-2');
const member3 = document.querySelector('#member-3');
const winner = document.querySelector('#winner');

roll.addEventListener("click", Score);
function Score(){
    let scoreA = Math.floor(Math.random()*6+1);
    let scoreB = Math.floor(Math.random()*6+1);
    let scoreC = Math.floor(Math.random()*6+1);
    member1.textContent = "Member A : "+scoreA;
    member2.textContent = "Member B : "+scoreB;
    member3.textContent = "Member C : "+scoreC;
    member1.style.color = 'white';
    member2.style.color = 'white';
    member3.style.color = 'white';
    if(scoreA>scoreB && scoreA>scoreC){
        winner.textContent = "Winner is :- "+"Member A";
        document.getElementById("member-1").style.backgroundColor = '#008000';
        if(scoreB===scoreC){
            document.getElementById("member-2").style.backgroundColor = '#0000ff';
            document.getElementById("member-3").style.backgroundColor = '#0000ff';
        }
        else if(scoreB>scoreC){
            document.getElementById("member-2").style.backgroundColor = '#ffff00';
            member2.style.color = 'black';
            document.getElementById("member-3").style.backgroundColor = '#ff0000';
        }
        else{
            document.getElementById("member-3").style.backgroundColor = '#ffff00';
            member3.style.color = 'black';
            document.getElementById("member-2").style.backgroundColor = '#ff0000';
        }
    }
    else if(scoreB>scoreA && scoreB>scoreC){
        winner.textContent = "Winner is :- "+"Member B ";
        document.getElementById("member-2").style.backgroundColor = '#008000';
        if(scoreA===scoreC){
            document.getElementById("member-1").style.backgroundColor = '#0000ff';
            document.getElementById("member-3").style.backgroundColor = '#0000ff';
        }
        else if(scoreA>scoreC){
            document.getElementById("member-1").style.backgroundColor = '#ffff00';
            member1.style.color = 'black';
            document.getElementById("member-3").style.backgroundColor = '#ff0000';
        }
        else{
            document.getElementById("member-3").style.backgroundColor = '#ffff00';
            member3.style.color = 'black';
            document.getElementById("member-1").style.backgroundColor = '#ff0000';
        }
    }
    else if(scoreC>scoreB && scoreC>scoreA){
        winner.textContent = "Winner is :- "+"Member C";
        document.getElementById("member-3").style.backgroundColor = '#008000';
        if(scoreB===scoreA){
            document.getElementById("member-2").style.backgroundColor = '#0000ff';
            document.getElementById("member-1").style.backgroundColor = '#0000ff';
        }
        else if(scoreA>scoreB){
            document.getElementById("member-1").style.backgroundColor = '#ffff00';
            member1.style.color = 'black';
            document.getElementById("member-2").style.backgroundColor = '#ff0000';
        }
        else{
            document.getElementById("member-2").style.backgroundColor = '#ffff00';
            member2.style.color = 'black';
            document.getElementById("member-1").style.backgroundColor = '#ff0000';
        }
    }
    else if(scoreA===scoreB && scoreA===scoreC){
        winner.textContent = "Oh.. No.. :- "+"Tie A & B & C";
        document.getElementById("member-1").style.backgroundColor = '#0000ff';
        document.getElementById("member-2").style.backgroundColor = '#0000ff';
        document.getElementById("member-3").style.backgroundColor = '#0000ff';
    }
    else if(scoreA===scoreB){
        winner.textContent = "Oh.. No.. :- "+"Tie A & B";
        document.getElementById("member-1").style.backgroundColor = '#0000ff';
        document.getElementById("member-2").style.backgroundColor = '#0000ff';
        document.getElementById("member-3").style.backgroundColor = '#ff0000';
    }
    else if(scoreA===scoreC){
        winner.textContent = "Oh.. No.. :- "+"Tie A & C";
        document.getElementById("member-1").style.backgroundColor = '#0000ff';
        document.getElementById("member-3").style.backgroundColor = '#0000ff';
        document.getElementById("member-2").style.backgroundColor = '#ff0000';
    }
    else if(scoreB===scoreC){
        winner.textContent = "Oh.. No.. :- "+"Tie B & C";
        document.getElementById("member-2").style.backgroundColor = '#0000ff';
        document.getElementById("member-3").style.backgroundColor = '#0000ff';
        document.getElementById("member-1").style.backgroundColor = '#ff0000';
    }
    else winner.textContent = "Winner :- "+"Draw";
} 

