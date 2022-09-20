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
   // console.log(s)                            // s is empty
   //console.log(expanding)
     expanding =s.concat(num)                   // add array s to array num
   //  console.log(expanding);
  }else {
    console.log("NO NUMBERS")
    //console.log(s);
    expanding=s.concat(s)
    //console.log(expanding);
    
      
  }
console.log(expanding)


   let upperCase = prompt("would you like to include uppercase letters "+"Y or N")
  console.log(upperCase)
  if (upperCase=="y"){
  //console.log(t)                             // t is empty
  // console.log(expanding)
    expanding =expanding.concat(upLetter)                   //add array t to uL
   //console.log(expanding)
  }else{
   console.log("NO UPPERCASE LETTERS")
   //console.log(upLetter);
   expanding=expanding.concat(t)
   //console.log(expanding);
   
 }
 console.log(expanding);


  let lowerCase=prompt("would you like to include " +"lowercase letters "+"Y or N")
 // console.log(lowerCase)
  if (lowerCase=="y"){
  //console.log(l)                          //l is empty
  //console.log(expanding)
  expanding =expanding.concat(lowLetter)                  // add array l to lL
 //console.log(expanding)
  }else{
   console.log("NO LOWERCASE NUMBERS")
   //console.log(lowLetter);
   expanding=expanding.concat(l)
   //console.log(expanding);
 }
 console.log(expanding)

  let characters=prompt("would you like to include special characters !@#$%^&*()" +"Y or N")
 //console.log(char)
 if (characters=="y"){
 // console.log(m)                            // m is empty
 //   console.log(expanding)
   expanding =expanding.concat(char)                //add m to char
 //console.log(expanding)
 }else{
   console.log("NO CHARACTERS")
   //console.log(char);
   expanding=expanding.concat(m)
  // console.log(expanding);
 }
 console.log(expanding)
 
 // if (expanding.length <11)
   //    expanding = (3*[1,2,3,4,5,6,7,8,9,0])
//  if (expanding.length >=11 && expanding.length <24)
//        expanding=concat(num).concat(num).concat(num).concat(num).concat(num).concat(num).concat(num).concat(num).concat(num).concat(num)

//  if (expanding.length >=24 && expanding.length <37)
//         expanding=concat(num).concat(num).concat(num).concat(num).concat(num).concat(num)

//  if (expanding.length >=37 && expanding.length <62)
//          expanding=concat(num).concat(num).concat(num).concat(num)

//  if (expanding.length >=62 )
//           expanding=concat(char).concat(char)

 



 console.log(expanding)
//} 
//promptThis(expanding)


console.log(numCharacters)

function  random_items(expanding)                            // gives ONe random element
{
  return expanding[Math.floor(Math.random()*expanding.length)];
}
console.log(random_items(expanding))

 let shuffled_expanding = expanding.sort(function() {
   return Math.random() -0.5;                              //SORT METHOD TO SCRAMBLE ARRAY
 });
 console.log(shuffled_expanding);

 //if (shuffled_expanding<11)
 //shuffled_expanding.concat(num,num,num,num,num,num,num,num,num,num,num,num);
 //shuffled_expanding.concat(num).concat(num).concat(num).concat(num).concat(num).concat(num).concat(num).concat(num).concat(num).concat(num)
 //console.log(shuffled_expanding);
 //password1=expanding.splice(10, numCharacters)
//console.log(password1)

 //const password = shuffled_expanding.slice(8,8)
// console.log(password);
var getMeRandomElements = function(expanding, numCharacters) {
  var result = [];
  for (var i = 0; i < numCharacters; i++) {
      result.push(expanding[Math.floor(Math.random()*expanding.length)]);
  }
  
}
console.log(getMeRandomElements)

document.getElementById("password").innerHTML = expanding;
}
// function random_items2(bigArray, numCharacters){
//   const shuffled = [bigArray].sort(() => 0.5 - Math.random());
//   return shuffled.slice(0,numCharacters);                         //TOO COMPLICATED
// {
//   const bigArray = expanding;
//   console.log(random_items2(expanding,numCharacters))
// }
// console.log(random_items2(bigArray))

// var getRandomint
// function shuffle(expanding){
//       var aa = expanding.length;       //final length of array
//        for (var i=0; i< aa-1; ++i){
//        var j = getRandomint(aa)

//        var temp = expanding[i];
//        expanding[i] = expanding[j];
//        expanding[j]= temp;    
//        }
//        return expanding;
//       }
//       expanding=shuffle(expanding);
//       console.log(expanding);


// // Write password to the #password input

// function generatePassword()
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// passwordArray={}


// // password=  <lengthOfPassword.length

