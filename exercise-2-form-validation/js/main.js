"use strict";


// validate email contains an @ sign.  If it doesn't, make the border red
let email = document.querySelector("#email");

let validateEmail = (e) => {
    let currentEmail = e.target.value;

    if (!currentEmail.includes("@")) {
        email.classList.add("wrong");
    } else {
        email.classList.remove("wrong");
    }
};

email.addEventListener("keyup", validateEmail);

// validate telephone only contains numbers.  If it doesn't, make the border red
let telephone = document.querySelector("#telephone");

let validateTelephone = (e) => {
    let telephoneRegex = /^[0-9]$/;
    let currentTelephone = e.target.value;

    if (!currentTelephone.match(telephoneRegex)) {
        telephone.classList.add("wrong");
    } else {
        telephone.classList.remove("wrong");
    }
};

telephone.addEventListener("keyup", validateTelephone);



// validate city == Madrid.  If it doesn't, make the border red
