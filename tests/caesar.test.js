const caesar = require('../src/caesar.js');

test('shifts lowercase letters by 1', () => {
    expect(caesar('abc', 1)).toBe('bcd');
});

test('wraps letters from z to a', () => {
    expect(caesar('xyz', 3)).toBe('abc');
});

// this should fail/ red stage until function is revised, chekcs for handling uppercase letters 
test('shifts uppercase letters by a positive shift', () => {
  expect(caesar('ABC', 2)).toBe('CDE');
});

// should pass , checks handling of negative shifts 
test('decodes text with a negative shift', () => {
  expect(caesar('bcd', -1)).toBe('abc');
});

// should fail the logic handling,checks teh shift of only letter  
test('keeps spaces, punctuation, and numbers unchanged', () => {
  expect(caesar('Hello, World! 123', 5)).toBe('Mjqqt, Btwqi! 123'); 
});