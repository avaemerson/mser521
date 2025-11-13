// Some landmarks around Asheville, NC area:
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

// The actual code to make the map work:
const toner = 'https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}{r}.png';

// create the map:
const map = L.map('map');
map.setView([35.5362825, -82.5654144], 10);

// add the tile layer:
const currentTileLayer = L.tileLayer(toner, {
  attribution: '&copy; Open Street Map contributors',
}).addTo(map);

// Loop through the landmarks and add them to the map:
for (const landmark of landmarks) {
  L.marker([landmark.lat, landmark.lng]).addTo(map).bindPopup(getPopupTemplate(landmark));
}

// function to create a custom popup template:
function getPopupTemplate(landmark) {
  return `
    <div style="text-align: center;">
      <div style="font-size:40px;">${landmark.icon}</div>
      <h3 style="margin: 0 0 5px 0;">${landmark.name}</h3>
      <p style="margin: 0; font-size: 12px; color: #666;">
        Type: ${landmark.category.replace('_', ' ').toUpperCase()}
      </p>
    </div>
  `;
}
