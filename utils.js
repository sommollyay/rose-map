// utils.js
// Function to check if an image exists
function imageExists(imageUrl) {
  var baseUrl = '';
  if (window.location.protocol === "file:") {
    // override to remote url to avoid CORS issues when running locally
    // This is necessary because browsers block local file requests for security reasons
    baseUrl = 'https://sommollyay.github.io/rose-map/';
  }
  var http = new XMLHttpRequest();
  http.open('HEAD', baseUrl + imageUrl, false);
  http.send();
  return http.status !== 404;
}

var blueIcon = new L.Icon({
	iconUrl: 'icons/marker-icon-2x-blue.png',
	shadowUrl: 'icons/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

var redIcon = new L.Icon({
	iconUrl: 'icons/marker-icon-2x-red.png',
	shadowUrl: 'icons/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

var draggableIcon = new L.Icon({
    iconUrl: 'icons/draggable-marker-icon.png',
    shadowUrl: 'icons/marker-shadow.png',
    iconSize: [25, 41], // size of the icon
    iconAnchor: [12.5, 41], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -41], // point from which the popup should open relative to the iconAnchor
	popupAnchor: [1, -34],
    shadowSize: [41, 41]});
