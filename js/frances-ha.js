/*
*   Route animation based on actual film locations of
*   Frances Ha by Noah Baumbach in 2013 using Google
*   Maps API.
*
*   Solid line indicates walk, run and transit;
*   Dashed line indicates jumps;
*
*   Waypoints not avaliable for TRANSIT.
*/

var map_nyc, map_sac, map_par;


async function initMap() {
       map_nyc = new google.maps.Map(document.getElementById('map_nyc'), {
         zoom: 12,
         disableDefaultUI: true,
         center: new google.maps.LatLng(40.761494, -73.977643),     // MoMA
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


       map_sac = new google.maps.Map(document.getElementById('map_sac'), {
         zoom: 11,
         disableDefaultUI: true,
         center: new google.maps.LatLng(38.580751, -121.490961),
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


       map_par = new google.maps.Map(document.getElementById('map_par'), {
         zoom: 12,
         disableDefaultUI: true,
         center: new google.maps.LatLng(48.856291, 2.352126),       // Paris
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


       getDirections1(map_nyc);     // 190

       setTimeout(function(){
         jump1(map_nyc);            // 50 + 1720
       }, 190);

       setTimeout(function(){
         getDirections2(map_nyc);   // 460
       }, 1960);

       setTimeout(function(){
         jump2(map_nyc);            // 50 + 1050
       }, 2010);

       setTimeout(function(){
         getDirections3(map_nyc);   //
       }, 3110);

       setTimeout(function(){
         getDirections4(map_nyc);   //
       }, 4000);

       setTimeout(function(){
         getDirections5(map_nyc);   //
       }, 6000);

       setTimeout(function(){
         getDirections6(map_nyc);   //
       }, 6500);

       setTimeout(function(){
         jump3(map_nyc);   //
       }, 7500);

       setTimeout(function(){
         getDirections7(map_nyc);   //
       }, 8000);

       setTimeout(function(){
         jump4(map_nyc);   //
       }, 8500);

       setTimeout(function(){
         getDirections8(map_nyc);   //
       }, 9000);

       setTimeout(function(){
         jump5(map_nyc);   //
       }, 10000);

       setTimeout(function(){
         jump6(map_nyc);
         jump6(map_sac);   //
       }, 12000);

}



// Opening Montages 0:29
function getDirections1(map) {
    var directionsService = new google.maps.DirectionsService();
    var request = {
              origin: new google.maps.LatLng(40.727017, -73.981311),         // Tompkins Square Park
              waypoints: [
                {location: new google.maps.LatLng(40.726919, -73.981906)},   // Tompkins Square Park
                {location: new google.maps.LatLng(40.726097, -73.982609)}   // Tompkins Square Park
              ],
              destination: new google.maps.LatLng(40.722859, -73.988950),   // Oliva Restaurant
              travelMode: google.maps.TravelMode.WALKING
          };
    directionsService.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            route1(map, result.routes[0].overview_path);
        }
    });
}

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
                   {lat: 40.675747, lng: -73.969796},    // Apt w/ Sophie
                   {lat: 40.677402, lng: -73.969178},    // Laundromat
                   {lat: 40.675747, lng: -73.969796}     // Apt w/ Sophie
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
              origin: new google.maps.LatLng(40.713044, -73.997381),            // Party
              waypoints: google.maps.LatLng(40.713284, -73.990005),             // Chinatown
              destination: new google.maps.LatLng(40.714625, -73.989926),       // East Boardway F Train
  //            destination: 'Chicago, IL',
              travelMode: google.maps.TravelMode.DRIVING
          };

    directionsService.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            route2(map, result.routes[0].overview_path);
        }
    });
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

// Taxi Home 6:46
function getDirections3(map) {
    var directionsService = new google.maps.DirectionsService();
    var request = {
              origin: new google.maps.LatLng(40.714625, -73.989926),            // East Broadway F Train
              waypoints: google.maps.LatLng(40.704115, -73.988801),             // Manhattan Bridge
              destination: new google.maps.LatLng(40.675747, -73.969796),       // Apt w/ Sophie
  //            destination: 'Chicago, IL',
              travelMode: google.maps.TravelMode.DRIVING
          };

    directionsService.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            route3(map, result.routes[0].overview_path);
        }
    });
}

