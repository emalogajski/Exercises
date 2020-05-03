const binaryGap = require('./binaryGap.js');

describe('Argument Received', () => {
  it('receives a number N as single argument', () => {
    const res = binaryGap.typeOfN(1.2);
    expect(typeof res).not.toBe('number'); 
  });

  it('the argument received must be greater than zero', () => {
    const res = binaryGap.positiveN(1);
    expect(res).toBeGreaterThan(0); 
  });

});

describe('Convert to Binary String', () => {
  it('should convert N into its binary representation', () => {
    const res = binaryGap.toBinary(255);
    expect(res).toBe("11111111"); 
  });

});

describe('Convert Binary String to Array and Items to Numbers', () => {
    it('should convert binary representation to an array and its items to numbers', () => {
      const res = binaryGap.toArray("11111111");
      expect(res).toEqual([1, 1, 1, 1, 1, 1, 1, 1]); 
    });
  
  });

  describe('Count Longest Streak of 0s', () => {
    it('should count the longest streak of zeros', () => {
      const res = binaryGap.countLongest([1, 1, 1, 0, 0, 0, 1, 0]);
      expect(res).toBe(3); 
    });
  
  });