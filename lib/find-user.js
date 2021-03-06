const users = require("../fixtures/users")

const findUserByCredentials = ({ username, password }) =>
  users.find(user => user.username === username && user.password === password)

exports.byCredentials = findUserByCredentials
