'use strict';
// IIFE that listens for clicks on car card
var CarLot = (function(originalCarLot) {
  originalCarLot.activateEvents = function(event) {
    // Referencing card main Div element
    var numOfCards = document.getElementsByClassName('inner-pad');
    // Loops through the main Div cards
    for (var i = 0; i < numOfCards.length; i++) {
      // Adds event listener to listen for mouse click to every card
      numOfCards[i].addEventListener("click", CarLot.borderAndBackground);
    }
  };

  return originalCarLot;

})(CarLot || {});
