// Assignment Code -- these are all the variables I created so that I can call on them throughout the function
var generateBtn = document.querySelector("#generate");
var lowercase
var uppercase
var numbers
var specialCharacters
var passwordLength
var result = [lowercase, uppercase, numbers, specialCharacters, passwordLength,]
var passwordSpecifics = promptMessage.passwordLength

// Add event listener to generate button 
generateBtn.addEventListener("click", promptMessage); //changed from WritePassword**

function promptMessage() {
  alert('Please choose the specifics for your password');
    lowercase = confirm('Do you want Lowercase letters?');
    uppercase = confirm('Do you want Uppercase letters?');
    numbers = confirm('Do you want numbers?');
    specialCharacters = confirm('Do you want special characters?');
    passwordLength = prompt('How long would you like your password to be?');
  }

if (passwordSpecifics <= 8 && >= 128) {
  
}


 



  


  // // alert(userQuestions).addEventListener ("click", promptSpecificMessage);
  //   function promptSpecificMessage() {
  //     let passwordSpecifics = prompt('Enter the desired length of your password');

  // }


// let response = promptMessage.alert (
//   console.log("I've been clicked")
// )


  // let result = alert.addEventListener("click", (e)=>{
  //   if(result === true) {
  //     prompt('Enter the desired length of your password')
  //   }
  // })

//   if (result === true) {
//     prompt('Enter the desired length of your password')
//   } else (result === false) {
    
//   }

//   }



















// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button -- idk what this code below does, so I'm going to comment it out.
// // generateBtn.addEventListener("click", writePassword);

