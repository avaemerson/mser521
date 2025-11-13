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
    L.marker([landmark.lat, landmark.lng], {
      icon: getIcon(landmark.color, landmark.icon),
    })
      .addTo(map)
      .bindPopup(landmark.name)
      .on('click', function (e) {
        const detailsElement = document.querySelector('#details');
        detailsElement.innerHTML = getTemplate(landmark);
      });
  }
}

function getTemplate(landmark) {
  return `
      <div>
          <div class="emoji">${landmark.icon}</div>
          <h3 style="margin: 0 0 5px 0;">${landmark.name}</h3>
          <p style="margin: 0; font-size: 12px; color: #666;">
          Type: ${landmark.category.replace('_', ' ').toUpperCase()}
          </p>
          <img src="${landmark.online_image}" />
          <p style="margin: 5px 0 0 0; font-size: 11px; color: #999;">
          ${landmark.lat.toFixed(4)}, ${landmark.lng.toFixed(4)}
          </p>
      </div>
      `;
}

function getIcon(color, icon) {
  return L.divIcon({
    className: 'custom-div-icon',
    html: `<div style="background-color: ${color}"
      class="map-marker">${icon}</div>`,
    iconSize: [50, 50],
    iconAnchor: [25, 25],
  });
}

generateMarkers();
