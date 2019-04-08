const shuffle = require('lodash.shuffle');
const sortBy = require('lodash.sortby');
const {cardDimensions, cardDimensionNames} = require('./constants');

function reduceDimensionsIntoDeck(acc, dimension) {
  const cards = dimension.values.map((value) => (
    acc.map((existingCard) => (
      {[dimension.name]: value, ...existingCard}
    ))
  ));
  return [].concat(...cards);
}

function generateDeck() {
  return Object.keys(cardDimensions).map((dimensionName) => (
    {
      name: dimensionName.replace(/s$/, ''),
      values: cardDimensions[dimensionName],
    }
  )).reduce(reduceDimensionsIntoDeck, [{}]);
}

function shuffleCards(cards) {
  return shuffle(cards);
};

function sortCards(cards) {
  // sort the cards to be in same order as a freshly generated deck of cards
  // this function should be able to sort any number of cards given
  return cardDimensionNames.reduce((accCards, name) => {
    return sortBy(accCards, name)
  }, cards);
}

module.exports = {generateDeck, sortCards, shuffleCards};
