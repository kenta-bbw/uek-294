const playground = document.getElementById('playground');
const tiles = [];
let tries = 0;

document.addEventListener("DOMContentLoaded", function gameSetup() {
  const cantons = ['ag', 'ar', 'bl', 'fr', 'gl', 'ju', 'ne', 'ow', 'sh', 'sz', 'ti', 'vd', 'zg', 'ai', 'be', 'bs', 'ge', 'gr', 'lu', 'nw', 'sg', 'so', 'tg', 'ur', 'vs', 'zh'];
  const getFlagPath = function (canton) {
    return `img/${canton}.png`;
  }

  cantons.sort(() => Math.random() - 0.5);
  const singleDeck = cantons.slice(0, 10);
  const fullDeck = singleDeck.concat(singleDeck);
  fullDeck.sort(() => Math.random() - 0.5);
  console.log(fullDeck);

  fullDeck.forEach(function (value) {
    const tileButton = document.createElement('button');
    const tileImage = document.createElement('img');
    tileButton.className = "card";
    tileImage.setAttribute('src', getFlagPath(value));
    tileButton.appendChild(tileImage);
    tiles.push(tileButton);
  });

  tiles.forEach(function (tile) {
    tile.addEventListener('click', flip);
    playground.appendChild(tile);
  });
});

const revealedTiles = [];

const flip = (event) => {
  let card = event.currentTarget;
  tries++;

  if (revealedTiles.length >= 2) {
    Array.from(revealedTiles).forEach(otherCard => otherCard.classList.remove("revealed"));
    revealedTiles.length = 0; // Clear the revealedTiles array
  }

  if (!revealedTiles.includes(card)) {
    card.classList.add("revealed");
    revealedTiles.push(card);
  }

  if (revealedTiles.length === 2) {
    checkForMatch();
  }
}

const checkForMatch = () => {
  const [card1, card2] = revealedTiles;
  if (card1.children[0].src === card2.children[0].src) {
    card1.classList.add("found");
    card2.classList.add("found");
    revealedTiles.length = 0;
    checkIfPlayerHasWon();
  }
}

const checkIfPlayerHasWon = () => {
  if (tiles.every(tile => tile.classList.contains("found"))) {
    alert(`You won in ${tries} turns!`);
    tries = 0;
  }
}