function route3(map, pathCoords) {
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
        }, 5 * i, pathCoords[i]);
    }
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
                   {lat: 40.714404, lng: -74.005954},    // Dance New Amsterdam
                 ];

  for (var i = 0; i < locations.length; i++) {
    setTimeout(function(coords) {
      latlng = new google.maps.LatLng(coords.lat, coords.lng);
//        map.panTo(latlng);
      line.getPath().push(latlng);
    }, 50 * i, locations[i]);
  }
}

// Work 10:19 - 13:00

// Find Sophie at Work 13:00
function getDirections4(map) {
    var directionsService = new google.maps.DirectionsService();
    var request = {
              origin: new google.maps.LatLng(40.714404, -74.005954),      // Dance New Amsterdam
              destination: 'Burlington House, New York, NY 10105',        // Sophie's Workplace
              travelMode: google.maps.TravelMode.TRANSIT
          };

    directionsService.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            route4(map, result.routes[0].overview_path);
        }
    });
}

function route4(map, pathCoords) {
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
        }, 23 * i, pathCoords[i]);
    }
}

// Frances and Sophie @ Bryant Park
function getDirections5(map) {
    var directionsService = new google.maps.DirectionsService();
    var request = {
              origin: 'Burlington House, New York, NY 10105',      // Sophie's Workplace
              destination: 'Bryant Park, New York, NY 10018',      // Bryant Park
              travelMode: google.maps.TravelMode.WALKING
          };

    directionsService.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            route5(map, result.routes[0].overview_path);
        }
    });
}

function route5(map, pathCoords) {
    var route = new google.maps.Polyline({
        path: [],
        geodesic : true,
        strokeColor: '#f45898',
        strokeOpacity: 0.5,
        strokeWeight: 5,
        editable: false,
        map:map
    });

    for (var i = 0; i < pathCoords.length; i++) {
        setTimeout(function(coords) {
            route.getPath().push(coords);
        }, 10 * i, pathCoords[i]);
    }
}


// Frances and Sophie Split Up on Subway
function getDirections6(map) {
    var directionsService = new google.maps.DirectionsService();
    var request = {
              origin: 'Bryant Park, New York, NY 10018',                        // Bryant Park
              destination: new google.maps.LatLng(40.675747, -73.969796),       // Apt w/ Sophie
              travelMode: google.maps.TravelMode.TRANSIT
          };

    directionsService.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            route6(map, result.routes[0].overview_path);
        }
    });
}

function route6(map, pathCoords) {
    var route = new google.maps.Polyline({
        path: [],
        geodesic : true,
        strokeColor: '#f45898',
        strokeOpacity: 0.5,
        strokeWeight: 5,
        editable: false,
        map:map
    });

    for (var i = 0; i < pathCoords.length; i++) {
        setTimeout(function(coords) {
            route.getPath().push(coords);
        }, 10 * i, pathCoords[i]);
    }
}

// Tax Rebate Bank Missing

// Dinner w/ Lev
function jump3(map) {
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

  var locations = [{lat: 40.675747, lng: -73.969796},     // Apt w/ Sophie
                   {lat: 40.720648, lng: -73.985336}      // AZUL Bistro
                 ];

  for (var i = 0; i < locations.length; i++) {
    setTimeout(function(coords) {
      latlng = new google.maps.LatLng(coords.lat, coords.lng);
//        map.panTo(latlng);
      line.getPath().push(latlng);
    }, 100 * i, locations[i]);
  }
}

