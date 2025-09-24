import caesar from '../src/caesar.js'; // ES module import

console.log("main.js loaded");

// Get DOM elements
const messageInput = document.getElementById('message');
const shiftInput = document.getElementById('shift');
const resultDiv = document.getElementById('result');
const encodeButton = document.getElementById('encode');
const decodeButton = document.getElementById('decode');

// Event listeners
encodeButton.addEventListener('click', () => {
  console.log("Encode clicked");
  const text = messageInput.value;
  const shift = parseInt(shiftInput.value, 10);
  const encoded = caesar(text, shift);
  console.log("Encoded result:", encoded);
  resultDiv.textContent = encoded;
});

decodeButton.addEventListener('click', () => {
  console.log("Decode clicked");
  const text = messageInput.value;
  const shift = parseInt(shiftInput.value, 10);
  const decoded = caesar(text, -shift);
  console.log("Decoded result:", decoded);
  resultDiv.textContent = decoded;
});