document.getElementById('button');
document.addEventListener('click', generateAndDisplayString);

function getRandomBase64String(length) {
  const base64Chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-#';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * base64Chars.length);
    result += base64Chars[randomIndex];
  }
  return result;
}

function generateAndDisplayString() {
  const randomString = getRandomBase64String(16);
  document.getElementById('output').textContent = randomString;
}
