const app = require('./missingInteger.js');

describe('Argument', () => {
    it('should be an array', () => {
        const res = app.isArray('Hello');
        expect(res).toEqual('Wrong input type.');
    });
});

describe('Array (confirmed argument)', () => {
    it('should contain integers that are in the range of -1000000000 to 1000000000', () => {
        const res = app.containsIntegers([1, 2, 3.2]);
        expect(res).toBeFalsy();
    });

    it('should contain integers that are in the range of -1000000000 to 1000000000', () => {
        const res = app.containsIntegers([1, 2, 3]);
        expect(res).toBeTruthy();
    });

    it('should contain integers that are in the range of -1000000000 to 1000000000', () => {
        const res = app.containsIntegers([-1000000009, 2, 3]);
        expect(res).toBeFalsy();
    });

    it('should be of length <= 100,000', () => {
        const res = app.arrLength([1, 2, 3]);
        expect(res).toBe(3);
    });
});

describe('Logic', () => {
    it('should return the smallest possible integer greater than 0', () => {
        const res = app.logic([1, 3, 6, 4, 1, 2]);
        expect(res).toBe(5);
    });

    it('should return the smallest possible integer greater than 0', () => {
        const res = app.logic([1, 2, 3]);
        expect(res).toBe(4);
    });

    // it('should return the smallest possible integer greater than 0', () => {
    //     const res = app.logic([−1, −3]);
    //     expect(res).toBe(1);
    // });
});