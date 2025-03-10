import './style.css'
import { getFetch } from "./getFetch.js";

document.addEventListener("DOMContentLoaded", async () => {
    const artworksContainer = document.querySelector("#artworks");
    const artworks = await getFetch("artworks");

    artworks.forEach(artwork => {
      const artElement = document.createElement("div");
      artElement.classList = 'card'
      artElement.innerHTML = `
          <div class="card__content">
            <h2>${artwork.title}</h2>
            <p>Artist: ${artwork.artist_display || "Unknown"}</p>
          </div>
          <div class="card__img">
            <img src="https://www.artic.edu/iiif/2/${artwork.image_id}/full/200,/0/default.jpg" alt="${artwork.title}">
          </div>
        `;
        artworksContainer.appendChild(artElement);
    });
});