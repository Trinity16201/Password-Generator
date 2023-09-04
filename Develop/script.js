// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var generateBtn = document.querySelector("#generate");
var specialcharacter = "!@#$%^&*"
var uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM"
var lowercase = "qwertyuiopasdfghjklzxcvbnm"
var numbers = "1234567890"
var emptycontainer =""

function generatePassword() {
  var length = window.prompt("Please enter the length that you want for your password:")
  var lengthvalid = validatelength(length);
  var finalpassword = ""
  while (!lengthvalid) {
    length = window.prompt("Please enter a number 8-128")
    lengthvalid = validatelength(length);
  }
  //window.prompt("Thank you for your input")
  //window.prompt(length)
  var specialconfirm= window.confirm ("Do you want a special character?")
  var upperconfirm= window.confirm ("Do you want an uppercase letter?")
  var lowerconfirm= window.confirm ("Do you want a lowercase letter?")
  var numberconfirm= window.confirm ("Do you want a number?")
  while (!specialconfirm && !upperconfirm && !lowerconfirm && !numberconfirm){
    window.alert("Choose at least one character")
    specialconfirm= window.confirm ("Do you want a special character?")
    upperconfirm= window.confirm ("Do you want an uppercase letter?")
    lowerconfirm= window.confirm ("Do you want a lowercase letter?")
    numberconfirm= window.confirm ("Do you want a number?")
  }
  if(specialconfirm){
    emptycontainer +=specialcharacter
  }
  if(upperconfirm){
    emptycontainer+=upperconfirm
  }
  //need to fix : var i=0 i<length i++
  return finalpassword;
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
  return (inrange && isInt)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
