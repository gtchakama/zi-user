const getZiUser = require("zi-user");
// const getZiUser = require('./index');


const user = getZiUser();

console.table(getZiUser(9));
// Output: {
//   firstName: 'Tariro',
//   lastName: 'Mukanya',
//   email: 'tariro.mukanya6440@example.com',
//   password: 'Paoun4*h',
//   username: 'TMaurkiarnoya'
// }