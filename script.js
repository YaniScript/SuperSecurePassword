// Assignment Code -- these are all the variables I created so that I can call on them throughout the function
var generateBtn = document.querySelector("#generate");
var lowercase
var uppercase
var numbers
var specialCharacters
var passwordLength

// Add event listener to generate button 
generateBtn.addEventListener("click", promptMessage); //changed from WritePassword**

function promptMessage() {
  alert('Please choose the specifics for your password');
    lowercase = confirm('Do you want Lowercase letters?');
    uppercase = confirm('Do you want Uppercase letters?');
    numbers = confirm('Do you want numbers?');
    specialCharacters = confirm('Do you want special characters?');
    passwordLength = prompt('How long would you like your password to be?');
    
  if (passwordLength <= 8 || passwordLength >= 128) {
  console.log(passwordLength);
  alert('Your password must at least 8 but no more than 128 characters.');
  passwordLength = prompt('How long would you like your password to be?')
  }

  let lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  let uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  let numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  let specialCharactersArray = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "=", "?"]


var actualPassword = []; 

  if (lowercase === true) {
    console.log('You want lowercase characters in your password.');
    actualPassword = actualPassword.concat(lowercaseArray);
  }

  if (uppercase === true) {
    console.log('You want lowercase and uppercase characters in your password.');
    actualPassword = actualPassword.concat(uppercaseArray)
  }

  if (numbers === true) {
      console.log('You want numbers in your password.');
      actualPassword = actualPassword.concat(numbersArray);  
  }

  if (specialCharacters === true) {
    console.log ('You want special characters in your password.');
    actualPassword = actualPassword.concat(specialCharactersArray);

  }

  console.log(actualPassword);


function writePassword() {
  for (let i = 0; i < actualPassword; index++) {
    const element = actualPassword[passwordLength];
  }

  var randomPassword = Math.random(actualPassword);
  var passwordText = document.querySelector("#password");

  passwordText.value = actualPassword;

  }

writePassword ();

}
