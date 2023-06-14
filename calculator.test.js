const Calculator = require('./calculator');
const object = new Calculator();

describe('test the add, subtract, and multiply methods', () => {
    test('add method should return the sum of two numbers', () => {
        expect(object.add(2, 3)).toBe(5);
    });
    test('add method should return the sum of two numbers', () => {
        expect(object.substract(4, 3)).toBe(1);
    });
    test('add method should return the sum of two numbers', () => {
        expect(object.multiply(4, 3)).toBe(12);
    });
});