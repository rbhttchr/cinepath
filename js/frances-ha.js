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

var map_nyc, map_sac, map_par, map_world, map_upstate;


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

       map_world = new google.maps.Map(document.getElementById('map_world'), {
         zoom: 2,
         disableDefaultUI: true,
         center: new google.maps.LatLng(42.375526, -50.658799),       // Atlantic Ocean
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
//            {featureType: 'administrative.land_parcel', stylers: [{visibility: 'off'}]},
            {featureType: 'administrative.land_parcel', elementType:"labels", stylers: [{visibility: 'off'}]},
            {featureType: 'administrative.locality', elementType: 'labels.text.fill', stylers: [{color: '#bdbdbd'}]},
//            {featureType: 'poi', elementType: 'labels.text', stylers: [{visibility: 'off'}]},
             {featureType: 'poi', elementType: 'labels.text.fill', stylers: [{color: '#757575'}]},
//            {featureType: 'administrative.land_parcel', stylers: [{visibility: 'off'}]},
//            {featureType: 'poi.business', stylers: [{visibility: 'off'}]},
             {featureType: 'poi.park', elementType: 'geometry', stylers: [{color: '#181818'}]},
             {featureType: 'poi.park', elementType: 'labels.text.fill', stylers: [{color: '#616161'}]},
            {featureType: 'poi.park', elementType: 'labels.text.stroke', stylers: [{color: '#1b1b1b'}]},
             {featureType: 'road', elementType: 'geometry.fill', stylers: [{color: '#2c2c2c'}]},
//            {featureType: 'road', elementType: 'labels.icon', stylers: [{visibility: 'off'}]},
             {featureType: 'road', elementType: 'labels.text.fill', stylers: [{color: '#8a8a8a'}]},
             {featureType: 'road.arterial', elementType: 'geometry', stylers: [{color: '#373737'}]},
            {featureType: 'road.arterial', elementType: 'labels', stylers: [{visibility: 'off'}]},
             {featureType: 'road.highway', elementType: 'geometry', stylers: [{color: '#3c3c3c'}]},
            {featureType: 'road.highway', elementType: 'labels', stylers: [{visibility: 'off'}]},
             {featureType: 'road.highway.controlled_access', elementType: 'geometry', stylers: [{color: '#4e4e4e'}]},
//            {featureType: 'road.local', stylers: [{visibility: 'off'}]},
//            {featureType: 'road.local', elementType: 'labels', stylers: [{visibility: 'off'}]},
            {featureType: 'road.local', elementType: 'labels.text.fill', stylers: [{color: '#616161'}]},
//              {featureType: 'transit', stylers: [{visibility: 'off'}]},
             {featureType: 'transit', elementType: 'labels.text.fill', stylers: [{color: '#757575'}]},
             {featureType: 'water', elementType: 'geometry', stylers: [{color: '#000000'}]},
             {featureType: 'water', elementType: 'labels.text.fill', stylers: [{color: '#3d3d3d'}]}
         ]
       });

       map_upstate = new google.maps.Map(document.getElementById('map_upstate'), {
         zoom: 15,
         disableDefaultUI: true,
         center: new google.maps.LatLng(41.686785, -73.895664),       // Vassar College
         styles: [
            {elementType: 'geometry', stylers: [{color: '#212121'}]},
            {elementType: 'labels.icon', stylers: [{visibility: 'off'}]},
             {elementType: 'labels.text.stroke', stylers: [{color: '#212121'}]},
             {elementType: 'labels.text.fill', stylers: [{color: '#757575'}]},
            {featureType: 'administrative', elementType:"geometry", stylers: [{color: '#757575'}]},
            {featureType: 'administrative.country', elementType:"labels.text.fill", stylers: [{color: '#9e9e9e'}]},
//            {featureType: 'administrative.land_parcel', stylers: [{visibility: 'off'}]},
            {featureType: 'administrative.land_parcel', elementType:"labels", stylers: [{visibility: 'off'}]},
            {featureType: 'administrative.locality', elementType: 'labels.text.fill', stylers: [{color: '#bdbdbd'}]},
//            {featureType: 'poi', elementType: 'labels.text', stylers: [{visibility: 'off'}]},
             {featureType: 'poi', elementType: 'labels.text.fill', stylers: [{color: '#757575'}]},
//            {featureType: 'administrative.land_parcel', stylers: [{visibility: 'off'}]},
//            {featureType: 'poi.business', stylers: [{visibility: 'off'}]},
             {featureType: 'poi.park', elementType: 'geometry', stylers: [{color: '#181818'}]},
             {featureType: 'poi.park', elementType: 'labels.text.fill', stylers: [{color: '#616161'}]},
            {featureType: 'poi.park', elementType: 'labels.text.stroke', stylers: [{color: '#1b1b1b'}]},
             {featureType: 'road', elementType: 'geometry.fill', stylers: [{color: '#2c2c2c'}]},
//            {featureType: 'road', elementType: 'labels.icon', stylers: [{visibility: 'off'}]},
             {featureType: 'road', elementType: 'labels.text.fill', stylers: [{color: '#8a8a8a'}]},
             {featureType: 'road.arterial', elementType: 'geometry', stylers: [{color: '#373737'}]},
            {featureType: 'road.arterial', elementType: 'labels', stylers: [{visibility: 'off'}]},
             {featureType: 'road.highway', elementType: 'geometry', stylers: [{color: '#3c3c3c'}]},
            {featureType: 'road.highway', elementType: 'labels', stylers: [{visibility: 'off'}]},
             {featureType: 'road.highway.controlled_access', elementType: 'geometry', stylers: [{color: '#4e4e4e'}]},
//            {featureType: 'road.local', stylers: [{visibility: 'off'}]},
//            {featureType: 'road.local', elementType: 'labels', stylers: [{visibility: 'off'}]},
            {featureType: 'road.local', elementType: 'labels.text.fill', stylers: [{color: '#616161'}]},
//              {featureType: 'transit', stylers: [{visibility: 'off'}]},
             {featureType: 'transit', elementType: 'labels.text.fill', stylers: [{color: '#757575'}]},
             {featureType: 'water', elementType: 'geometry', stylers: [{color: '#000000'}]},
             {featureType: 'water', elementType: 'labels.text.fill', stylers: [{color: '#3d3d3d'}]}
         ]
       });

       map_par = new google.maps.Map(document.getElementById('map_par'), {
         zoom: 13,
         disableDefaultUI: true,
         center: new google.maps.LatLng(48.863842, 2.322681),       // Orangeire Museum
         styles: [
            {elementType: 'geometry', stylers: [{color: '#212121'}]},
            {elementType: 'labels.icon', stylers: [{visibility: 'off'}]},
             {elementType: 'labels.text.stroke', stylers: [{color: '#212121'}]},
             {elementType: 'labels.text.fill', stylers: [{color: '#757575'}]},
            {featureType: 'administrative', elementType:"geometry", stylers: [{color: '#757575'}]},
            {featureType: 'administrative.country', elementType:"labels.text.fill", stylers: [{color: '#9e9e9e'}]},
//            {featureType: 'administrative.land_parcel', stylers: [{visibility: 'off'}]},
            {featureType: 'administrative.land_parcel', elementType:"labels", stylers: [{visibility: 'off'}]},
            {featureType: 'administrative.locality', elementType: 'labels.text.fill', stylers: [{color: '#bdbdbd'}]},
//            {featureType: 'poi', elementType: 'labels.text', stylers: [{visibility: 'off'}]},
             {featureType: 'poi', elementType: 'labels.text.fill', stylers: [{color: '#757575'}]},
//            {featureType: 'administrative.land_parcel', stylers: [{visibility: 'off'}]},
//            {featureType: 'poi.business', stylers: [{visibility: 'off'}]},
             {featureType: 'poi.park', elementType: 'geometry', stylers: [{color: '#181818'}]},
             {featureType: 'poi.park', elementType: 'labels.text.fill', stylers: [{color: '#616161'}]},
            {featureType: 'poi.park', elementType: 'labels.text.stroke', stylers: [{color: '#1b1b1b'}]},
             {featureType: 'road', elementType: 'geometry.fill', stylers: [{color: '#2c2c2c'}]},
//            {featureType: 'road', elementType: 'labels.icon', stylers: [{visibility: 'off'}]},
             {featureType: 'road', elementType: 'labels.text.fill', stylers: [{color: '#8a8a8a'}]},
             {featureType: 'road.arterial', elementType: 'geometry', stylers: [{color: '#373737'}]},
            {featureType: 'road.arterial', elementType: 'labels', stylers: [{visibility: 'off'}]},
             {featureType: 'road.highway', elementType: 'geometry', stylers: [{color: '#3c3c3c'}]},
            {featureType: 'road.highway', elementType: 'labels', stylers: [{visibility: 'off'}]},
             {featureType: 'road.highway.controlled_access', elementType: 'geometry', stylers: [{color: '#4e4e4e'}]},
//            {featureType: 'road.local', stylers: [{visibility: 'off'}]},
//            {featureType: 'road.local', elementType: 'labels', stylers: [{visibility: 'off'}]},
            {featureType: 'road.local', elementType: 'labels.text.fill', stylers: [{color: '#616161'}]},
//              {featureType: 'transit', stylers: [{visibility: 'off'}]},
             {featureType: 'transit', elementType: 'labels.text.fill', stylers: [{color: '#757575'}]},
             {featureType: 'water', elementType: 'geometry', stylers: [{color: '#000000'}]},
             {featureType: 'water', elementType: 'labels.text.fill', stylers: [{color: '#3d3d3d'}]}
         ]
       });


       getDirections1(map_nyc);     // 190
       getDirections1(map_world);

       setTimeout(function(){
         jump1(map_nyc);            // 50 + 1720
         jump1(map_world);
       }, 190);

       setTimeout(function(){
         getDirections2(map_nyc);   // 460
         getDirections2(map_world);
       }, 1960);

       setTimeout(function(){
         jump2(map_nyc);            // 50 + 1050
         jump2(map_world);
       }, 2010);

       setTimeout(function(){
         getDirections3(map_nyc);   //
         getDirections3(map_world);
       }, 3110);

       setTimeout(function(){
         getDirections4(map_nyc);   //
         getDirections4(map_world);
       }, 4000);

       setTimeout(function(){
         getDirections5(map_nyc);   //
         getDirections5(map_world);
       }, 6000);

       setTimeout(function(){
         getDirections6(map_nyc);   //
         getDirections6(map_world);
       }, 6500);

       setTimeout(function(){
         jump3(map_nyc);   //
         jump3(map_world);
       }, 7500);

       setTimeout(function(){
         getDirections7(map_nyc);   //
         getDirections7(map_world);
       }, 8000);

       setTimeout(function(){
         jump4(map_nyc);   //
         jump4(map_world);
       }, 8500);

       setTimeout(function(){
         getDirections8(map_nyc);   //
         getDirections8(map_world);
       }, 9000);

       setTimeout(function(){
         jump5(map_nyc);   //
         jump5(map_world);
       }, 10000);

       setTimeout(function(){
         jump6(map_nyc);
         jump6(map_sac);   //
         jump6(map_world);
       }, 12000);

       setTimeout(function(){
         getDirections9(map_sac);
         getDirections9(map_world);
       }, 12200);

       setTimeout(function(){
         jump7(map_sac);
         jump7(map_nyc);
         jump7(map_world);
       }, 13500);

       setTimeout(function(){
         getDirections10(map_nyc);
         getDirections10(map_world);
       }, 14000);

       setTimeout(function(){
         jump8(map_par);
         jump8(map_nyc);
         jump8(map_world);
       }, 15000);

       setTimeout(function(){
         getDirections11(map_par);
         getDirections11(map_world);
       }, 15200);

      setTimeout(function(){
        getDirections12(map_par);
        getDirections12(map_world);
      }, 16200);

      setTimeout(function(){
        jump9(map_par);
        jump9(map_nyc);
        jump9(map_world);
      }, 18000);

      setTimeout(function(){
        jump10(map_upstate);
        jump10(map_nyc);
        jump10(map_world);
      }, 18500);

      setTimeout(function(){
        getDirections13(map_upstate);
        getDirections13(map_world);
      }, 19000);

      setTimeout(function(){
        getDirections14(map_upstate);
        getDirections14(map_world);
      }, 21000);

      setTimeout(function(){
        jump11(map_upstate);
        jump11(map_nyc);
        jump11(map_world);
      }, 22000);

      setTimeout(function(){
        getDirections15(map_nyc);
        getDirections15(map_world);
      }, 22500);

      setTimeout(function(){
        jump12(map_nyc);
        jump12(map_world);
      }, 24000);
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
                   {lat: 38.692804, lng: -121.588585}      // Sacramento Airport Arrivals
                 ];

  for (var i = 0; i < locations.length; i++) {
    setTimeout(function(coords) {
      latlng = new google.maps.LatLng(coords.lat, coords.lng);
//        map.panTo(latlng);
      line.getPath().push(latlng);
    }, 100 * i, locations[i]);
  }
}

