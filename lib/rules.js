const uniqBy = require('lodash.uniqby');
const {cardDimensionNames} = require('./constants');

function setDimensionIsAllUnique(set, dimension) {
  return uniqBy(set, dimension).length === set.length;
}

function setDimensionIsAllTheSame(set, dimension) {
  return uniqBy(set, dimension).length === 1;
}

function eachDimensionPassesARule(set) {
  return cardDimensionNames.every((dimensionName) => (
    setDimensionIsAllUnique(set, dimensionName) ||
    setDimensionIsAllTheSame(set, dimensionName)
  ));
}

function isASet(cards) {
  return cards.length === 3 && eachDimensionPassesARule(cards);
};

module.exports = {
  isASet,
  setDimensionIsAllUnique,
  setDimensionIsAllTheSame,
  eachDimensionPassesARule,
};
