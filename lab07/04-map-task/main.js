// initialize the map:
const map = L.map('map');
map.setView([35.5362825, -82.5654144], 10);

// add the tile layer to the map:
const currentTileLayer = L.tileLayer(watercolor, {
  attribution: '&copy; Open Street Map contributors',
}).addTo(map);

// retrieve the landmarks from Google Sheets:
const detailsElement = document.querySelector('#details');
async function getChartData() {
  // TODO: change the sheet name to the name of your sheet
  const sheetName = 'AvaLandmarks';
  const response = await fetch(
    `https://script.google.com/macros/s/AKfycbzcOnqzvg3ajtKVALrY_bvc5qo6bvYhwVYgPM7KNKU-3t2mG2YJRrFl4rwDmPxx0ZI78g/exec?sheet=${sheetName}`
  );
  const landmarks = await response.json();
  console.log('serverData: ', landmarks);
  return landmarks;
}

function getIcon(color, icon) {
  return L.divIcon({
      html: `
          <div style="background-color: ${color}" class="map-marker">
              ${icon}
          </div>
      `,
      iconSize: [50, 50],
      iconAnchor: [25, 25],
  });
}

async function generateMarkers() {
  const landmarks = await getChartData();

  // Add markers for each landmark
  for (const landmark of landmarks) {
    // Create marker:
    const marker = L.marker(
      [landmark.lat, landmark.lng],
      {
        icon: getIcon(landmark.color, landmark.icon),  // here is the place where you override the default marker with your own custom style
      }
      ).addTo(map);

    marker.bindPopup(getPopupTemplate(landmark));
    marker.on('click', function (e) {
      detailsElement.innerHTML = getPanelTemplate(landmark);
    });
  }

  detailsElement.innerHTML = '';
}

function getPopupTemplate(landmark) {
  return `
        <div>
            ${landmark.icon} ${landmark.name}<br>
        </div>
    `;
}

function getPanelTemplate(landmark) {
  return `
      <div>
          <div class="emoji">${landmark.icon}</div>
          <h3>${landmark.name}</h3>
          <p class="tag">
            ${landmark.category.replace('_', ' ')}
          </p>
          <p>
            <strong>Coordinates:</strong> ${landmark.lat.toFixed(4)}, ${landmark.lng.toFixed(4)}
          </p>
      </div>
      `;
}

generateMarkers();
