

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



// Declaring object that will be passed through growMyTree
 var myObject = {
  height:"",
  character:""
 }


// Declaring variables to grab input elements.
  var charType = document.getElementById("character");
  var treeHeight = document.getElementById("height");
;

// Defining final variable that will be console logged to display tree.
  var yourTree;


  
// Defining button variable to set up event listener for userInp
  var button = document.getElementById("btn");
  button.addEventListener("click", function userInput () {
      myObject.character = charType.value;
      myObject.height = treeHeight.value;
   
// Checking for user input values in both boxes
    if (charType === "" || treeHeight === "" ) {
      alert("Please Enter Value for Both Fields");
    } else {
      growMyTree (myObject);
    }
  
  })
// Building tree 
 function growMyTree(){
    for(i = 1; i <= myObject.height; i++){
    var spacesBefore = myObject.height - i;
    var charNum = (i * 2) - 1;
    var yourTree = " ".repeat(spacesBefore) + myObject.character.repeat(charNum);

     console.log("yourTree", yourTree );

   
 }
};
  

