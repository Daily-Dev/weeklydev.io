var _ = require('../handler');
var verifyUniqueUser = require('../util/userFunctions').verifyUniqueUser;
var createUserSchema = require('../schemas/createUser');

module.exports = [{
  method: 'POST',
  path: '/users/new',
  config: {
    validate: {
      payload: createUserSchema
    },
    // Before the route handler runs, verify that
    // the user is unique and assign the result to 'user'
    pre: [{
      method: verifyUniqueUser,
      assign: 'user'
    }],
    // to register user does not need any authentication
    auth: false
  },
  handler: _.addUser
}, {
  /**
   * Get all users
   */
  method: 'GET',
  path: '/users',
  config: {
    auth: 'jwt'
  },
  handler: _.getUsers
}, {
  /**
   * Update user by ID
   */
  method: 'PUT',
  path: '/users/{id}',
  config: {
    auth: 'jwt'
  },
  handler: _.updateUser
}, {
  /**
   * Get users one user by id
   */
  method: 'GET',
  path: '/users/{id}',
  config: {
    auth: 'jwt'
  },
  handler: _.getUser
}, {
  /**
   * Update user by ID
   */
  method: 'DELETE',
  path: '/users/{id}',
  config: {
    auth: 'jwt'
  },
  handler: _.deleteUser
}, {
  /**
   * Get user by request id
   */
  method: 'GET',
  path: '/users/me',
  config: {
    auth: 'jwt'
  },
  handler: _.getCurrentUser
}];
