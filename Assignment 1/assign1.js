window.onload = function () {
  var formHandle = document.forms.login__form;
  var username = formHandle.username;
  var password = formHandle.password;
  var output = document.getElementById("output_box");
  
  formHandle.onsubmit = processForm;

  function processForm() {
    var loginValidation = checkLogin(username.value, password.value);
    output.style.display = "block";
    if (loginValidation === true) {
      output.innerHTML = "Welcome Back!";
    } else {
      output.innerHTML = loginValidation;
    }
    return false;
  }
  //This funtion we can use in the ./src/checkLogin file
  /**
   * Function to validate login Username and Password.
   * @param {string} username
   * @param {string} password
   * @returns {boolean|string} true if username and password are valid, else an error message
   */
  function checkLogin(username, password) {
    // console.log("user:", username, "Pass:", password); Checking username and password
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
  } //Function End
};
