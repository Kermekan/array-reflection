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

function validate() {
    // Change colour when checking email
    if (email.value.match(regEx) && email.value.length <= 30) {
        email.style.borderColor = "#48bb78";
        error.style.display = "none";
        success.style.display = "block";
        errorText.style.display = "none";
        submit.style.display = "block";
    }else {
        email.style.borderColor = "#d32752";
        error.style.display = "block";
        success.style.display = "none";
        submit.style.display = "none";
    }
    // Remove error checks when empty
    if (email.value == "") {
        email.style.borderColor = "lightgrey";
        error.style.display = "none";
        success.style.display = "none";
        submit.style.display = "none";
    }
}

/* ---------------------- Print Saved emages to emails ---------------------- */
function printList() {
    listImg();
    output.innerHTML = `<ul class="list-container flex">${listImg()}</ul>`;
    getImage();
}

// Output Creator
function listImg() {
    emailList = "";
    for ( let i = 0; i < imgsArray.length; i++ ){
        emailList += `
        <li class="item-list"><h3>${imgsArray[i][0]}</h3>
            <ul class="img-list flex">${innerList(i)}</ul>
        </li>`
    }
    return emailList;
}
function innerList(i) {
    imgList = "";
    for ( let j = 0; j < imgsArray[i][1].length; j++ ) {
        imgList += `<li class="img-container"><img src="${imgsArray[i][1][j]}"></li>`
    }
    return imgList;
}

// Show img next to emails
submitForm.addEventListener("submit", function(e) {
    e.preventDefault();

    let savedEmails = [];
    let thisImage = img.src;
    // console.log(thisImage);
    
    // Only run if email is valid
    if (!email.value.match(regEx) && email.value.length <= 30) {
        errorText.style.display = "block";        
    } else {
        // Store saved emails
        for ( let i = 0; i < imgsArray.length; i++ ) {
            savedEmails.push(imgsArray[i][0]);
            // console.log(savedEmails);
        }
        
        // Check if email is in array
        if (savedEmails.includes(email.value)) {
            let position = savedEmails.indexOf(email.value);
            if (imgsArray[position][1].includes(thisImage)) {
                getImage();
                return;
            }
            
            // match submitted img with email
            imgsArray[position][1].push(thisImage);
            printList();
            return;
        } else {
            // Add the email and picture to the array
            imgsArray.push([email.value, [thisImage]]);
            output.innerHTML = "New Image Added to Existing Address";
            printList();
        }
    }
});
