import './style.css'
import { getFetch } from "./getFetch.js";
document.addEventListener("DOMContentLoaded", async () => {
  const artistsContainer = document.querySelector("#artists");
  const artists = await getFetch("artists");

  artists.forEach(artist => {
    console.log(artist)
    const artistElement = document.createElement("div");
    artistElement.innerHTML = `
          <h1>${artist.title}</h1>
          <h2>Birth: ${artist.birth_date || "N/A"} - Death: ${artist.death_date || "N/A"}</h2>
          <a href="${artist.api_link}">${artist.api_link} </a>
      `;
    artistsContainer.appendChild(artistElement);
  });
});
