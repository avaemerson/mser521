const landmarks = [
  {
    name: 'Blue Ridge Parkway Visitor Center',
    lat: 35.5658059,
    lng: -82.4863211,
    category: 'visitor_center',
    color: '#2E86AB',
    icon: '🏛️',
  },
  {
    name: 'Biltmore Estate',
    lat: 35.5527514,
    lng: -82.5636905,
    category: 'historic_site',
    color: '#A23B72',
    icon: '🏰',
  },
  { name: 'Asheville Art Museum', lat: 35.5946714, lng: -82.5538576, category: 'museum', color: '#F18F01', icon: '🎨' },
  { name: 'Grove Park Inn', lat: 35.61848, lng: -82.5514, category: 'hotel', color: '#C73E1D', icon: '🏨' },
  { name: 'Black Balsam Knob', lat: 35.3278781, lng: -82.9112063, category: 'nature', color: '#2D5016', icon: '🌲' },
  { name: 'River Arts District', lat: 35.5856312, lng: -82.5758296, category: 'arts', color: '#8B5A2B', icon: '🎭' },
  {
    name: 'Chimney Rock State Park',
    lat: 35.4385345,
    lng: -82.2439024,
    category: 'park',
    color: '#4A7C59',
    icon: '🌳',
  },
  {
    name: 'Asheville Brewing Company',
    lat: 35.6221049,
    lng: -82.5583224,
    category: 'restaurant',
    color: '#B8860B',
    icon: '🍺',
  },
  { name: 'French Broad River Park', lat: 35.555, lng: -82.585, category: 'park', color: '#4A7C59', icon: '🌳' },
  { name: 'Pack Square', lat: 35.5952657, lng: -82.5544166, category: 'downtown', color: '#4B0082', icon: '🏢' },
];

// take a look at the tilesets.js file to see the available tilesets:
const toner = 'https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}{r}.png';

const map = L.map('map');
map.setView([35.5362825, -82.5654144], 10);

const currentTileLayer = L.tileLayer(toner, {
  attribution: '&copy; Open Street Map contributors',
}).addTo(map);

// Add markers for each landmark
for (const landmark of landmarks) {
  // Create marker with popup
  L.marker([landmark.lat, landmark.lng], {
    icon: getIcon(landmark.color, landmark.icon),
  })
    .addTo(map)
    .bindPopup(getTemplate(landmark))
    .on('click', function (e) {
      const detailsElement = document.querySelector('#details');
      detailsElement.innerHTML = getTemplate(landmark);
    });
}

function getTemplate(landmark) {
  return `
      <div>
        <div style="font-size:40px;">${landmark.icon}</div>
        <h3 style="margin: 0 0 5px 0;">${landmark.name}</h3>
        <p style="margin: 0; font-size: 12px; color: #666;">
          Type: ${landmark.category.replace('_', ' ').toUpperCase()}
        </p>
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