// Sacramento
function getDirections9(map) {
    var directionsService = new google.maps.DirectionsService();
    var request = {
              origin: new google.maps.LatLng(38.692804, -121.588585),         // Sacramento Airport Arrivals
              waypoints: [
                {location: new google.maps.LatLng(38.474829, -121.504258)},   // Water Tower
                {location: new google.maps.LatLng(38.580450, -121.507783)},   // Tower Bridge
                {location: new google.maps.LatLng(38.577730, -121.498062)},   // State Captiol Museum
                {location: new google.maps.LatLng(38.573103, -121.427961)}   // Parents' House
              ],
              destination: new google.maps.LatLng(38.691956, -121.591392),   // SAC
              travelMode: google.maps.TravelMode.WALKING
          };
    directionsService.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            route9(map, result.routes[0].overview_path);
        }
    });
}

function route9(map, pathCoords) {
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

// Back to NY
// Back to Home
function jump7(map) {
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

  var locations = [{lat: 38.691956, lng: -121.591392},      // SAC
                   {lat: 40.629178, lng: -73.782010},       // JFK
                   {lat: 40.715224, lng: -73.983655},        // East Village Dance Project
                   {lat: 40.714930, lng: -73.989232}        // Seward Park
                 ];

  for (var i = 0; i < locations.length; i++) {
    setTimeout(function(coords) {
      latlng = new google.maps.LatLng(coords.lat, coords.lng);
//        map.panTo(latlng);
      line.getPath().push(latlng);
    }, 100 * i, locations[i]);
  }
}

// Unknown Apartment

// Transit to JFK
function getDirections10(map) {
    var directionsService = new google.maps.DirectionsService();
    var request = {
              origin: new google.maps.LatLng(40.714930, -73.989232),         // Seward Park
              destination: new google.maps.LatLng(40.646809, -73.788776),   // JFK Terminal 8 AA
              travelMode: google.maps.TravelMode.TRANSIT
          };
    directionsService.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            route10(map, result.routes[0].overview_path);
        }
    });
}

