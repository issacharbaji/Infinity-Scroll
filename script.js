const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArrays = [];

// Unsplash API
const count = 10;
const apiKey = `cDYXbj-rWaQQ74dCt3wFqhzlqsk--3oRaYJ-1k2qhfw`;
const api = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from unspalsh api
async function getPhotos() {
    try {
        const response = await fetch(api);
        photosArrays = await response.json();
        console.log(photosArrays);
    }
    catch (error) {
        // Catch ERROR
    }
}

// On Load

getPhotos();