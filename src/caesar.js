// src/caesar.js
function caesar(str, shift) {
  const s = ((shift % 26) + 26) % 26;
  return str.replace(/[a-z]/gi, (char) => {
    const base = char >= 'a' && char <= 'z' ? 97 : 65;
    return String.fromCharCode(((char.charCodeAt(0) - base + s) % 26) + base);
  });
}

export default caesar;
