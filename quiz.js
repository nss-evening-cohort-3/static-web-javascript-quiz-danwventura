// Create a tree function that should build a pine tree out of a character in the browser console. 
// It accepts a single object as an argument. The object should have two key/value pairs.

// A key that specifies the height of the pine tree.
// The value for the height of the tree should be from user input in a <input type="text"> 
// field in the DOM.
// A key that specifies which character to use to build the pine tree.
// The character to use should be from user input in a <input type="text"> field in the DOM.
// Once the user enters in a number, and a character, the user can either then just press the enter
 // key (as long as the cursor is in one of the input fields), or click a button that is labeled 
 // "Grow your tree" and the tree should be shown in the console.

// If either of the input fields does not have a value in it when the user presses the enter key, 
// or presses the button, then display an alert stating that both fields must have a value.

// Grow your tree

//       *
//      ***
//     *****
//    *******
//   *********
//  ***********
// *************

// Created object with blank height/character keys to be filled in by userInputs
var myObject = {
  height:"",
  character:""
};


// Added event listeners that save values on keyup and give values to myObject key
document.getElementById("character").onkeyup = function(){
  myObject.character=document.getElementById("character").value;
}

document.getElementById("height").onkeyup = function(){
  myObject.height=document.getElementById("height").value;
}


// Created seperate function to determine whether both inputs have a value
var bothValue = function(inputValues) {
  // if(myObject.character === "" || myObject.height === "") {
  //   alert("Please Enter Value for Both Fields")
  // } else {
  yourTree()
  }
// };

// Function to generate spaces and # of characters by passing myObject through
var yourTree = function (myObject){
  var answer;
  
  for (var i = 1; i <= myObject.height; i++) {
    var spacesBefore = myObject.height - i;
    var characterNum = (i * 2) - 1; 
    
// Repeating spaces/character as calculated by for loop
    answer = " ".repeat(spacesBefore) + myObject.character.repeat(characterNum);
  
  }
}


document.getElementById("btn").addEventListener("click", bothValue)


