'use strict';
var CarLot = (function () {
  var inventory;

  return {
    loadInventory: function (callback) {
      // Starts request to get data from JSON file
      var inventoryLoader = new XMLHttpRequest();
      // Event listener that listens for when data is loaded
      inventoryLoader.addEventListener("load", function () {
        console.log('The transfer is complete and we have data');
        // Parses the JSON file
        var data = JSON.parse(event.target.responseText);
        console.log('inventory array: ', data);
        // Sets inventory variable to the cars array from JSON file
        inventory = data.cars;
        console.log('what is inventory: ', inventory);
        // Runs the populatePage function in main.js
        populatePage(inventory);
      });
      // Gets and sends data from JSON file
      inventoryLoader.open('GET', "../inventory.json");
      inventoryLoader.send();
    },
    // Getter method to return the private inventory data
    getInventory: function(callback) {
      return inventory;
    }
  };

})(CarLot || {});