// Run for ATM
function getDirections7(map) {
    var directionsService = new google.maps.DirectionsService();
    var request = {
              origin: new google.maps.LatLng(40.720648, -73.985336),            // AZUL Bistro
              waypoints: [
                {location: '127 Ludlow St, New York, NY 10002'},                // M.A. Grocery
                {location: '64 Delancey St, New York, NY 10002'},               // Subway
                {location: '92 Delancey St, New York, NY 10002'},               // Bank of America ATM
                {location: '134 Division St, New York, NY 10002'}               // Dah Shop
              ],
              destination: new google.maps.LatLng(40.720648, -73.985336),       // AZUL Bistro
              travelMode: google.maps.TravelMode.WALKING
          };

    directionsService.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            route7(map, result.routes[0].overview_path);
        }
    });
}

function route7(map, pathCoords) {
    var route = new google.maps.Polyline({
        path: [],
        geodesic : true,
        strokeColor: '#f45898',
        strokeOpacity: 0.5,
        strokeWeight: 5,
        editable: false,
        map:map
    });

    for (var i = 0; i < pathCoords.length; i++) {
        setTimeout(function(coords) {
            route.getPath().push(coords);
        }, 10 * i, pathCoords[i]);
    }
}

// To Lev's Apt
function jump4(map) {
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

  var locations = [{lat: 40.720648, lng: -73.985336},     // AZUL Bistro
                   {lat: 40.713044, lng: -73.997381}      // Lev's Apt
                 ];

  for (var i = 0; i < locations.length; i++) {
    setTimeout(function(coords) {
      latlng = new google.maps.LatLng(coords.lat, coords.lng);
//        map.panTo(latlng);
      line.getPath().push(latlng);
    }, 100 * i, locations[i]);
  }
}

// Hang @ Lev's

// Running Sequence 22:44 - 23:32
function getDirections8(map) {
    var directionsService = new google.maps.DirectionsService();
    var request = {
              origin: new google.maps.LatLng(40.713896, -73.991424),            // East Broadway
              waypoints: [
                {location: google.maps.LatLng(40.713849, -73.992646)},         // Intersection on E Broadway
                {location: '5 Eldridge St, New York, NY 10002'}                 // 964-9000
              ],
              destination: new google.maps.LatLng(40.713044, -73.997381),       // Lev's Apt
              travelMode: google.maps.TravelMode.WALKING
          };

    directionsService.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            route8(map, result.routes[0].overview_path);
        }
    });
}

function route8(map, pathCoords) {
    var route = new google.maps.Polyline({
        path: [],
        geodesic : true,
        strokeColor: '#f45898',
        strokeOpacity: 0.5,
        strokeWeight: 5,
        editable: false,
        map:map
    });

    for (var i = 0; i < pathCoords.length; i++) {
        setTimeout(function(coords) {
            route.getPath().push(coords);
        }, 10 * i, pathCoords[i]);
    }
}

// Moved into Lev's

// To Studio Performance
function jump5(map) {
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

  var locations = [{lat: 40.713044, lng: -73.997381},     // Lev's Apt
                   {lat: 40.714404, lng: -74.005954}      // Dance New Amsterdam
                 ];

  for (var i = 0; i < locations.length; i++) {
    setTimeout(function(coords) {
      latlng = new google.maps.LatLng(coords.lat, coords.lng);
//        map.panTo(latlng);
      line.getPath().push(latlng);
    }, 100 * i, locations[i]);
  }
}

// Performance @ DNA
// Bar Scene Missing

// Back to Home
function jump6(map) {
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

  var locations = [{lat: 40.714404, lng: -74.005954},      // Dance New Amsterdam
                   {lat: 40.713044, lng: -73.997381},      // Lev's Apt
                   {lat: 40.696323, lng: -73.964805},      // Moishe's Self Storage
                   {lat: 38.692804, lng: -121.588585},     // Sacramento Airport Arrivals
                   {lat: 38.573141, lng: -121.427933}      // Parent's House
                 ];

  for (var i = 0; i < locations.length; i++) {
    setTimeout(function(coords) {
      latlng = new google.maps.LatLng(coords.lat, coords.lng);
//        map.panTo(latlng);
      line.getPath().push(latlng);
    }, 100 * i, locations[i]);
  }
}

google.maps.event.addDomListener(window, 'load', initMap);
