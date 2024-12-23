const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const regux = /@([a-zA-Z0-9.-]+)$/;
  const matFloor = email.match(regux);
  if (matFloor) {
    return matFloor[1];
  }
  throw new Error('Invalid email');
}

module.exports = {
  getEmailDomain
};
