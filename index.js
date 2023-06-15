// Define an object with fake names and surnames
const fakeUsers = {
    first: ['Tariro', 'Rufaro', 'Tendai', 'Kudzai', 'Fadzai', 'Nyasha', 'Rumbidzai', 'Rutendo', 'Farai', 'Tinashe', 'Shamiso', 'Tsitsi', 'Nyarai', 'Chipo', 'Anesu', 'Batsirai', 'Chengetai', 'Tatenda', 'Ngoni', 'Tapiwa'],
    last: ['Moyo', 'Ndlovu', 'Dube', 'Marufu', 'Matanga', 'Sibanda', 'Chikwavaire', 'Mugabe', 'Gumbo', 'Nkomo', 'Chimuti', 'Mhlanga', 'Mtshali', 'Mukanya', 'Mupfumira', 'Musuka', 'Mawere', 'Mushore', 'Mavhunga', 'Mangena']
  };
  
  // Define a function to generate a random user
  function getZiUser() {
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
    for (let i = 0; i < 4; i++) {
      password += lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)];
    }
    
    // Shuffle the password to make it more random
    password = password.split('').sort(function(){return 0.5-Math.random()}).join('');
  
    // Generate cool username
    let username = "";
    for (let i = 0; i < Math.min(firstName.length, lastName.length); i++) {
      username += firstName[i] + lastName[i];
    }
    if (firstName.length > lastName.length) {
      username += firstName.slice(lastName.length);
    } else if (lastName.length > firstName.length) {
      username += lastName.slice(firstName.length);
    }
  
    // Return the generated user object
    return { firstName, lastName, email, password, username };
  }
  
  // Export the `getZiUser` function as the default export of the package
  module.exports = getZiUser;
  