// Assignment Code -- these are all the variables I created so that I can call on them throughout the function
var generateBtn = document.querySelector("#generate");
var lowercase
var uppercase
var numbers
var specialCharacters
var passwordLength
// var result = [lowercase, uppercase, numbers, specialCharacters, passwordLength]

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

  if (lowercase === true) {
    console.log('You want lowercase characters in your password.')
  } else {
    console.log('You do not want lowercase characters in your password.')
  }

  if (uppercase === true) {
    console.log('You want uppercase characters in your password.')
  } else {
    console.log('You do not want uppercase characters in your password.')
  }

  if (numbers === true) {
      console.log('You want numbers in your password.')
  } else {
    console.log('You do not want numbers in your password.')
  }

  if (specialCharacters === true) {
    console.log ('You want special characters in your password.')
  } else {
    console.log('You do not want special characters in your password.')
  }

  let result = [lowercase, uppercase, numbers, specialCharacters, passwordLength];
  console.log (result);

  let passwordSpecifics = writePassword();

  return;

function writePassword() {
  for (i = 0; i < result.length; i++) {
    
  }
  var password = result;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  }


}

 
  