const containerEl = document.querySelector('#container');
const searchInput = document.querySelector('#search-input');

async function showTracks() {
  const searchTerm = searchInput.value;
  const url = `https://www.apitutor.org/spotify/simple/v1/search?q=${searchTerm}&type=track&limit=10`;
  const response = await fetch(url);
  const tracks = await response.json();
  console.log(tracks);

//first clear out the container:
containerEl.innerHTML = '';

//then, start adding to it:
  //for (const track of tracks) {
   // containerEl.innerHTML += `
      //<section class="song">
        //<h2>${track.name}</h2>
       // <img src="${track.album.image_url}" alt=${track.name}/>
        //<p>${track.artist.name}</p>
      //</section>
  //`;
 // }

  for (const track of tracks) {
    containerEl.innerHTML += `
    <iframe data-testid="embed-iframe" style="border-radius:12px" 
      src="https://open.spotify.com/embed/track/${track.id}?utm_source=generator" 
      width="100%" height="152" 
      frameBorder="0" allowfullscreen="" 
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
      loading="lazy"></iframe>`;
  }
}
