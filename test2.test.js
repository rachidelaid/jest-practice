const reverseString = require('./task2');

describe('testing reverseString function', () => {
  it('"delicious" === "suoiciled"', () => {
    expect(reverseString('delicious')).toBe('suoiciled');
  });

  it('"hello" === "olleh"', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  it('"apple" === "elppa"', () => {
    expect(reverseString('apple')).toBe('elppa');
  });
});
