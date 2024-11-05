// Function to generate a random string with specified options
function getRandomString(
  length,
  includeUppercase,
  includeLowercase,
  includeNumbers,
  includeSpecial
) {
  let characters = '';

  if (includeUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (includeLowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
  if (includeNumbers) characters += '0123456789';
  if (includeSpecial) characters += '+/';

  // If no character set is selected, alert the user and return an empty string
  if (characters === '') {
    alert('Please select at least one character type.');
    return '';
  }

  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
}

// Function to handle button click
function generateAndDisplayString() {
  const length = parseInt(document.getElementById('lengthInput').value, 10);
  const includeUppercase = document.getElementById('includeUppercase').checked;
  const includeLowercase = document.getElementById('includeLowercase').checked;
  const includeNumbers = document.getElementById('includeNumbers').checked;
  const includeSpecial = document.getElementById('includeSpecial').checked;

  // Generate the random string with the specified options
  const randomString = getRandomString(
    length,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSpecial
  );

  // Display the result
  document.getElementById('output').textContent = randomString;
}

// Add event listener to the button
document
  .getElementById('generateButton')
  .addEventListener('click', generateAndDisplayString);
