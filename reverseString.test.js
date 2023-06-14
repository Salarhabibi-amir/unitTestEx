const reverseString = require('./reverseString');
test('return the reverse of String', () => {
    const input = "hi";
    const output = reverseString(input);
    expect(output).toBe('ih');
})