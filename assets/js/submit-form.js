/* Save Button */
const saveButton = document.querySelector("#save-btn");
const saveSection = document.querySelector(".save-image");
saveOpen = false;

// Toggle saveButton
saveButton.addEventListener("click", () => {
    if(!saveOpen) {
        // Open
        saveSection.classList.remove("hidden");
        saveOpen = true;
    } else {
        // Close
        saveSection.classList.add("hidden");
         saveOpen = false;
    }
});

/* Email Validation */
const submitForm = document.querySelector("#submitForm"),
    email = document.querySelector("#email"),
    error = document.querySelector(".error-icon"),
    success = document.querySelector(".success-icon"),
    errorText = document.querySelector(".error-text"),
    submit = document.querySelector(".submit-btn");


let regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function check() {
    // Change colour when checking email
    if (email.value.match(regEx) && email.value.length <= 30) {
        email.style.borderColor = "#48bb78";
        error.style.display = "none";
        success.style.display = "block";
        // errorText.style.display = "none";
        submit.style.display = "block";
    }else {
        email.style.borderColor = "#d32752";
        error.style.display = "block";
        success.style.display = "none";
        // errorText.style.display = "block";
        submit.style.display = "none";
    }
    // Remove error checks when empty
    if (email.value == "") {
        email.style.borderColor = "lightgrey";
        error.style.display = "none";
        success.style.display = "none";
        // errorText.style.display = "none";
        submit.style.display = "none";
    }
}

// Save Email when clicked
submitForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(submit);
    
    // save email input
});
