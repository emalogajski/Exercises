const app = require('./app.js');

describe('Rotation of Array', () => {

  describe('Output', () => {
    it('should return an array', () => {
      expect(Array.isArray(app.runChallenge([], 0))).toBeTruthy();
    });
  
    it('should return an array of the same length of the given array', () => {
      expect(app.runChallenge([1, 2, 3, 4, 5], 0).length).toBe(5);
    });
  });

  describe('Arguments', () => {
    it('should fail if the first argument isnt an array', () => {
      try {
        app.runChallenge(10)
      } catch (err) {
        expect(err.message).toBe('First argument: wrong type');
      }
    });

    it('should fail if the second argument isnt an int', () => {
      try {
        app.runChallenge([], '');
      } catch (err) {
        expect(err.message).toBe('Second argument: wrong type');
      }
    });
  });

  describe('Logic', () => {
    it('should rotate the given array 1 time', () => {
      expect(app.rotateArray([1, 2, 3], 1)).toEqual([3, 1, 2]);
    });

    it('should rotate the given array 10 times', () => {
      expect(app.rotateArray([1, 2, 3], 10)).toEqual([3, 1, 2]);
    });
  });
});
