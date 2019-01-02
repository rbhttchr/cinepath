/*
*   Route animation based on actual film locations of
*   Frances Ha by Noah Baumbach in 2013 using Google
*   Maps API.
*
*   Solid line indicates walk;
*   Dashed line indicates jumps;
*
*/

var map;

async function initMap() {
       map = new google.maps.Map(document.getElementById('map'), {
         zoom: 12,
         disableDefaultUI: true,
         center: new google.maps.LatLng(40.761494, -73.977643),
         styles: [
		         {elementType: 'geometry', stylers: [{color: '#212121'}]},
		         {elementType: 'labels.icon', stylers: [{visibility: 'off'}]},
             {elementType: 'labels.text.stroke', stylers: [{color: '#212121'}]},
             {elementType: 'labels.text.fill', stylers: [{color: '#757575'}]},
		         {featureType: 'administrative', elementType:"geometry", stylers: [{color: '#757575'}]},
		         {featureType: 'administrative.country', elementType:"labels.text.fill", stylers: [{color: '#9e9e9e'}]},
		         {featureType: 'administrative.land_parcel', stylers: [{visibility: 'off'}]},
	           {featureType: 'administrative.land_parcel', elementType:"labels", stylers: [{visibility: 'off'}]},
		         {featureType: 'administrative.locality', elementType: 'labels.text.fill', stylers: [{color: '#bdbdbd'}]},
		         {featureType: 'poi', elementType: 'labels.text', stylers: [{visibility: 'off'}]},
             {featureType: 'poi', elementType: 'labels.text.fill', stylers: [{color: '#757575'}]},
		         {featureType: 'administrative.land_parcel', stylers: [{visibility: 'off'}]},
		         {featureType: 'poi.business', stylers: [{visibility: 'off'}]},
             {featureType: 'poi.park', elementType: 'geometry', stylers: [{color: '#181818'}]},
             {featureType: 'poi.park', elementType: 'labels.text.fill', stylers: [{color: '#616161'}]},
		         {featureType: 'poi.park', elementType: 'labels.text.stroke', stylers: [{color: '#1b1b1b'}]},
             {featureType: 'road', elementType: 'geometry.fill', stylers: [{color: '#2c2c2c'}]},
		         {featureType: 'road', elementType: 'labels.icon', stylers: [{visibility: 'off'}]},
             {featureType: 'road', elementType: 'labels.text.fill', stylers: [{color: '#8a8a8a'}]},
             {featureType: 'road.arterial', elementType: 'geometry', stylers: [{color: '#373737'}]},
		         {featureType: 'road.arterial', elementType: 'labels', stylers: [{visibility: 'off'}]},
             {featureType: 'road.highway', elementType: 'geometry', stylers: [{color: '#3c3c3c'}]},
		         {featureType: 'road.highway', elementType: 'labels', stylers: [{visibility: 'off'}]},
             {featureType: 'road.highway.controlled_access', elementType: 'geometry', stylers: [{color: '#4e4e4e'}]},
		         {featureType: 'road.local', stylers: [{visibility: 'off'}]},
		         {featureType: 'road.local', elementType: 'labels', stylers: [{visibility: 'off'}]},
	           {featureType: 'road.local', elementType: 'labels.text.fill', stylers: [{color: '#616161'}]},
   		       {featureType: 'transit', stylers: [{visibility: 'off'}]},
             {featureType: 'transit', elementType: 'labels.text.fill', stylers: [{color: '#757575'}]},
             {featureType: 'water', elementType: 'geometry', stylers: [{color: '#000000'}]},
             {featureType: 'water', elementType: 'labels.text.fill', stylers: [{color: '#3d3d3d'}]}
         ]
       });

       getDirections1(map);     // 190

       setTimeout(function(){
         jump1(map);            // 50 + 1720
       }, 190);

       setTimeout(function(){
         getDirections2(map);   // 460
       }, 1960);

       setTimeout(function(){
         jump2(map);            // 50
       }, 2010);

}

/* Travel Modes Abandoned
*  Tuning paramter is no witchcraft but mathmatics.
*/
function route1(map, pathCoords) {
    var route = new google.maps.Polyline({
        path: [],
        geodesic : true,
        strokeColor: '#f45898',
        strokeOpacity: 0.5,
        strokeWeight: 5,
        editable: false,
        map:map
    });
//    console.log(pathCoords.length);
    for (var i = 0; i < pathCoords.length; i++) {
        setTimeout(function(coords) {
            route.getPath().push(coords);
        }, 5 * i, pathCoords[i]);
    }
}

function route2(map, pathCoords) {
    var route = new google.maps.Polyline({
        path: [],
        geodesic : true,
        strokeColor: '#f45898',
        strokeOpacity: 0.5,
        strokeWeight: 5,
        editable: false,
        map:map
    });
    console.log(pathCoords.length);
    for (var i = 0; i < pathCoords.length; i++) {
        setTimeout(function(coords) {
            route.getPath().push(coords);
        }, 3 * i, pathCoords[i]);
    }
}

