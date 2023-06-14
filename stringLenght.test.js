const stringLength = require('./stringLenght');

test('returns the correct length of a string', () => {
    const str = 'amir';
    const length = stringLength(str);
    if (length < 1) {
        expect(length).toThrow('String must be at least 1 character long');
    } else if (length > 10) {
        expect(length).toThrow('String must not be longer than 10 characters');
    } else {
        expect(length).toBe(4);
    }
});