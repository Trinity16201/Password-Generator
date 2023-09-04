// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var generateBtn = document.querySelector("#generate");
var specialcharacter = "!@#$%^&*"
var uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM"
var lowercase = "qwertyuiopasdfghjklzxcvbnm"
var numbers = "1234567890"
var emptycontainer =""
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
