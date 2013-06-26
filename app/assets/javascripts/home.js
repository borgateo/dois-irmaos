
function initialize() {
  var myLatlng = new google.maps.LatLng(-3.797036, -38.549854);
  var mapOptions = {
    zoom: 18,
    center: myLatlng,
    panControl: false,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: true,
    streetViewControl: false,
    overviewMapControl: false,
    mapTypeId: google.maps.MapTypeId.HYBRID
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Arraiá do Parque Dois Irmãos'
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

