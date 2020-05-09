const app = require('./oddOccurencesInArray.js');

describe('Argument', () => {
    it('should return a non-empty array', () => {
        const res = app.nonEmptyArray([1, 2, 3, 4]);
        expect(res).not.toEqual([]); 
    });
    it('should contain items which are integers between 1 and 1,000,000,000', () => {
        const res = app.properInt([-1, 3, 5]);
        expect(res).toBe('Invalid integer(s) provided.'); 
    });
    it('should contain number of items that is odd', () => {
        const res = app.isOdd([1, 3, 5, 4]);
        expect(res).toBe('The number of items provided must be odd.'); 
    });
});

describe('Logic', () => {
    it('should return the number of times a given value in the array appears', () => {
        const res = app.howManyofEach([9, 3, 9, 3, 9, 7, 9], 9);
        expect(res).toEqual(4); 
    });
    it('should return the number that appears an odd number of times', () => {
        const res = app.finalRes([9, 3, 9, 3, 9, 7, 9]);
        expect(res).toEqual(7); 
    });


});