
var map = L.map('map').setView([500, 500], 1);

var bounds = [[-85, 0], [85, 500]];
L.imageOverlay('backyard.jpg', bounds).addTo(map);
map.fitBounds(bounds);

var roseBushes = [
  {x: 47, y: -24, type: 'R01', image: 'rose-images/R01BL.jpg'},
  {x: 120, y: 16, type: 'R02', image: 'rose-images/R02BL.jpg'},
  {x: 171, y: 16, type: 'R03', image: 'rose-images/R03BL.jpg'},
  {x: 258, y: -28, type: 'R04', image: 'rose-images/R04BL.jpg'},
  {x: 272, y: -13, type: 'R05', image: 'rose-images/R05BL.jpg'},
  {x: 294, y: -13, type: 'R06', image: 'rose-images/R06BL.jpg'},
  {x: 310, y: -26, type: 'R07', image: 'rose-images/R07BL.jpg'},
  {x: 260, y: 79, type: 'R08', image: 'rose-images/R08BL.jpg'},
  {x: 290, y: 77, type: 'R09', image: 'rose-images/R09BL.jpg'},
  {x: 279, y: 71, type: 'R10', image: 'rose-images/R10BL.jpg'},
  {x: 423, y: 83, type: 'R11', image: 'rose-images/R11BL.jpg'},
  {x: 481, y: 64, type: 'R12', image: 'rose-images/R12BL.jpg'},
  {x: 473, y: 40, type: 'R13', image: 'rose-images/R13BL.jpg'},
  {x: 397, y: 23, type: 'R14', image: 'rose-images/R14BL.jpg'},
  {x: 471, y: -13, type: 'R15', image: 'rose-images/R15BL.jpg'},
  {x: 450, y: -25, type: 'R16', image: 'rose-images/R16BL.jpg'},
  {x: 490, y: -84, type: 'R17', image: 'rose-images/R17BL.jpg'},
];

roseBushes.forEach(function(bush) {
  var icon = blueIcon; // Default icon
  // when image does not exist, show red icon
  if (!imageExists(bush.image)) {
    icon = redIcon;
  }

  var marker = L.marker([bush.y, bush.x], {icon: icon}).addTo(map);
  marker.bindPopup(
    '<h3>' + bush.type + '</h3><img src="' + bush.image + '" class="popup" style="width:260px;max-width:90vw;max-height:70vh;object-fit:contain;">',
    {
      maxWidth: 410,
      maxHeight: 350,
      autoPan: true,
      autoPanPadding: [70, 70], // increased padding to help keep popup in view
      keepInView: true // Leaflet 1.9+ only
    }
  );
});


// WB: BEG Adding a temporary draggable marker for ease of finding coordinates
var tempMarker = L.marker([40, 100], {draggable: true, icon: draggableIcon}).addTo(map);
tempMarker.bindPopup('Drag me! :D');
tempMarker.on('dragend', function(e) {
  // This is logged to the console so you can see the coordinates of the marker after dragging
    console.log('Marker dragged to: ' + e.target.getLatLng());
});
// WB: END temporary draggable marker