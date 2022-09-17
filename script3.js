// Assignment Code
 var expanding=[]
 var s =[]
 var num =[1,2,3,4,5,6,7,8,9,0]
 var t=[]
 var upLetter =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
 var l=[]
 var lowLetter =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
 var m=[]
 var char =["!","@","#","$","%","^","&","*","(",")","-","=","+",]  
let y = true
let n = false
/*var generateBtn =*/ document.querySelector("#generate").addEventListener('click',promptThis);

function promptThis(){
let numCharacters = prompt("How long do you want your password to be", "8-128 characters");

  if ((numCharacters >=8 ) && (numCharacters <= 128)){
    console.log(numCharacters)
     }else{
  console.log("you did not enter a valid number")
  prompt("you did not enter a valid number")
}

  let zeroNine = prompt("would you like to include numbers? ","y or n")
  console.log(zeroNine)

  if (zeroNine == "y") {
    console.log(s)                            // s is empty
    console.log(expanding)
     expanding =s.concat(num)                 // add array s to array num
    console.log(expanding);
  }else {
    console.log("NO NUMBERS")
    console.log(s);
    expanding=s.concat(s)
    console.log(expanding);
    
  }
console.log(expanding)


   let upperCase = prompt("would you like to include uppercase letters "+"Y or N")
  console.log(upperCase)
  if (upperCase=="y"){
  console.log(t)                             // t is empty
    console.log(expanding)
   expanding =expanding.concat(upLetter)                   //add array t to uL
 console.log(expanding)
  }else{
   console.log("NO UPPERCASE LETTERS")
   console.log(upLetter);
   expanding=expanding.concat(t)
   console.log(expanding);
   
 }
 console.log(expanding);


  let lowerCase=prompt("would you like to include " +"lowercase letters "+"Y or N")
  console.log(lowerCase)
  if (lowerCase=="y"){
  console.log(l)                          //l is empty
  console.log(expanding)
  expanding =expanding.concat(lowLetter)                  // add array l to lL
 console.log(expanding)
  }else{
   console.log("NO LOWERCASE NUMBERS")
   console.log(lowLetter);
   expanding=expanding.concat(l)
   console.log(expanding);
 }

  let characters=prompt("would you like to include special characters !@#$%^&*()" +"Y or N")
 console.log(char)
 if (characters=="y"){
  console.log(m)                            // m is empty
    console.log(expanding)
   expanding =expanding.concat(char)                //add m to char
 console.log(expanding)
 }else{
   console.log("NO CHARACTERS")
   console.log(char);
   expanding=expanding.concat(m)
   console.log(expanding);

 }
 }
promptThis(console.log("Final expanding array" +expanding))
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

 



66




// // password=  <lengthOfPassword.length

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);



// //const uppercase=ASDFGHJKLPOIUYTREWQZXCVBNM;
// //const lowerCase=asdfghjklmnbvcxzqwertyuiop;
// //const numbers=0123456789;
// //const characters=!@#$%^&*();