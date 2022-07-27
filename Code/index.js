
let message = "";
let isAlive=false;
let hasBlackJack;
let messageEl = document.getElementById("message-el");
let Sum = 0;
let playerEl = document.getElementById("player-el");
let cards=[];
let player = {
    name : "Player" ,
    chips : 150
};
function getRandomNumber(){
    let randomNumber = 1 + Math.floor(Math.random() * 13);
    if(randomNumber == 1)
        return 11;
    if(randomNumber < 11)
        return randomNumber;
    return 10;
}

function StartGame(){
    playerEl.textContent = "";
    isAlive = true;
    hasBlackJack = false;
    cards=[]
    cards.push(getRandomNumber()); //random returns random value between [0,1)
    cards.push(getRandomNumber()); //floor is greatest integer function
    Sum = cards[0]+cards[1]
    Checkcards();
    document.getElementById("cards").textContent = "Cards: "+ cards[0]+", "+cards[1];
    document.getElementById("sum").textContent = "Sum: "+Sum;
}
function Checkcards(){
    if(Sum === 21){
        message = "It's a BlackJack";
        hasBlackJack = true;
    }
    else if(Sum < 21){
        message = "Still want a new Card";
    }
    else{
        message = "You're out of game"
        isAlive = false;
    }
    messageEl.textContent = message;
    if(!isAlive || hasBlackJack){
        playerEl.textContent = player.name + " : $"+player.chips;
    }
    
}
    
function NewCard(){
    if(isAlive===true && hasBlackJack===false) {   
    cards.push(getRandomNumber());
    Sum += cards[cards.length -1 ];
    Checkcards();
    document.getElementById("cards").textContent += " ," + cards[cards.length - 1];
    document.getElementById("sum").textContent = "Sum: "+Sum;
    }
    else{
        messageEl.textContent = "No more new cards"
    }
}