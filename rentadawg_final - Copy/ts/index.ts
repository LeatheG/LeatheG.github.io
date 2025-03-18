"use strict";

// 2/24/25 added code to make sure prompt only pops up once per user session
if (!sessionStorage.getItem("dogBreed")) {
    let dogBreed = (prompt("Quick question! What's your favorite dog breed? "));
    if (dogBreed) {
        sessionStorage.setItem("dogBreed", dogBreed);
    }
}
let dogBreed = sessionStorage.getItem("dogBreed") || "all type";

// 2/24/25 removed for simplicity ---> alert (dogBreed +"! Gotcha!!");

const listElement = document.getElementById("list") as HTMLElement;
if (listElement) {
    listElement.innerText = "Have you felt like your parties are a little lack-luster lately?" +
    " Well, bow-how about a party rockin dj at your next event! From choosing the dog breed (we heard ya like " 
    + dogBreed + "(s)), to the party style, to music type, and so much more. Rent-A-Dawg has all the answers to your doggie dj dreams!";
}

