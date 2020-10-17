// Assignment Code
var characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var capChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var sChars = ["@", "$", "!", "&", "^", "-", "+", "?", "<", ">"]

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var possibles = []
  var length = parseInt(prompt("How long does this password need to be?"))

if(length < 8 || length > 128 || isNaN(length)) {
    alert("no way, try again")
} else {
  var charactersTrue = confirm("Do you want characters?");
  var capCharsTrue = confirm("Do you want capitals?");
  var numsTrue = confirm("Do you want numbers?");
  var sCharsTrue = confirm("Do you want special characters?");

  if (charactersTrue) { possibles.push(characters) };
  if (capCharsTrue) { possibles.push(capChars) };
  if (numsTrue) { possibles.push(nums) };
  if (sCharsTrue) { possibles.push(sChars) };

  var password = ""
    while(password.length < length) {

      for (let i = 0; i < possibles.length; i++) {
        if (password.length < length){
       let rand = Math.floor(Math.random() * possibles[i].length)
      password += possibles[i][rand]
        }
    }
  }
}
// console.log(password, `pasword lenth: ${password.length}`)
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




