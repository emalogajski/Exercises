const app = require('./detectPangram.js');

describe('Detect Pangram', () => {
    it('should return true', () => {
        const res = app.isPangram('The quick brown fox jumps over the lazy dog');
        expect(res).toBeTruthy();
    });

    it('should return false', () => {
        const res = app.isPangram('Emilija is cool');
        expect(res).toBeFalsy();
    });

});

describe('Input', () => {
    it('should inform if input is not a string', () => {
        const res = app.isString(['The quick brown fox jumps over the lazy dog']);
        expect(res).toBe('Wrong input type.');
    });

    it('should be a string', () => {
        const res = app.isString('The quick brown fox jumps over the lazy dog');
        expect(res).toBeTruthy();
    });

});
