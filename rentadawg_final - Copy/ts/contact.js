"use strict";

const getElement = (selector) => document.querySelector(selector);

const displayErrorMsgs = (msgs) => {
    // create a new ul element
    const ul = document.createElement("ul");
    ul.classList.add("messages");

    // create a new li element for each error message, add to ul
    for (let msg of msgs) {
        const li = document.createElement("li");
        const text = document.createTextNode(msg);
        li.appendChild(text);
        ul.appendChild(li);
    }

    // if ul node isn't in document yet, add it
    const node = getElement("ul");
    if (node == null) {
        // get the form element 
        const form = getElement("form");

        if (form && form.parentNode) {
            // add ul to parent of form, before the form
            form.parentNode.insertBefore(ul, form);
        }
    } else {
        // replace existing ul node
        if (node.parentNode) {
            node.parentNode.replaceChild(ul, node);
        }
    }
}

const processEntries = (event) => {
    event.preventDefault(); // Prevent form from submitting

    // get form controls to check for validity
    const name = getElement('#name');
    const email = getElement("#email_address");
    const phone = getElement("#phone");

    // create array for error messages
    const msgs = [];

    // check user entries for validity
    if (name.value === "") {
        msgs.push("Please enter your name.");
    }
    if (email.value === "") {
        msgs.push("Please enter an email address.");
    } else if (!email.value.includes("@")) {
        msgs.push("Email address must include @.");
    } else if (!email.value.includes(".")) {
        msgs.push("Email address must include a dot (.).");
    }
    if (phone.value === "") {
        msgs.push("Please enter a mobile phone number.");
    }

    // submit the form or notify user of errors
    const form = getElement("form");
    if (msgs.length === 0) {  // no error messages
        alert("Thank you! We will contact you shortly.");
        if (form) {
            form.submit();
        }
    } else {
        displayErrorMsgs(msgs);
    }
};

const resetForm = () => {
    const form = getElement("form");
    if (form) {
        form.reset();
    }

    // remove error messages if any
    const ul = getElement("ul");
    if (ul !== null) ul.remove();

    const emailInput = getElement("#email_address");
    if (emailInput) {
        emailInput.focus();
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const registerButton = getElement("#register");

    if (registerButton) {
        registerButton.addEventListener("click", processEntries);
    }

});