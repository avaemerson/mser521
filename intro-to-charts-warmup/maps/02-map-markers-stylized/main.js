const rhoadesRobinsonHall = [35.61572, -82.56562];
const library = [35.616988, -82.565401];

const map = L.map('map');
map.setView(rhoadesRobinsonHall, 17);

const currentTileLayer = L.tileLayer(toner, {
  attribution: '&copy; Open Street Map contributors',
}).addTo(map);

// add a marker to the map:
L.marker(rhoadesRobinsonHall, {
  icon: getIcon('blue', '🏢'),
}).addTo(map).bindPopup('Rhoades Robinson Hall');

L.marker(library, {
  icon: getIcon('teal', '📚'),
}).addTo(map).bindPopup('Library');

function getIcon(color, icon) {
  return L.divIcon({
    className: 'custom-div-icon',
    html: `<div style="background-color: ${color}"
      class="map-marker">${icon}</div>`,
    iconSize: [50, 50],
    iconAnchor: [25, 25],
  });
}
