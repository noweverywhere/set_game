const RED = 'red';
const GREEN = 'green';
const PURPLE = 'purple';

const EMPTY = 'empty';
const PARTIAL = 'partial';
const SOLID = 'solid';

const DIAMOND = 'diamond';
const TILDE = 'tilde';
const OVAL = 'oval';

const ONE = 'one';
const TWO = 'two';
const THREE = 'three';


const counts = [ONE, TWO, THREE];
const fills = [EMPTY, PARTIAL, SOLID];
const glyphShapes = [DIAMOND, TILDE, OVAL];
const colors = [RED, GREEN, PURPLE];

const cardDimensions = {
  counts, glyphShapes, colors, fills,
};

const cardDimensionNames = Object.keys(cardDimensions).map((dimensionName) => (
  dimensionName.replace(/s$/, '')
));

module.exports = {
  cardDimensions,
  cardDimensionNames,
  RED,
  GREEN,
  PURPLE,
  EMPTY,
  PARTIAL,
  SOLID,
  DIAMOND,
  TILDE,
  OVAL,
  ONE,
  TWO,
  THREE,
};
