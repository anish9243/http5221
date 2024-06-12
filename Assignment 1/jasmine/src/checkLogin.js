/**
 * Function to validate login credentials.
 * @param {string} username
 * @param {string} password
 * @returns {boolean|string} true if username and password are valid, otherwise an error message
 */
function checkLogin(username, password) {
  const validUsername = "anish098";
  const validPassword = "87757270c86d517698777aeba4273838";
  const encryptedPassword = md5Encrypt(password);

  if (!username) {
    return "No Username Entered.";
  } else if (!password) {
    return "No Password Entered.";
  } else if (username !== validUsername || encryptedPassword !== validPassword) {
    return "Invalid Username or Password.";
  } else {
    return true;
  }

};
