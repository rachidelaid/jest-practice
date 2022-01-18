const calculator = require('./task3');

describe('testing calculator class', () => {
  it('adding test', () => {
    expect(calculator.add(2, 2)).toBe(4);
  });

  it('subtracting test', () => {
    expect(calculator.subtract(6, 3)).toBe(3);
  });

  it('dividing test', () => {
    expect(calculator.divide(4, 2)).toBe(2);
  });

  it('multiplying test', () => {
    expect(calculator.multiply(5, 5)).toBe(25);
  });
});