function route10(map, pathCoords) {
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
        }, 10 * i, pathCoords[i]);
    }
}

// Fly to paris
function jump8(map) {
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

  var locations = [{lat: 40.646809, lng: -73.788776},      // JFK
                   {lat: 49.002992, lng: 2.561663}        // CDG
                 ];

  for (var i = 0; i < locations.length; i++) {
    setTimeout(function(coords) {
      latlng = new google.maps.LatLng(coords.lat, coords.lng);
//        map.panTo(latlng);
      line.getPath().push(latlng);
    }, 100 * i, locations[i]);
  }
}

// CDG to Free Apt
function getDirections11(map) {
    var directionsService = new google.maps.DirectionsService();
    var request = {
              origin: new google.maps.LatLng(49.002992, 2.561663),         // CDG
/*              waypoints: [
                {location: new google.maps.LatLng(48.853580, 2.344921)}   // Saint-Michel - Notre-Dame
              ],
              */
              destination: new google.maps.LatLng(48.846322, 2.324156),   // Free Apt
              travelMode: google.maps.TravelMode.TRANSIT
          };
    directionsService.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            route11(map, result.routes[0].overview_path);
        }
    });
}

function route11(map, pathCoords) {
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
        }, 10 * i, pathCoords[i]);
    }
}

