let messageEl=document.getElementById("message_el");
let cardsEl=document.getElementById("cards_el");
let sumEL=document.getElementById("sum_el");
let startGameBtn=document.getElementById("Startgame");
let newtCardBtn=document.getElementById("newcard");
let sum=0;

haveBlackjack=false;
isAlive=false;

function getRandomCards(){
    let randomcard=Math.floor(Math.random()*13)+1
        if(randomcard>10){
            return 10
        }
        else if(randomcard===1){ return 11}
        else
        {
            return randomcard
        }

}
function startGame(){
        let firstcard=getRandomCards()
        let secondcard=getRandomCards()
        let cardarr=[firstcard,secondcard]
        cardsEl.textContent="Cards: "
        sumEL.textContent="Sum: "
        sum=0
        
        for(let i=0;i<2;i++){
            cardsEl.textContent+=cardarr[i]+" "
            sum+=cardarr[i]
        }
        sumEL.textContent+=sum
        renderGame()
        isAlive=true

    }
    
    
function renderGame(){

    if(sum===21){
        messageEl.textContent="Congratulations, You got Blackjack"
        haveBlackjack=true;
        isAlive=false;
    }
    else if(sum<21){
        messageEl.textContent="Want a new Card?"
    }
    else{
        messageEl.textContent="Oh no, You lost the game"
        isAlive=false

    }
}
function newCard(){
    if(isAlive==true && haveBlackjack==false){
        c1=getRandomCards()
        cardsEl.textContent+=c1+" "
        sum+=c1
        sumEL.textContent="Sum: "+sum
        renderGame()
    }
    
}