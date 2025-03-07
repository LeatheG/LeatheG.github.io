"use strict";

const image_elements = ["media/products/shower.png", "media/products/wedding.png", "media/products/party.png", "media/products/memorial.png"];

document.addEventListener("DOMContentLoaded", () => {
    // get the elements from the DOM
    const imageElements = document.querySelectorAll(".row img");

    // click event listener for the Left button
    document.querySelector("#left_button").addEventListener("click", evt => {
        // shift the items in the array to the left
        let firstLink = image_elements.shift();
        if (firstLink) {
            image_elements.push(firstLink);
        }

        // display the images
        for (let i = 0; i < imageElements.length; i++) {
            if (i < image_elements.length) {
                imageElements[i].src = image_elements[i];
            }
        }
    });

    // click event listener for the Right button
    document.querySelector("#right_button").addEventListener("click", evt => {
        // shift the items in the array to the right
        let lastLink = image_elements.pop();
        if (lastLink) {
            image_elements.unshift(lastLink);
        }

        // display the images
        for (let i = 0; i < imageElements.length; i++) {
            if (i < image_elements.length) {
                imageElements[i].src = image_elements[i];
            }
        }
    });
});