function route3(map, pathCoords) {
    var route = new google.maps.Polyline({
        path: [],
        geodesic : true,
        strokeColor: 'white',
        strokeOpacity: 0.5,
        strokeWeight: 5,
        editable: false,
        map:map
    });

    for (var i = 0; i < pathCoords.length; i++) {
        setTimeout(function(coords) {
            route.getPath().push(coords);
        }, 23 * i, pathCoords[i]);
    }
}

function route4(map, pathCoords) {
    var route = new google.maps.Polyline({
        path: [],
        geodesic : true,
        strokeColor: 'white',
        strokeOpacity: 0.5,
        strokeWeight: 5,
        editable: false,
        map:map
    });

    for (var i = 0; i < pathCoords.length; i++) {
        setTimeout(function(coords) {
            route.getPath().push(coords);
        }, 2.3 * i, pathCoords[i]);
    }
}

function route5(map, pathCoords) {
    var route = new google.maps.Polyline({
        path: [],
        geodesic : true,
        strokeColor: 'white',
        strokeOpacity: 0.5,
        strokeWeight: 5,
        editable: false,
        map:map
    });

    for (var i = 0; i < pathCoords.length; i++) {
        setTimeout(function(coords) {
            route.getPath().push(coords);
        }, 12 * i, pathCoords[i]);
    }
}


function route6(map, pathCoords) {
    var route = new google.maps.Polyline({
        path: [],
        geodesic : true,
        strokeColor: 'white',
        strokeOpacity: 0.5,
        strokeWeight: 5,
        editable: false,
        map:map
    });

    for (var i = 0; i < pathCoords.length; i++) {
        setTimeout(function(coords) {
            route.getPath().push(coords);
        }, 10 * i, pathCoords[i]);            // playing safe
    }
}

// Opening Montages 0:29
function getDirections1(map) {
    var directionsService = new google.maps.DirectionsService();
    var request = {
              origin: new google.maps.LatLng(40.727017, -73.981311),         // Tompkins Square Park
              waypoints: [
                {location: new google.maps.LatLng(40.726919, -73.981906)},   // Tompkins Square Park
                {location: new google.maps.LatLng(40.726097, -73.982609)},   // Tompkins Square Park
                {location: new google.maps.LatLng(40.722859, -73.988950)},   // Oliva Restaurant
              ],
              destination: new google.maps.LatLng(40.722859, -73.988950),   // Broadway Station
              travelMode: google.maps.TravelMode.WALKING
          };
    directionsService.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            route1(map, result.routes[0].overview_path);
        }
    });
}

// Montages Continues
function jump1(map) {
  var lineSymbol = {
    path: 'M 0,-1 0,1',
    strokeOpacity: 0.5,
    scale: 4
  };

  var line = new google.maps.Polyline({
    path: [],
    geodesic: true,
    strokeColor: '#f45898',
    strokeOpacity: 0,
    strokeWeight: 5,
    editable: false,
    icons: [{
            icon: lineSymbol,
            offset: '0',
            repeat: '20px'
          }],
    map:map
  });

  var locations = [{lat: 40.722859, lng: -73.988950},    // Boardway Station
                   {lat: 40.675747, lng: -73.969796},    // Apartment w/ Sophie
                   {lat: 40.677402, lng: -73.969178},    // Laundromat
                   {lat: 40.675747, lng: -73.969796}     // Apartment w/ Sophie
                 ];

  for (var i = 0; i < locations.length; i++) {
    setTimeout(function(coords) {
        latlng = new google.maps.LatLng(coords.lat, coords.lng);
//        map.panTo(latlng);
        line.getPath().push(latlng);
    }, 17 * i, locations[i]);
  }
}

// Frances' Boyfriend Apartment Missing

// Party and Home 6:03
function getDirections2(map) {
    var directionsService = new google.maps.DirectionsService();
    var request = {
              origin: new google.maps.LatLng(40.713044, -73.997381),             // Party
              waypoints: [
                {location: new google.maps.LatLng(40.713284, -73.990005)},     // Chinatown
                {location: new google.maps.LatLng(40.714625, -73.989926)},     // East Boardway F Train
                {location: new google.maps.LatLng(40.704115, -73.988801)}     // Manhattan Bridge
              ],
              destination: new google.maps.LatLng(40.675747, -73.969796),      // Apartment w/ Sophie
  //            destination: 'Chicago, IL',
              travelMode: google.maps.TravelMode.DRIVING
          };

    directionsService.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            route2(map, result.routes[0].overview_path);
        }
    });
}

// Dance Company 10:19
function jump2(map) {
  var lineSymbol = {
    path: 'M 0,-1 0,1',
    strokeOpacity: 0.5,
    scale: 4
  };

  var line = new google.maps.Polyline({
    path: [],
    geodesic: true,
    strokeColor: '#f45898',
    strokeOpacity: 0,
    strokeWeight: 5,
    editable: false,
    icons: [{
            icon: lineSymbol,
            offset: '0',
            repeat: '20px'
          }],
    map:map
  });

  var locations = [{lat: 40.675747, lng: -73.969796},    // Apartment w/ Sphoie
                   {lat: 40.714404, lng: -74.005954},    // Dance Company
                 ];

  for (var i = 0; i < locations.length; i++) {
    setTimeout(function(coords) {
      latlng = new google.maps.LatLng(coords.lat, coords.lng);
//        map.panTo(latlng);
      line.getPath().push(latlng);
    }, 50 * i, locations[i]);
  }
}


