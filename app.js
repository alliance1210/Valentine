// var dip = document.querySelector('#container');
// for(let i = 0; i < 12; i++){
//     let para = document.createElement("img");
//     para.src = "Output.png";
//     para.setAttribute('class','mystyle');
//     dip.appendChild(para);
// }

document.addEventListener('DOMContentLoaded', () =>{
//
const cardArray = [
    {
        name: '1',
        img: 'image/1.jpeg'
    },
    {
        name: '1',
        img: 'image/1.jpeg'
    },
    {
        name: '2',
        img: 'image/2.jpeg'
    },
    {
        name: '2',
        img: 'image/2.jpeg'
    },
    {
        name: '3',
        img: 'image/3.jpeg'
    },
    {
        name: '3',
        img: 'image/3.jpeg'
    },
    {
        name: '4',
        img: 'image/4.jpeg'
    },
    {
        name: '4',
        img: 'image/4.jpeg'
    },
    {
        name: '5',
        img: 'image/5.jpeg'
    },
    {
        name: '5',
        img: 'image/5.jpeg'
    },
    {
        name: '6',
        img: 'image/6.jpeg'
    },
    {
        name: '6',
        img: 'image/6.jpeg'
    },

]
var tries = 0;

cardArray.sort(() => 0.5 - Math.random());
var tri = document.getElementById('tri');
tri.innerText = tries;


const container = document.querySelector('#container');

//create board

function createBoard(){
    for(let i = 0;i < cardArray.length; i++){

        var card = document.createElement('img');
        card.setAttribute('src','image/cover.jpeg');
        card.setAttribute('data-id',i);
        card.addEventListener('click', flipcard);
        container.appendChild(card);
    }
}
createBoard();

// flip card
var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];
function flipcard(){
    
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    if(cardsChosenId[0]===cardsChosenId[1]){
        cardsChosenId.pop();
        cardsChosen.pop();
    }
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length == 2){
        tries++;
        tri.innerText = tries;
    
        setTimeout(()=> {
            var cards = document.querySelectorAll('img');
            const option1 = cardsChosenId[0];
            const option2 = cardsChosenId[1];
            if(cardsChosen[0] === cardsChosen[1]){
                
              
                cards[option1].removeEventListener('click',flipcard);
                cards[option2].removeEventListener('click',flipcard);
                cardsWon.push(cardsChosen)
            }else{
                cards[option1].setAttribute('src','image/cover.jpeg');
                cards[option2].setAttribute('src','image/cover.jpeg')
               
            }
            cardsChosen = [];
            cardsChosenId = [];
            if(cardsWon.length === cardArray.length/2){
                alert("You completed in "+ tries+" moves");
            }
            
        },400)
    }
}
})