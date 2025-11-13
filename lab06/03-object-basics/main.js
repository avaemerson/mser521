const track = {
  id: '3YfS47QufnLDFA71FUsgCM',
  name: 'The Sound of Silence',
  album: {
    id: '0D1OzpaQEeiIMCAm3DUwKa',
    name: 'The Singer',
    image_url: 'https://i.scdn.co/image/ab67616d0000b273dd9e17a2000252d6b79cf904',
  },
  artist: {
    id: '70cRZdQywnSFp9pnc2WTCE',
    name: 'Simon & Garfunkel',
  },
};

// Print the id property of the track object to the console
console.log(track.id);

// Print the name property of the track object to the console
console.log(track.name);

// Print the album name (access the nested album.name property) to the console
console.log(track.album.name);

// Print the artist name (access the nested artist.name property) to the console
console.log(track.artist.name);

// Print the album cover image URL (album.image_url) to the console
console.log(track.album.image_url);

// Create an HTML representation of the track and display it in the DOM element with id="container". Use template literals to include:

// Track name as an <h2>
// Artist name in a <p> tag
// Album name in a <p> tag
// Album cover image using the <img> tag

const template = `
  <div class="track-card">
    <h2>${track.name}</h2>
    <p>Artist: ${track.artist.name}</p>
    <p>Album: ${track.album.name}</p>
    <img src="${track.album.image_url}">
  </div>
`;
const container = document.querySelector("#container");
container.innerHTML = template;