// Assignment Code
var expanding = [];
var result="";
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var upLetter = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var lowLetter = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var char = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+"];

var generateBtn = document
  .querySelector("#generate")
  .addEventListener("click", promptThis);

function promptThis() {
  let numCharacters = prompt(
    "How long do you want your password to be",
    "8-128 characters"
  );

  if (numCharacters >= 8 && numCharacters <= 128) {
    console.log(numCharacters);

    
  if (confirm("would you like to include numbers? ")) {
    // console.log(s)                            // s is empty
    //console.log(expanding)
    expanding = expanding.concat(num); // add array s to array num
    console.log(expanding);
  }
  

  if (confirm("would you like to include uppercase letters ")) {
    //console.log(t)                             // t is empty
    // console.log(expanding)
    expanding = expanding.concat(upLetter); //add array t to uL
    console.log(expanding)
  }
  

  if (confirm("would you like to include " + "lowercase letters ")) {
    expanding = expanding.concat(lowLetter); // add array l to lL
    console.log(expanding); 
  }
  

  if ( confirm("would you like to include special characters !@#$%^&*()"))
   {
    expanding = expanding.concat(char);
    console.log(expanding);
  }
  if (expanding.length===0){
    alert("you need to choose at least one value type")
  }else{
    for(let i=0; i< numCharacters; i++){
     var lotsOfMath=Math.floor(Math.random() * expanding.length)
     result+=expanding[lotsOfMath]
    }
    document.getElementById("password").innerHTML = result;
  }


  

  } else {
    console.log("you did not enter a valid number");
    alert("you did not enter a valid number");
  }
}

  

  console.log(expanding);

  