// Random Park

// Walking around Paris
function getDirections12(map) {
    var directionsService = new google.maps.DirectionsService();
    var request = {
              origin: new google.maps.LatLng(48.846322, 2.324156),         // Free Apt
              waypoints: [
                {location: new google.maps.LatLng(48.854042, 2.332718)},   // Cafe de Flore
                {location: new google.maps.LatLng(48.863909, 2.320449)},   // Pont de la Concorde
                {location: new google.maps.LatLng(48.858511, 2.341261)},   // Parc des Rives de Seine
                {location: new google.maps.LatLng(48.869602, 2.307523)},     // Gaumont Champs-Elysées
                {location: new google.maps.LatLng(48.872555, 2.299324)}   // Arc de Triomphe in Background
              ],
              destination: new google.maps.LatLng(48.846322, 2.324156),   // Free Apt
              travelMode: google.maps.TravelMode.WALKING
          };
    directionsService.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            route12(map, result.routes[0].overview_path);
        }
    });
}

function route12(map, pathCoords) {
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
        }, 10 * i, pathCoords[i]);
    }
}

// Back to NYC
function jump9(map) {
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

  var locations = [{lat: 48.846322, lng: 2.324156},      // Free Apt
                   {lat: 49.002992, lng: 2.561663},      // CDG
                   {lat: 40.646809, lng: -73.788776},      // JFK
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

// PO Box
function jump10(map) {
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
                   {lat: 41.688337, lng: -73.892869}        // Woods
                 ];

  for (var i = 0; i < locations.length; i++) {
    setTimeout(function(coords) {
      latlng = new google.maps.LatLng(coords.lat, coords.lng);
//        map.panTo(latlng);
      line.getPath().push(latlng);
    }, 100 * i, locations[i]);
  }
}

// Around Campus
function getDirections13(map) {
    var directionsService = new google.maps.DirectionsService();
    var request = {
              origin: new google.maps.LatLng(41.688337, -73.892869),         // Woods
              waypoints: [
                {location: new google.maps.LatLng(41.686904, -73.895003)},   // College Center
                {location: new google.maps.LatLng(41.688299, -73.897160)},   // Campus Walk
                {location: new google.maps.LatLng(41.689841, -73.890982)},   // Kenyon Hall Dance Studio
                {location: new google.maps.LatLng(41.691060, -73.901667)},   // Alumnae House
                {location: new google.maps.LatLng(41.686263, -73.895526)},     // Dorm
                {location: new google.maps.LatLng(41.688337, -73.892869)}   // Woods
              ],
              destination: new google.maps.LatLng(41.691060, -73.901667),   // Alumnae House
              travelMode: google.maps.TravelMode.WALKING
          };
    directionsService.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            route13(map, result.routes[0].overview_path);
        }
    });
}

