var generateBtn = document.querySelector("#generate");

var generateBtn = document.querySelector("#generate");
var specialcharacter = "!@#$%^&*"
var uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM"
var lowercase = "qwertyuiopasdfghjklzxcvbnm"
var numbers = "123456789"

function generatePassword() {
  var length = window.prompt("Please enter the length that you want for your password:")
  var lengthvalid = validatelength(length);
  var finalpassword = ""
  while (!lengthvalid) {
    length = window.prompt("Please enter a number 8-128")
    lengthvalid = validatelength(length);
  }
  var specialconfirm = window.confirm("Do you want a special character?")
  var upperconfirm = window.confirm("Do you want an uppercase letter?")
  var lowerconfirm = window.confirm("Do you want a lowercase letter?")
  var numberconfirm = window.confirm("Do you want a number?")
  while (!specialconfirm && !upperconfirm && !lowerconfirm && !numberconfirm) {
    window.alert("Choose at least one character")
    specialconfirm = window.confirm("Do you want a special character?")
    upperconfirm = window.confirm("Do you want an uppercase letter?")
    lowerconfirm = window.confirm("Do you want a lowercase letter?")
    numberconfirm = window.confirm("Do you want a number?")
  }
  var characterset = ""
  if (specialconfirm) {
    characterset += specialcharacter
  }
  if (upperconfirm) {
    characterset += uppercase
  }
  if (lowerconfirm) {
    characterset += lowercase
  }
  if (numberconfirm) {
    characterset += numbers
  }
  var finalPassword = "";
  for (let i = 0; i < length; i++) {
    finalPassword += characterset.charAt(Math.floor(Math.random() * characterset.length));
  }
  return finalPassword;
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function validatelength(length) {
  length = parseInt(length)

  var inrange = length > 7 && 129 > length;
  var isInt = Number.isInteger(length);
  for (let i = 0; i < validatelength.length; i++) {
  }
  return (inrange && isInt)
}

generateBtn.addEventListener("click", writePassword);
