'use strict';
// Declaring and referencing variables
let output = document.getElementById('output');
let input = document.getElementById('text-input');

// Loop over the inventory and populate the page
function populatePage(inventory) {
  console.log('main.js inventory: ', inventory);
  var counter = 1;
  let cardDiv = document.createElement('div');
  cardDiv.classList.add(`container`);
  cardDiv.classList.add(`row`);
  let fill;
  for (fill in inventory) {
    let fillCard = '';
    let carItem = inventory[fill];
    fillCard += `<div class="col-md-4 outer-pad" title="click to edit description">
                 <div class="inner-pad black-border">
                 <h4 class="text-center">${carItem.make} ${carItem.model}</h4>
                 <h5>${carItem.year}</h5>
                 <h5>Only $${carItem.price}</h5>
                 <p>${carItem.description}</p>
                 </div>
                 </div>`;
    cardDiv.innerHTML += fillCard;
    output.append(cardDiv);
    var count = counter % 3;
    if (count === 0) {
      cardDiv = document.createElement('div');
      cardDiv.classList.add(`container`);
      cardDiv.classList.add(`row`);
    }
    counter++;
  }


  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory();
