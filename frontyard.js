
// var map = L.map('map').setView([0, 0], 1);
var map = L.map('map');//.setView([0, 0], 1); // WB: setView didn't seem to be necessary here

var bounds = [[-70, 0], [70, 280]];
L.imageOverlay('frontyard.jpg', bounds).addTo(map);
map.fitBounds(bounds);


// Notes about the coordinates:
// - The x-coordinate is horizontal, ranging from 0 to 280.
//   - This is determined by the 0 and 280 values in the bounds.
// - The y-coordinate is vertical, ranging from -70 to 70.
//   - This is determined by the -70 and 70 values in the bounds.
//     The maximum values that could be used are -85 and 85 (if you want this 500 was a good value rather than 280).
//   - The y-coordinate is not linear.This is how the earth latitude works.
//     Was chosen maximize the space, while keeping the range as linear as possible.

var roseBushes = [

  {x: 246, y: 57, type: 'R18', image: 'rose-images/R18BL.jpg'},
  {x: 251, y: 51, type: 'R19', image: 'rose-images/R19BL.jpg'},
  {x: 261, y: 46, type: 'R20', image: 'rose-images/R20BL.jpg'},
  {x: 249, y: 40, type: 'R21', image: 'rose-images/R21BL.jpg'},
  {x: 242, y: 34, type: 'R22', image: 'rose-images/R22BL.jpg'},
  {x: 234, y: 22, type: 'R23', image: 'rose-images/R23BL.jpg'},
  {x: 257, y: 25, type: 'R24', image: 'rose-images/R24BL.jpg'},
  {x: 229, y: 1, type: 'R25', image: 'rose-images/R25BL.jpg'},
  {x: 253, y: 5, type: 'R26', image: 'rose-images/R26BL.jpg'},
  {x: 205, y: -4, type: 'R27', image: 'rose-images/R27BL.jpg'},
  {x: 197, y: -18, type: 'R28', image: 'rose-images/R28BL.jpg'},
  {x: 193, y: -32, type: 'R29', image: 'rose-images/R29BL.jpg'},
  {x: 222, y: -21, type: 'R30', image: 'rose-images/R30BL.jpg'},
  {x: 245, y: -26, type: 'R31', image: 'rose-images/R31BL.jpg'},
  {x: 208, y: -42, type: 'R32', image: 'rose-images/R32BL.jpg'},
  {x: 228, y: -41, type: 'R33', image: 'rose-images/R33BL.jpg'},
  {x: 248, y: -41, type: 'R34', image: 'rose-images/R34BL.jpg'},
  {x: 129, y: -42, type: 'R35', image: 'rose-images/R35BL.jpg'},
  {x: 131, y: -33, type: 'R36', image: 'rose-images/R36BL.jpg'},
  {x: 125, y: -21, type: 'R37', image: 'rose-images/R37BL.jpg'},
  {x: 136, y: -8, type: 'R38', image: 'rose-images/R38BL.jpg'},
  {x: 129, y: 5, type: 'R39', image: 'rose-images/R39BL.jpg'},
  {x: 142, y: 12, type: 'R40', image: 'rose-images/R40BL.jpg'},
  {x: 138, y: 23, type: 'R41', image: 'rose-images/R41BL.jpg'},
  {x: 152, y: 31, type: 'R42', image: 'rose-images/R42BL.jpg'},
  {x: 157, y: 48, type: 'R43', image: 'rose-images/R43BL.jpg'},
  {x: 162, y: 57, type: 'R44', image: 'rose-images/R44BL.jpg'},
  {x: 139, y: 43, type: 'R45', image: 'rose-images/R45BL.jpg'},
  {x: 126, y: 49, type: 'R46', image: 'rose-images/R46BL.jpg'},
  {x: 117, y: 38, type: 'R47', image: 'rose-images/R47BL.jpg'},
  {x: 111, y: 48, type: 'R48', image: 'rose-images/R48BL.jpg'},
  {x: 100, y: 56, type: 'R49', image: 'rose-images/R49BL.jpg'},
  {x: 92, y: 46, type: 'R50', image: 'rose-images/R50BL.jpg'},
  {x: 74, y: 50, type: 'R51', image: 'rose-images/R51BL.jpg'},
  {x: 64, y: 38, type: 'R52', image: 'rose-images/R52BL.jpg'},
  {x: 44, y: 25, type: 'R53', image: 'rose-images/R53BL.jpg'},
  {x: 28, y: 22, type: 'R54', image: 'rose-images/R54BL.jpg'},
  {x: 40, y: 37, type: 'R55', image: 'rose-images/R55BL.jpg'},
  {x: 36, y: 48, type: 'R56', image: 'rose-images/R56BL.jpg'},
  {x: 19, y: 44, type: 'R57', image: 'rose-images/R57BL.jpg'},
  {x: 33, y: 57, type: 'R58', image: 'rose-images/R58BL.jpg'},
  {x: 15, y: 55, type: 'R59', image: 'rose-images/R59BL.jpg'},
  {x: 52, y: -11, type: 'R60', image: 'rose-images/R60BL.jpg'},
  {x: 63, y: -13, type: 'R61', image: 'rose-images/R61BL.jpg'},
  {x: 66, y: -25, type: 'R62', image: 'rose-images/R62BL.jpg '},
  {x: 56, y: -31, type: 'R63', image: 'rose-images/R63BL.jpg'},
  {x: 44, y: -30, type: 'R64', image: 'rose-images/R64BL.jpg'},
  {x: 39, y: -25, type: 'R65', image: 'rose-images/R65BL.jpg'},
  {x: 44, y: -20, type: 'R66', image: 'rose-images/R66BL.jpg'},
  {x: 40, y: -13, type: 'R67', image: 'rose-images/R67BL.jpg'},
  {x: 16, y: -67, type: 'R68', image: 'rose-images/R68BL.jpg'},
];

roseBushes.forEach(function(bush) {
  var icon = blueIcon;
  // when image does not exist, show red icon
  if (!imageExists(bush.image)) {
    icon = redIcon;
  }

  var marker = L.marker([bush.y, bush.x], {icon: icon}).addTo(map);

  //marker.bindPopup(
    //'<h3>' + bush.type + '</h3><img src="' + bush.image + '" class="popup" style="width:260px;max-width:90vw;max-height:70vh;object-fit:contain;">',
    //{ maxWidth: 470, maxHeight: 400 }
  //);
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



// ---------------------------------------------------------
// ---------------------------------------------------------
// Playground below
// ---------------------------------------------------------
// ---------------------------------------------------------



// WB: BEG Adding a temporary draggable marker for ease of finding coordinates
var tempMarker = L.marker([40, 100], {draggable: true, icon: draggableIcon}).addTo(map);
tempMarker.bindPopup('Drag me! :D');
tempMarker.on('dragend', function(e) {
  // This is logged to the console so you can see the coordinates of the marker after dragging
    console.log('Marker dragged to: ' + e.target.getLatLng());
});
// WB: END temporary draggable marker


// WB: Example of custom image for the marker
// var icon = L.icon({
//   iconUrl: 'rose-images/R36BL.jpg',
//   iconSize: [41, 41], // size of the icon
//   iconAnchor: [20.5, 41], // point of the icon which will correspond to marker's location
//   popupAnchor: [0, -41] // point from which the popup should open relative to the iconAnchor
// });
// var tempMarker = L.marker([40, 100], {draggable: true, icon: icon}).addTo(map);
// tempMarker.bindPopup('Drag me! :D');
