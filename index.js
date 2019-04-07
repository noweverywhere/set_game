const counts = [1, 2, 3];
const fills = ['Empty', 'Partial', 'Solid'];
const glyphShapes = ['Diamond', 'Tilde', 'Oval'];
const colors = ['Red', 'Green', 'Purple'];
const cardDimensions = {
  counts, glyphShapes, colors, fills,
};

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function reduceCallback(acc, dimension) {
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
      name: dimensionName,
      values: cardDimensions[dimensionName],
    }
  )).reduce(reduceCallback, [{}]);
}

const cards = generateDeck();

debugger
console.log(cards);

