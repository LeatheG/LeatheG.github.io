"use strict"

const image_elements = ["media/product/border collie.png","media/product/german_shepard.png","media/product/corgi.png","media/product/afghan_hound.png"]
// code the get element function
document.addEventListener("DOMContentLoaded", () => {
    // get the elements from the DOM
    const imageElements = document.querySelectorAll("img");
    
    // click event listener for the Left button
    document.querySelector("#left_button").addEventListener("click", evt => {
        // shift the items in the array to the left
        let firstLink = image_elements.shift();
        image_elements.push(firstLink);
        
        // display the first three images
        for (let i = 0; i < imageElements.length; i++) {
            imageElements[i].src = image_elements[i];
        }
    });

    // click event listener for the Right button    
    document.querySelector("#right_button").addEventListener("click", evt => {
        // shift the items in the array to the right
        let lastLink = image_elements.pop();
        image_elements.unshift(lastLink);

        // display the first three images
        for (let i = 0; i < imageElements.length; i++) {
            imageElements[i].src = image_elements[i];
        }
    });
})