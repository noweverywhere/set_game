const {
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
} = require('../constants');

const {
  setDimensionIsAllUnique,
  setDimensionIsAllTheSame,
  eachDimensionPassesARule,
} = require('../rules');

describe('rules', () => {
  describe('setDimensionIsAllUnique', () => {
    describe('the cards are not all unique', () => {
      const mixCards = [{color: RED}, {color: RED}, {color: PURPLE}];
      it('returns false', () => {
        expect(setDimensionIsAllUnique(mixCards, 'color')).toEqual(false);
      });
    });

    describe('the cards are all unique', () => {
      const uniqueCards = [{color: GREEN}, {color: RED}, {color: PURPLE}];
      it('returns false', () => {
        expect(setDimensionIsAllUnique(uniqueCards, 'color')).toEqual(true);
      });
    });
  });

  describe('setDimensionIsAllTheSame', () => {
    describe('the cards are not all unique', () => {
      const mixCards = [{color: RED}, {color: RED}, {color: PURPLE}];
      it('returns false', () => {
        expect(setDimensionIsAllTheSame(mixCards, 'color')).toEqual(false);
      });
    });

    describe('the cards are all unique', () => {
      const uniqueCards = [{color: RED}, {color: RED}, {color: RED}];
      it('returns false', () => {
        expect(setDimensionIsAllTheSame(uniqueCards, 'color')).toEqual(true);
      });
    });
  });

  describe('eachDimensionPassesARule', () => {
    /* eslint-disable comma-spacing, no-multi-spaces */
    const goodSet = [
      {color: RED, glyph: OVAL   , count: ONE  , fill: SOLID},
      {color: RED, glyph: TILDE  , count: TWO  , fill: PARTIAL},
      {color: RED, glyph: DIAMOND, count: THREE, fill: EMPTY},
    ];
    const notASet = [
      {color: RED, glyph: DIAMOND, count: ONE  , fill: SOLID},
      {color: RED, glyph: DIAMOND, count: TWO  , fill: SOLID},
      {color: RED, glyph: DIAMOND, count: THREE, fill: EMPTY},
    ];
    const badSet = [
      {color: RED, glyph: TILDE  , count: ONE  , fill: SOLID},
      {color: RED, glyph: TILDE, count: TWO  , fill: PARTIAL},
      {color: RED, glyph: DIAMOND, count: THREE, fill: EMPTY},
    ];
    /* eslint-enable comma-spacing, no-multi-spaces */

    describe('the cards are not all unique', () => {
      it('', () => {
        expect(eachDimensionPassesARule(notASet)).toEqual(false);
      });
    });

    describe('the cards are not all unique', () => {
      it('', () => {
        expect(eachDimensionPassesARule(notASet)).toEqual(false);
      });
    });

    describe('the cards are not all unique', () => {
      it('', () => {
        expect(eachDimensionPassesARule(badSet)).toEqual(false);
      });
    });

    describe('the cards are all unique', () => {
      it('returns false', () => {
        expect(eachDimensionPassesARule(goodSet, 'color')).toEqual(true);
      });
    });
  });
});
