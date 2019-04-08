const {generateDeck, shuffleCards} = require('./lib/deck');

const cards = generateDeck();
const sample = shuffleCards(cards).slice(0, 12);

console.log(sample);

