const {
  RED,
  EMPTY,
  PARTIAL,
  SOLID,
  DIAMOND,
  TILDE,
  OVAL,
  ONE,
  TWO,
  THREE,
} = require('../constants');
const {calculateCardNeededToMakeSet} = require('../player');

describe('player', () => {
  describe('calculateCardNeededToMakeSet', () => {
    describe('given a partial set', () => {
      /* eslint-disable comma-spacing, no-multi-spaces */
      const partialSet = [
        {color: RED, glyph: OVAL   , count: ONE  , fill: SOLID},
        {color: RED, glyph: TILDE  , count: TWO  , fill: PARTIAL},
      ];
      const cardNeededToCompleteSet = {
        color: RED, glyph: DIAMOND  , count: THREE  , fill: EMPTY,
      };
      /* eslint-enable comma-spacing, no-multi-spaces */

      it('can calculate what card is needed to make a set', () => {
        expect(
            calculateCardNeededToMakeSet(partialSet)
        ).toEqual(cardNeededToCompleteSet);
      });
    });
  });
});
