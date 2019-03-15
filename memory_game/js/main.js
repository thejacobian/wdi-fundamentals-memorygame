console.log('Up and running!');

let cards = ['queen', 'queen', 'king', 'king'];
let cardsInPlay = [];

/*let cardOne = cards[2];
cardsInPlay.push(cardOne);
console.log('User flipped ' + cardsInPlay[0]);

let cardTwo = cards[3];
cardsInPlay.push(cardTwo);
console.log('User flipped ' + cardsInPlay[1]);

if (cardsInPlay.length === 2) {
  if(cardsInPlay[0] === cardsInPlay[1]) {
    alert('You found a match!');
  } else {
    alert('Sorry, try again.');
  }
}*/

let checkForMatch = function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert('You found a match!');
  } else {  
    alert('Sorry, try again.');
  }
};

let flipCard = function flipCard(cardId) {
  console.log('User flipped ' + cards[cardId]);
  cardsInPlay.push(cards[cardId]);

  if (cardsInPlay.length === 2) {
    checkForMatch();
  }
};

flipCard(0);
flipCard(2);
