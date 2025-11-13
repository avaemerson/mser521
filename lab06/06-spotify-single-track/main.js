const containerEl = document.querySelector('#container');
const searchInput = document.querySelector('#search-input');

async function showTrack() {
  const searchTerm = searchInput.value;
  const url = `https://www.apitutor.org/spotify/simple/one/v1/search?q=${searchTerm}&type=track`;
  const response = await fetch(url);
  const track = await response.json();
  console.log(track);

  containerEl.innerHTML = `
    <section class="track">
        <h2>${track.name}</h2>
        <img src="${track.album.image_url}" alt=${track.name}/>
        <p>${track.artist.name}</p>
    </section>
  `;

  // TODO: Display the track information to the screen
}
