// Variables
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.createElement("img");
const imgButton = document.querySelector("#img-btn");
let imgsArray = [];

// Request data from API
const getImage = async () => {
    const response = await fetch("https://picsum.photos/v2/list?limit=1000");
    const images = await response.json();
    selectRandomImage(images);
    // console.log(images); // Array of Picture objects
};

// Select an image
const selectRandomImage = function (images) {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    displayImage(randomImage);
    // console.log(randomImage); // Picture object
};

// Show image and author name
let imageAddress;
const displayImage = function (randomImage) {
    const author = randomImage.author;
    
    // pic url
    imageAddress = randomImage.download_url;
    authorSpan.innerText = author;
    
    imgDiv.appendChild(img);
    img.src = imageAddress;
    // console.log(imageAddress);
};

window.onload = getImage();

imgButton.addEventListener("click", () => {
    getImage();
});





