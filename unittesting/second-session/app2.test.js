const app = require('./app2.js');

describe('Frogs', () => {
  describe('Args', () => {
    it('should receive 3 args', () => {
      expect(app.runChallenge(1)).toBeFalsy();
      expect(app.runChallenge(1, 2)).toBeFalsy();
      expect(typeof app.runChallenge(1, 2, 4)).toEqual('number');
    });

    it('the current location must be smaller than then next location', () => {
      expect(app.runChallenge(2, 1, 0)).toBeFalsy();
      expect(typeof app.runChallenge(1, 2, 0)).toEqual('number');
    });

    it('jump distance should be greater or equal than 0', () => {
      expect(app.runChallenge(1, 2, -1)).toBeFalsy();
      expect(typeof app.runChallenge(1, 2, 0)).toEqual('number');
      expect(typeof app.runChallenge(1, 2, 1)).toEqual('number');
    });
  });

  describe('Logic', () => {
    it('should find the n of jumps', () => {
      expect(app.runChallenge(1, 2, 1)).toEqual(1);
      expect(app.runChallenge(1, 3, 1)).toEqual(2);
      expect(app.runChallenge(10, 20, 3)).toEqual(4);
    });
  });
});
