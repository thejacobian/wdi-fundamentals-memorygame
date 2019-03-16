console.log('Up and running!');

let cards = [
  {
    rank: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png',
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png',
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png',
  },
  {
    rank: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png',
  },
];

/* Fisher-Yates (or Knuth) Shuffle algorithm
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {String}      The first item in the shuffled array
 */
let shuffle = function (array) {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

let cardsInPlay = [];

//shuffle the cards using Fisher-Yates
cards = shuffle(cards);

const checkForMatch = function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert('You found a match!');
  } else {
    alert('Sorry, try again.');
  }
};

const flipCard = function flipCard() {
  const cardId = this.getAttribute('data-id');
  console.log(`User flipped ${cards[cardId].rank}!`);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
  cardsInPlay.push(cards[cardId].rank);

  this.setAttribute('src', cards[cardId].cardImage);
  if (cardsInPlay.length === 2) {
    checkForMatch();
  }
};

const createBoard = function createBoard() {
  for (let i = 0; i < cards.length; i += 1) {
    const cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
};

createBoard();

const resetBoard = function resetBoard() {
  cardsInPlay = [];
  cards = shuffle(cards);

  const oldBoard = document.getElementById('game-board');
  while (oldBoard.lastChild) {
    oldBoard.removeChild(oldBoard.lastChild);
  }
  createBoard();
};

document.getElementById('reset').addEventListener('click', resetBoard);
