// const getZiUser = require("zi-user");
const getZiUser = require('./index');


const user = getZiUser();

console.log(user);
// Output: { name: 'Emma', surname: 'Clark', email: 'emma.clark2732@example.com', password: 'imzqcvkw' }
