const shuffle = require('lodash.shuffle');
const generateDeck = require('./lib/deck');

const cards = generateDeck();
const sample = shuffle(cards).slice(0, 12);

console.log(sample);

