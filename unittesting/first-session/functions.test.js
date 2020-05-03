const functions = require('./functions');
// toBe
test('Add 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

// NOT
test('Add 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

// toBeNull
test('Should be null', () => {
    expect(functions.isNull(2, 2)).toBeNull();
});

// toBeFalsy
test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});

// toEqual - to be used on objects and arrays as toBe checks for primitive types
test('User should be Emilija Malogajski object', () => {
    expect(functions.createUser()).toEqual({firstName: 'Emilija', lastName: 'Malogajski'});
});

// Less than and greater than
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Regex
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/i);
});

// Arrays
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
});