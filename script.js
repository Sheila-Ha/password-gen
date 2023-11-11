// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//prompt criteria for users to select length of 8-128 characters
function generatePassword() {
  var password = '';
  var passwordLength = prompt('Enter a length for your password from 8-128 characters');
  var numericLength = parseInt(passwordLength);
  if (numericLength < 8 || numericLength > 128){
    alert('Length must be between 8 and 128 characters');
    return '';
  }
  //password direction through button prompts for user to give direction
  var useLowerCase = confirm('use lowercase letters in password');
  var useUpperCase = confirm('use uppercase letters in password');
  var useNumeric = confirm('use a number in password');
  var useSpecialCharacter = confirm('use a special character in password');
  if (!useLowerCase && !useUpperCase && !useNumeric && !useSpecialCharacter) {
    alert('you must use at least one character type');
    return '';
  }
  //criteria for password possibilities
  var lowerCase = 'abcdefghigkmnopqrstuvwxyz'; //omitted lowercase L because it can look the same depending on font used
  var upperCase = 'ABCDEFGHJKLMNOPQRSTUVWXYZ'; //omitted uppercase I because it can look the same depending on the font used
  var numbers = '23456789'; //omitted 0 & 1 because it can look the same depending on the font used
  var symbols = '!"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';
  var characterCandidates = '';
  if (useLowerCase) {
    characterCandidates += lowerCase;
  }
  if (useUpperCase) {
    characterCandidates += upperCase;
  }
  if (useNumeric) {
    characterCandidates += numbers;
  }
  if (useSpecialCharacter) {
    characterCandidates += symbols;
  }
  //for loop to select random characters for output
  for(var i=0; i<passwordLength; i++) {
    var characterIndex = Math.floor(Math.random() * characterCandidates.length-1);
    var randomSelectedCharacter = characterCandidates.charAt(characterIndex);
    password += randomSelectedCharacter;
  }
  return password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


