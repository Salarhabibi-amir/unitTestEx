const capitalize = require('./capitalize');
test('get the string and return it with capitalized format', () => {
    const str = 'amir hussain';
    expect(capitalize(str)).toBe('Amir hussain');
})