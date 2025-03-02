"use strict";
var image_elements = ["media/products/shower.png", "media/products/wedding.png", "media/products/party.png", "media/products/memorial.png"];
document.addEventListener("DOMContentLoaded", function () {
    // get the elements from the DOM
    var imageElements = document.querySelectorAll(".row img");
    console.log("Selected images:", imageElements);
    // click event listener for the Left button
    document.querySelector("#left_button").addEventListener("click", function (evt) {
        // shift the items in the array to the left
        var firstLink = image_elements.shift();
        if (firstLink) {
            image_elements.push(firstLink);
        }
        // display the images
        for (var i = 0; i < imageElements.length; i++) {
            if (i < image_elements.length) {
                console.log("Setting src of image ".concat(i, " to ").concat(image_elements[i]));
                imageElements[i].src = image_elements[i];
            }
        }
    });
    // click event listener for the Right button    
    document.querySelector("#right_button").addEventListener("click", function (evt) {
        // shift the items in the array to the right
        var lastLink = image_elements.pop();
        if (lastLink) {
            image_elements.unshift(lastLink);
        }
        // display the images
        for (var i = 0; i < imageElements.length; i++) {
            if (i < image_elements.length) {
                console.log("Setting src of image ".concat(i, " to ").concat(image_elements[i]));
                imageElements[i].src = image_elements[i];
            }
        }
    });
});
