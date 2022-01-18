const stringLength = require('./task1');

describe('testing stringLength function', () => {
  it('"delicious" length', () => {
    expect(stringLength('delicious')).toBe(9);
  });

  it('"sour" length', () => {
    expect(stringLength('sour')).toBe(4);
  });

  it('"beverage" length', () => {
    expect(stringLength('beverage')).toBe(8);
  });

  it('"number" length', () => {
    expect(stringLength('number')).toBe(6);
  });

  it('"" length should through error', () => {
    expect(() => stringLength('')).toThrow(
      'the string should be at least 1 character long and not more than 10',
    );
  });

  it('"asynchronous" length should through error', () => {
    expect(() => stringLength('')).toThrow(
      'the string should be at least 1 character long and not more than 10',
    );
  });
});
