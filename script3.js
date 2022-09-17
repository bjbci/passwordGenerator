// Assignment Code
const x =[]
const n =[1,2,3,4,5,6,7,8,9,0]
const uL =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const lL =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const char =["!","@","#","$","%","^","&","*","(",")","-","=","+",]  
const y = true
const f = false
/*var generateBtn =*/ document.querySelector("#generate").addEventListener('click',promptThis);

function promptThis(){
let numCharacters = prompt("How long do you want your password to be. 8-128 characters");

  if ((numCharacters >=8 ) && (numCharacters <= 128)){
    console.log(numCharacters)
     }else{
  console.log("you did not enter a valid number")
  prompt("you did not enter a valid number")
}

  let zeroNine = prompt("would you like to include numbers? "+"Y or N")
  console.log(zeroNine)

  if (y) {
    expanding =x.concat(n)
    console.log(expanding)
  }else{
    expanding +0
  }
    
  

  let upperCase = prompt("would you like to include uppercase letters "+"Y or N")
 console.log(upperCase)
 if (y){
  expanding =x.concat(uL)
console.log(expanding)
 }else{
  expanding +0
}

 let lowerCase=prompt("would you like to include " +"lowercase letters "+"Y or N")
 console.log(lowerCase)
 if (y){
  expanding =x.concat(lL)
console.log(expanding)
 }else{
  expanding +0
}

 let characters=prompt("would you like to include special characters !@#$%^&*()" +"Y or N")
console.log(characters)
if (y){
  expanding =x.concat(char)
console.log(expanding)
}else{
  expanding +0
}
}

// console.log(x)

// expanding =x.concat(n)
// console.log(expanding)

// expanding =x.concat(uL)
// console.log(expanding)

// expanding =x.concat(lL)
// console.log(expanding)

// expanding =x.concat(char)
// console.log(expanding)

// expanding =x.concat(n).concat(uL).concat(lL)
// console.log(expanding)

// expanding =x.concat(n).concat(uL).concat(lL).concat(char)
// console.log(expanding)

// console.log(expanding)

var numCharacters;
//const uppercase=ASDFGHJKLPOIUYTREWQZXCVBNM;
//const lowerCase=asdfghjklmnbvcxzqwertyuiop;
//const numbers=0123456789;
//const characters=!@#$%^&*();



// // Write password to the #password input

// function generatePassword()
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// passwordArray={}

// // lengthOfPassword=prompt("how long will your password be? "+"8-128 characters")
// // console.log(lengthOfPassword)
// // if (lengthOfPassword <8 || lengthOfPassword > 128){
// // //console.log("incorrect input")

// // }else
// // {
// //   passwordArray =legthOfPassword
// //   console.log(passwordArray)
// // }

 








// // password=  <lengthOfPassword.length

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);



// //const uppercase=ASDFGHJKLPOIUYTREWQZXCVBNM;
// //const lowerCase=asdfghjklmnbvcxzqwertyuiop;
// //const numbers=0123456789;
// //const characters=!@#$%^&*();