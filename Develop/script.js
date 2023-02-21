// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
var passwordLength = Number(prompt("How many characters would you like your password to contain? Reminder: password length should be between 8 and 128 characters!"));
var len
var charLower = confirm("Click OK to confirm including lowercase characters.");
var charUpper = confirm("Click OK to confirm including uppercase characters.");
var charNumeric = confirm("Click OK to confirm including numeric characters.");
var charSpecial = confirm("Click OK to confirm including special characters.");
var charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !#$%&()*+,-./:;<=>?@[]^_`{|}~"
    
var retVal = "";

  for (var i = 0, n = charSet.length; i < passwordLength; ++i) {
    retVal += charSet.charAt(Math.floor(Math.random() * n));
}

return retVal;

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