function route13(map, pathCoords) {
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
        }, 10 * i, pathCoords[i]);
    }
}

// Patch Driving
function getDirections14(map) {
    var directionsService = new google.maps.DirectionsService();
    var request = {
              origin: new google.maps.LatLng(41.691060, -73.901667),         // Alumnae House
              destination: new google.maps.LatLng(41.686263, -73.895526),   // Dorm
              travelMode: google.maps.TravelMode.WALKING
          };
    directionsService.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            route14(map, result.routes[0].overview_path);
        }
    });
}

function route14(map, pathCoords) {
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
        }, 10 * i, pathCoords[i]);
    }
}

// Back in the City
function jump11(map) {
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

  var locations = [{lat: 41.686263, lng: -73.895526},      // Dorm
                   {lat: 40.841621, lng: -73.937237}      // Washington Heights
                 ];

  for (var i = 0; i < locations.length; i++) {
    setTimeout(function(coords) {
      latlng = new google.maps.LatLng(coords.lat, coords.lng);
//        map.panTo(latlng);
      line.getPath().push(latlng);
    }, 100 * i, locations[i]);
  }
}

// Commute to Work
function getDirections15(map) {
    var directionsService = new google.maps.DirectionsService();
    var request = {
              origin: new google.maps.LatLng(40.841621, -73.937237),         // Washington Heights
              destination: new google.maps.LatLng(40.714404, -74.005954),   // Dance New Amsterdam
              travelMode: google.maps.TravelMode.TRANSIT
          };
    directionsService.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            route15(map, result.routes[0].overview_path);
        }
    });
}

function route15(map, pathCoords) {
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
        }, 10 * i, pathCoords[i]);
    }
}



// Ending Sequence
function jump12(map) {
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
                   {lat: 40.712198, lng: -74.007153},      // City Hall Park
                   {lat: 40.714404, lng: -74.005954},      // Dance New Amsterdam
                   {lat: 40.841621, lng: -73.937237}      // Washington Heights
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
