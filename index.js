const fakeUsers = require('./users')

// Define a function to generate a random user
function getZiUser(numUsers = 1) {
  const users = [];
  
  for (let i = 0; i < numUsers; i++) {
    // Choose a random name and surname from the arrays
    const firstName = fakeUsers.first[Math.floor(Math.random() * fakeUsers.first.length)];
    const lastName = fakeUsers.last[Math.floor(Math.random() * fakeUsers.last.length)];

    // Generate a random email by concatenating the name and surname with a random number
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${Math.floor(Math.random() * 10000)}@example.com`;

    // Define variables for password generation
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numericChars = "0123456789";
    const specialChars = "!@#$%^&*()_+-=";

    // Generate a random password with at least one capital letter, one number, and one special character
    let password = "";
    password += uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
    password += lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)];
    password += numericChars[Math.floor(Math.random() * numericChars.length)];
    password += specialChars[Math.floor(Math.random() * specialChars.length)];
    for (let j = 0; j < 4; j++) {
      password += lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)];
    }

    // Shuffle the password to make it more random
    password = password.split('').sort(function(){return 0.5-Math.random()}).join('');

    // Generate cool username
    let username = "";
    for (let j = 0; j < Math.min(firstName.length, lastName.length); j++) {
      username += firstName[j] + lastName[j];
    }
    if (firstName.length > lastName.length) {
      username += firstName.slice(lastName.length);
    } else if (lastName.length > firstName.length) {
      username += lastName.slice(firstName.length);
    }

    // Push the generated user object to the array
    users.push({ firstName, lastName, email, password, username });
  }

  // If `numUsers` is not defined or falsy, return a single user object
  if (!numUsers) {
    return users[0];
  }

  // Otherwise, return the array of generated users
  return users;
}

// Export the `getZiUser` function as the default export of the package
module.exports = getZiUser;
