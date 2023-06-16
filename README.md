# Zi-User

Zi-User is a simple package that generates random user objects with fake names and passwords. It uses an object containing arrays of fake first names and last names to generate random name combinations. It also generates a random email address and password.

## Installation

To use Zi-User in your project, you can install it via npm:

```bash
npm install zi-user
```

## Usage

To use Zi-User, simply import the module and call the `getZiUser()` function:

```javascript
const getZiUser = require("zi-user");

// Generate a single user
const user = getZiUser();

console.log(user);
// Output:
// {
//   firstName: 'Rufaro',
//   lastName: 'Sibanda',
//   email: 'rufaro.sibanda4529@example.com',
//   password: 'A4@vweakcyr',
//   username: 'RuSi'
// }

// Generate multiple users
const users = getZiUser(5);

console.log(users);
// Output:
// [
//   {
//     firstName: 'Kyra',
//     lastName: 'Mukamuri',
//     email: 'kyra.mukamuri5897@example.com',
//     password: 'J6^xhpnzvsbtlq',
//     username: 'KyMu'
//   },
//   {
//     firstName: 'Tariro',
//     lastName: 'Chinoda',
//     email: 'tariro.chinoda2561@example.com',
//     password: 'L2#yitgfvkrocu',
//     username: 'TaCh'
//   },
//   {
//     firstName: 'Kudakwashe',
//     lastName: 'Mufandaedza',
//     email: 'kudakwashe.mufandaedza1900@example.com',
//     password: 'F8+ewrmdkqtsab',
//     username: 'KuMu'
//   },
//   {
//     firstName: 'Leah',
//     lastName: 'Dube',
//     email: 'leah.dube6413@example.com',
//     password: 'G7*opjicsrxqtm',
//     username: 'LeDu'
//   },
//   {
//     firstName: 'Tendai',
//     lastName: 'Nyamukapa',
//     email: 'tendai.nyamukapa7205@example.com',
//     password: 'H9)flvzewxgbsn',
//     username: 'TeNy'
//   }
// ]
```

The `getZiUser()` function returns an object with five properties: `firstName`, `lastName`, `email`, `password`, and `username`. If you specify a number as an argument, the function will generate an array of users with the specified length. If no argument is provided or the argument is falsy, the function returns a single user object.

## Use Cases

Here are some use cases for the Zi-User package:

1. **Testing and development**: The Zi-User package can be used to generate fake user data for testing and development purposes. This can be particularly useful when developing applications that require user authentication.

2. **Demo and mockup creation**: The package can also be used to create demos and mockups quickly without having to spend time creating user data manually.

3. **Training and workshops**: The package can be used in training and workshop settings to teach users about authentication and user management systems. By generating fake user data, users can learn how to create, update, and delete user accounts without needing real user data.

4. **Data analysis and visualization**: The package can be used to generate a large amount of fake user data that can be used for data analysis and visualization purposes. This can be particularly useful for data scientists and researchers who need to work with large datasets.

5. **Load testing**: The package can also be used to simulate user behavior during load testing. By generating a large number of user objects, developers can simulate real-world scenarios and test the scalability and performance of their applications under heavy load.

## License

This package is licensed under the MIT license. See the `LICENSE` file for more information.

A project by George Chakama
