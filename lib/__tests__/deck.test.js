const {generateDeck, shuffleCards, sortCards} = require('../deck');

describe('deck', () => {
  describe('generateDeck', () => {
    it('contains 81 cards', () => {
      expect(generateDeck().length).toEqual(81);
    });
  });


  describe('shuffleCards', () => {
    const untouchedDeck = generateDeck();
    const touchingDeck = generateDeck();

    it('mixes up the order of the cards', () => {
      // before shuffle just make sure comparison used works as expected
      expect(touchingDeck).toEqual(untouchedDeck);

      expect(shuffleCards(touchingDeck)).not.toEqual(untouchedDeck);
    });
  });

  describe('sortCards', () => {
    describe('given a complete deck of shuffled cards', () => {
      const unShuffledDeck = generateDeck();
      const shuffledDeck = shuffleCards(generateDeck());

      it('should sort them back to the order of a new deck', () => {
        debugger
        expect(sortCards(shuffledDeck)).toEqual(unShuffledDeck);
      });
    });
  });
});
