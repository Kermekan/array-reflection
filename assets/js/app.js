// Unsplash Authentication
let clientID1 = `jJfXG45PhLjTMzLOiS3SGUpFEdeKps8l_aR52II9oHc`;
let clientID2 = `QOSWVb7G3oM7KDES6MBJkmPYXACfXXvR2vyyaqpKuzQ`;
let endpoint = `https://api.unsplash.com/photos/random/?client_id=${clientID1}`;

let imgElement = document.querySelector("#unsplashImg");
let imgLink = document.querySelector("#imgLink");
let creator = document.querySelector("#creator")
console.log();

fetch(endpoint)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonData) {
        imgElement.src = jsonData.urls.regular;
        imgLink.setAttribute("href", jsonData.links.html);
        creator.innerText = jsonData.user.name;
        creator.setAttribute("href", jsonData.user.portfolio_url);
    })
    // .catch(function (error) {
    //     console.log("Error: " + error);
    // })