// Travis in LA 37:58
function getDirections3(map) {
    var directionsService = new google.maps.DirectionsService();
    var request = {
              origin: new google.maps.LatLng(34.219878, -118.350022),      // Walter's Home
              waypoints: [
                {location: new google.maps.LatLng(34.219730, -118.350115)},     // Backyard
                {location: new google.maps.LatLng(34.198446, -118.321350)},     // Hunter's School
                {location: new google.maps.LatLng(34.219878, -118.350022)},     // Walter's Home
                {location: new google.maps.LatLng(34.198446, -118.321350)},     // Hunter's School
                {location: new google.maps.LatLng(34.220059, -118.348308)},     // Walking home midpoint
                {location: new google.maps.LatLng(34.219878, -118.350022)},     // Walter's home
                {location: new google.maps.LatLng(34.219730, -118.350115)},     // Backyard
                {location: '13795 Balboa Blvd, Sylmar, CA 91342'}               // Travis Nightwalking
              ],
              destination: new google.maps.LatLng(34.198446, -118.321350),      // Hunter's School
              travelMode: google.maps.TravelMode.WALKING
          };

    directionsService.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            route3(map, result.routes[0].overview_path);
        }
    });
}

// Father and Son Driving 1:15:09
function getDirections4(map) {
    var directionsService = new google.maps.DirectionsService();
    var request = {
              origin: new google.maps.LatLng(34.198446, -118.321350),      // Hunter's School
              waypoints: google.maps.LatLng(34.490968, -118.203032),      // Hunter about Universe
              destination: new google.maps.LatLng(33.919858, -116.773296),      // Payphone
  //            destination: 'Chicago, IL',
              travelMode: google.maps.TravelMode.DRIVING
          };

    directionsService.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            route4(map, result.routes[0].overview_path);
        }
    });
}



// Travis and Hunter to Texas 1:22:25 - 1:34:57
function getDirections5(map) {
    var directionsService = new google.maps.DirectionsService();
    var request = {
              origin: new google.maps.LatLng(33.919858, -116.773296),      // Father and Son in Hotel
              waypoints: [
                {location: new google.maps.LatLng(29.764011, -95.362674)},     // Chase Bank Drive Up
                {location: new google.maps.LatLng(29.871551, -93.934962)},     // Port Auther
                {location: new google.maps.LatLng(29.871065, -93.934972)}     // Travis enters building
              ],
              destination: new google.maps.LatLng(29.871193, -93.935046),      // Keyhole Klub
              travelMode: google.maps.TravelMode.DRIVING
          };

    directionsService.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            route5(map, result.routes[0].overview_path);
        }
    });
}

// First Vist at Keyhole Klub 13'07

// Travis leaves Keyhole Klub 1:48:04 - 1:58:54
function getDirections6(map) {
    var directionsService = new google.maps.DirectionsService();
    var request = {
              origin: new google.maps.LatLng(29.871193, -93.935046),      // Keyhole Klub
              waypoints: [
                {location: new google.maps.LatLng(28.921138, -97.609307)},     // Westhoff ??? Nordheim
                {location: new google.maps.LatLng(28.921919, -97.610754)},     // Broadway Bar
                {location: new google.maps.LatLng(28.922325, -97.610163)},     // Grocery
                {location: new google.maps.LatLng(29.757957, -95.371180)}       // DoubleTree Houston Downtown
              ],
              destination: new google.maps.LatLng(29.871193, -93.935046),      // Keyhole Klub
              travelMode: google.maps.TravelMode.DRIVING
          };

    directionsService.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            route6(map, result.routes[0].overview_path);
        }
    });
}

// The Famouse Scene 20'46

// Mother and Son Reunion 2:19:40
function jump3(map) {
  var lineSymbol = {
    path: 'M 0,-1 0,1',
    strokeOpacity: 0.5,
    scale: 4
  };

  var line = new google.maps.Polyline({
    path: [],
    geodesic: true,
    strokeColor: 'white',
    strokeOpacity: 0,
    strokeWeight: 5,
    editable: false,
    icons: [{
            icon: lineSymbol,
            offset: '0',
            repeat: '20px'
          }],
    map:map
  });

  var locations = [{lat: 29.758249, lng: -95.369281},    // Downtown Parking Garage
                   {lat: 29.757957, lng: -95.371180},    // DoubleTree Houston Downtown
                   {lat: 29.758249, lng: -95.369281}    // Downtown Parking Garage
                 ];

  for (var i = 0; i < locations.length; i++) {
    setTimeout(function(coords) {
      latlng = new google.maps.LatLng(coords.lat, coords.lng);
//        map.panTo(latlng);
      line.getPath().push(latlng);
    }, 100 * i, locations[i]);        // playing safe
  }
}




google.maps.event.addDomListener(window, 'load', initMap);
