"use strict";
var getElement = function (selector) { return document.querySelector(selector); };
var displayErrorMsgs = function (msgs) {
    // create a new ul element
    var ul = document.createElement("ul");
    ul.classList.add("messages");
    // create a new li element for each error message, add to ul
    for (var _i = 0, msgs_1 = msgs; _i < msgs_1.length; _i++) {
        var msg = msgs_1[_i];
        var li = document.createElement("li");
        var text = document.createTextNode(msg);
        li.appendChild(text);
        ul.appendChild(li);
    }
    // if ul node isn't in document yet, add it
    var node = getElement("ul");
    if (node == null) {
        // get the form element 
        var form = getElement("form");
        if (form && form.parentNode) {
            // add ul to parent of form, before the form
            form.parentNode.insertBefore(ul, form);
        }
    }
    else {
        // replace existing ul node
        if (node.parentNode) {
            node.parentNode.replaceChild(ul, node);
        }
    }
};
var processEntries = function () {
    // get form controls to check for validity
    var name = getElement('#name');
    var email = getElement("#email_address");
    var phone = getElement("#phone");
    var terms = getElement("#terms");
    // create array for error messages
    var msgs = [];
    // check user entries for validity
    if (name.value === "") {
        msgs.push("Please enter your name.");
    }
    if (email.value === "") {
        msgs.push("Please enter an email address.");
    }
    else if (!email.value.includes("@")) {
        msgs.push("Email address must include @.");
    }
    else if (!email.value.includes(".")) {
        msgs.push("Email address must include a dot (.).");
    }
    if (phone.value === "") {
        msgs.push("Please enter a mobile phone number.");
    }
    if (!terms.checked) {
        msgs.push("You must agree to the terms of service.");
    }
    // submit the form or notify user of errors
    var form = getElement("form");
    if (msgs.length === 0) { // no error messages
        if (form) {
            form.submit();
        }
    }
    else {
        displayErrorMsgs(msgs);
    }
};
var resetForm = function () {
    var form = getElement("form");
    if (form) {
        form.reset();
    }
    // remove error messages if any
    var ul = getElement("ul");
    if (ul !== null)
        ul.remove();
    var emailInput = getElement("#email_address");
    if (emailInput) {
        emailInput.focus();
    }
};
document.addEventListener("DOMContentLoaded", function () {
    var registerButton = getElement("#register");
    var resetButton = getElement("#reset_form");
    if (registerButton) {
        registerButton.addEventListener("click", processEntries);
    }
    if (resetButton) {
        resetButton.addEventListener("click", resetForm);
    }
    var emailInput = getElement("#email_address");
    if (emailInput) {
        emailInput.focus();
    }
});
