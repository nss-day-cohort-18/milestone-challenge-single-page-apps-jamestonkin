'use strict';
// IIFE to add background, border and edit description on click
var CarLot = (function(originalCarLot) {
  originalCarLot.borderAndBackground = function() {
    // Referencing card main Div element
    var theCards = document.getElementsByClassName('inner-pad');
    // Sets variable for which card was clicked
    var clickedOn = event.currentTarget;
            // Loops through the cards and runs border function with parameters
            for (var i = 0; i < theCards.length; i++) {
              changeBorderRed(i, theCards, clickedOn);
            }
            // Runs the edit function allowing edit of card description
            edit(clickedOn);
  };
  function changeBorderRed(i, theCards, clickedOn) {
    // Adds the red-border class to the clicked on Div
      if (theCards[i] === clickedOn) {
          theCards[i].classList.add("red-border");
      // When hears click if it is not the clicked on Div and if it has red-border class, it will remove the red-border class, this keeps from putting class on wrong card and removes the class if it was clicked previously but a different card was clicked
      } if (theCards[i] !== clickedOn && theCards[i].classList.contains("red-border")) {
          theCards[i].classList.remove("red-border");
      }
  }
  function edit(clickedOn) {
      // Focuses the cursor on the input box
      input.focus();
      // Sets the input box to blank, ready for new input
      input.value = "";
      // Listens for key press in input box
      input.addEventListener("keydown", function() {
          // Checks for red-border class then prints new input text into that cards description
          if (clickedOn.classList.contains("red-border")) {
              clickedOn.childNodes[7].innerHTML = input.value;
          }
      });
  }

  return originalCarLot;

})(CarLot || {});
