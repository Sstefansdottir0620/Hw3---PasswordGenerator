


//Fisrt I set the variables and values
var passwordHolder = document.getElementById("password")
let lowerCase = "abcdefghijklmnopqrstuvxyz";
let lowerCaseArray = lowerCase.split("");
let upperCase = "ABCDEFGHIKLMNOPQRSTVXYZ";
let upperCaseArray = upperCase.split("");
let numbersArray = [0,1,2,3,4,5,6,7,8,9];
let specialChar = "! # $ % & ( ) * + - / : ; < = > ? @ \ ^ _ |";
let specialCharArray = specialChar.split(" ");
let password = []
let totalCharLeft = 9;

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function generatePassword (){
  password = []
  totalCharLeft = 9;
  var upperCaseConfirm = confirm("Would you like to include Upper Case letters?")
  var specialCharConfirm = confirm("Would you like to include Special Characters?")
  var numbersConfirm = confirm("Would you like to include Numbers?")

  if (upperCaseConfirm){
    pushToArray(upperCaseArray)
  }
  if (specialCharConfirm) {
    pushToArray(specialCharArray)  
  }
  if (numbersConfirm) {
    pushToArray(numbersArray) 
  }
  for (let i = 0; i < totalCharLeft; i++) {
    var randomNumber = Math.floor(Math.random() * lowerCaseArray.length);
    password.push(lowerCaseArray[randomNumber]);
  }
passwordHolder.value = randomizeArray(password).join("")
console.log(password)

}



function pushToArray (array){
  for (let i = 0; i < 2; i++) {
    var randomNumber = Math.floor(Math.random() * array.length);
    password.push(array[randomNumber]);
    totalCharLeft--
  }

}

function randomizeArray (array){
  for (let i = 0; i < 50; i++) {
    var randomNumber1 = Math.floor(Math.random() * array.length);
    var randomNumber2 = Math.floor(Math.random() * array.length);
    var placeholder = array[randomNumber1]
    array[randomNumber1] = array[randomNumber2]
    array[randomNumber2] = placeholder
    return array;
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
 



// var lowerCase = confirm("Include Lower Case letters");
// //run the random letter generator function

// var numbers = confirm("Include numbers");
// //run the random number generator function

// var specialChar = confirm("Include Special Characters")
// //run the random specialChar generator function


