const gameButtons = document.querySelectorAll(".game-button")

let isXTurn = true;

// When ever you click a button, we want to update 
// this array below
const buttonState = [
    [ "", "", "" ],
    [ "", "", "" ],
    [ "", "", "" ],
];

// This funtion will updated the buttonState variable 
// with an  "X" or an "O" , depeneding on whos turn it is. 
// So bascily whenever the click a button, we want
// to updated this arrrray here

function updateState(event) {
  const button = event.target;
//                      when we pull the id from the button 
//                      element, we're getting it as a string
//                      Parse int converts any string that's 
//                      numerical in its value, chaning its
//                      type on to a number  
  const index = parseInt(button.id);

  const arrayIndex = Math.floor(index / 3)
  const buttonIndex = index % 3;

  if (isXTurn){
      buttonState[arrayIndex][buttonIndex] = "X";
      event.target.textContent = "X";
      isXTurn = false;
  } else {
    buttonState[arrayIndex][buttonIndex] = "O";
    event.target.textContent = "O";
    isXTurn = true;
  }
  
  

}

// console.log(gameButtons);
for (const button of gameButtons) {  
button.addEventListener("click" , updateState);
// were attatching this event listener here
// " updateState" to every single button here with this for loop 
}