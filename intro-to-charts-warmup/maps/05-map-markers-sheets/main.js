// take a look at the tilesets.js file to see the available tilesets:
const toner = 'https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}{r}.png';

const map = L.map('map');
map.setView([35.5362825, -82.5654144], 10);

const currentTileLayer = L.tileLayer(toner, {
  attribution: '&copy; Open Street Map contributors',
}).addTo(map);

// retrieve the landmarks from Google Sheets:
async function getChartData() {
  const sheetName = 'Landmarks';
  const response = await fetch(
    `https://script.google.com/macros/s/AKfycbzcOnqzvg3ajtKVALrY_bvc5qo6bvYhwVYgPM7KNKU-3t2mG2YJRrFl4rwDmPxx0ZI78g/exec?sheet=${sheetName}`
  );
  const landmarks = await response.json();
  console.log('serverData: ', landmarks);
  return landmarks;
}

async function generateMarkers() {
  const landmarks = await getChartData();

  // Add markers for each landmark
  for (const landmark of landmarks) {
    // Create marker with popup
    L.marker([landmark.lat, landmark.lng]).addTo(map).bindPopup(landmark.name);
  }
}

generateMarkers();
