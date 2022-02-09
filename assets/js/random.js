// Variables
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");
const imgButton = document.querySelector("#img-btn");

// Request data from API
const getImage = async function () {
    const response = await fetch("https://picsum.photos/v2/list?limit=1000");
    const images = await response.json();
    selectRandomImage(images);
    // console.log(images); // Array of Objects
};

// Select an image
const selectRandomImage = function (images) {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    displayImage(randomImage);
    // console.log(randomImage); // Object
};

// Show image and author name
const displayImage = function (randomImage) {
    const author = randomImage.author;
    // pic url
    imageAddress = randomImage.download_url;
    authorSpan.innerText = author;
    img.src = imageAddress;
    imgDiv.classList.remove("hide");
};

imgButton.addEventListener("click", () => {
    getImage();
});





