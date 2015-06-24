var overlays = document.querySelectorAll('.meter_overlay');

for(var i = 0; i < overlays.length; i++) {
  var overlay = overlays[i];
  overlay.parentNode.removeChild(overlay);
}
