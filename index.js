const choices=["rock","paper","scissors"];
const playerdisplay= document.getElementById("playerdisplay");
const computerdisplay= document.getElementById("computerdisplay");
const resultdisplay= document.getElementById("resultdisplay");
const Playerscoredisplay=document.getElementById("Playerscoredisplay");
const computerscoredisplay=document.getElementById("computerscoredisplay");
let playerscore=0;
let computerscore=0;


function playgame(playchoice){
    const computerchoice =   choices[Math.floor(Math.random()*3)]
    let result="";
    if(playchoice==computerchoice){
       result="It's a Tie!";
    }
    else{
        switch(playchoice){
            case "rock":
                result=(computerchoice==="paper")?"YOU WIN!":"YOU LOOSE!";
                break;
            case "paper":
                result=(computerchoice=="scissors")?"YOU WIN!":"YOU LOOSE!";
                break;
            case "scissors":
                result=(computerchoice=="rock")?"YOU WIN!":"YOU LOOSE!";
                break;

        }
    }
    playerdisplay.textContent=`Player : ${playchoice}`;
    computerdisplay.textContent=`Computer : ${computerchoice}`;
    resultdisplay.textContent=result;
    resultdisplay.classList.remove("greencolor","redcolor");
    switch(result){
        case "YOU WIN!":
            resultdisplay.classList.add("greencolor");
            playerscore++ ;
            break;
        case "YOU LOOSE!":
            resultdisplay.classList.add("redcolor");
            computerscore++ ;
            break;
    }
    Playerscoredisplay.textContent=playerscore;
    computerscoredisplay.textContent=computerscore;
}