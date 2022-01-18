const capitalize = require('./task4');

describe('testing capitalize function', () => {
  it('"delicious" test', () => {
    expect(capitalize('delicious')).toBe('Delicious');
  });

  it('"hello" test', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  it('"apple" test', () => {
    expect(capitalize('apple')).toBe('Apple');
  });
});
