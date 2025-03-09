import './style.css'
import { getFetch } from "./getFetch.js";

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Artworks</h1>
    <div id="artworks"></div>
    <a href="pages/artists.html">View Artists</a>
  </div>
`

document.addEventListener("DOMContentLoaded", async () => {
    const artworksContainer = document.getElementById("artworks");
    const artworks = await getFetch("artworks");

    artworks.forEach(artwork => {
        const artElement = document.createElement("div");
        artElement.innerHTML = `
            <h2>${artwork.title}</h2>
            <p>Artist: ${artwork.artist_display || "Unknown"}</p>
            <img src="https://www.artic.edu/iiif/2/${artwork.image_id}/full/200,/0/default.jpg" alt="${artwork.title}">
        `;
        artworksContainer.appendChild(artElement);
    });
});