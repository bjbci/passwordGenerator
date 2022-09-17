// Assignment Code
const all=[]
const n =[1,2,3,4,5,6,7,8,9,0]
const uL =[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z]
const lL =[a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]
const char =["!","@","#","$","%","^","&","*","(",")","-","=","+",]  

/*var generateBtn =*/ document.querySelector("#generate").addEventListener('click',promptThis);

function promptThis(){
let numCharacters = prompt("How long do you want your password to be. 8-128 characters");

  if (numCharacters >= 8){
    console.log(numCharacters)
  }else
  console.log("you did not enter a valid number")

  let zeroNine = prompt("would you like to include numbers? "+"Y or N")
  console.log(zeroNine)

  let upperCase = prompt("would you like to include uppercase letters "+"Y or N")
 console.log(upperCase)

 let lowerCase=prompt("would you like to include " +"lowercase letters "+"Y or N")
 console.log(lowerCase)

 let characters=prompt("would you like to include special characters !@#$%^&*()" +"Y or N")
console.log(characters)
}

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