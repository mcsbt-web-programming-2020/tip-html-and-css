"use strict";


// validate email contains an @ sign.  If it doesn't, make the border red
let email = document.querySelector("#email");

let validateEmail = (e) => {
    console.log(e.target.value);
};

email.addEventListener("keyup", validateEmail);
// validate telephone only contains numbers.  If it doesn't, make the border red
// validate city == Madrid.  If it doesn't, make the border red
