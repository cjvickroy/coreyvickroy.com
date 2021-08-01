let map;

function initMap() {

    document.getElementById("info_div").style.display = "none";

    var campgrounds = [
        {
            name: "Promontory Camground",
            location: { lat: 45.22255, lng: -122.243481 },
            address: "40600 OR-224, Estacada, OR 97023"
        },

        {
            name: "Devils Lake RV Park",
            location: { lat: 44.995770, lng: -123.998100 },
            address: "4041 NE West Devils Lake Rd, Lincoln City, OR 97367"
        },

        {
            name: "Logan Road RV Park",
            location: { lat: 44.999580, lng: -124.003320 },
            address: "4800 NE Logan Rd, Lincoln City, OR 97367"
        },

        {
            name: "B'Nai B'rith Camp",
            location: { lat: 44.992840, lng: -123.981880 },
            address: "3509 NE East Devils Lake Rd, Otis, OR 97368"
        },

        {
            name: "Tree 'n' Sea Trailer Park",
            location: { lat: 44.928300, lng: -124.017380 },
            address: "1015 Southwest 51st Street, Lincoln City, OR 97367"
        },

        {
            name: "Sea & Sand RV Park",
            location: { lat: 44.860880, lng: -124.039420 },
            address: "4985 N, US-101, Depoe Bay, OR 97341"
        }
    
    
    ]

    //Camping Locations:
    const Promontory = { lat: 45.22255, lng: -122.243481 }
    const Corvallis = { lat: 44.571651, lng: -123.277702 }
    var pyrmont = {lat: -33.867, lng: 151.195};
  
    //Initialize the map
    map = new google.maps.Map(document.getElementById("map"), {
        center: Corvallis,
        zoom: 13,
        styles: [
            {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ "visibility": "off"}]
        }
    ]
    });

    const input = document.getElementById("pac-input");
    const searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    // Bias the SearchBox results towards current map's viewport.
    map.addListener("bounds_changed", () => {
        searchBox.setBounds(map.getBounds());
    });

    let markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener("places_changed", () => {
    const places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }
    // Clear out the old markers.
    markers.forEach((marker) => {
      marker.setMap(null);
    });
    markers = [];
    // For each place, get the icon, name and location.
    const bounds = new google.maps.LatLngBounds();
    places.forEach((place) => {
      if (!place.geometry || !place.geometry.location) {
        console.log("Returned place contains no geometry");
        return;
      }
      const icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25),
      };

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });

    
    //Set our campground markers
    campgrounds.forEach(function(campground){
        markCampground(campground);
    });

}
function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location
    });
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
      });
    }

function markCampground(campgroundInfo){

    var marker = new google.maps.Marker({
        map: map,
        position: campgroundInfo.location,
        title: campgroundInfo.name,
    });

    marker.addListener('click', function(){
        showCampgroundInfo(campgroundInfo);
    });

}

function showCampgroundInfo(campgroundInfo){
    document.getElementById("info_div").style.display = "block";
    var infoDiv = document.getElementById('info_div');
    info_div.innerHTML = 'Campground Name: '
        + campgroundInfo.name
        + '<br>Address: ' + campgroundInfo.address ;

}

//I will use this function to remove markers that are disabled due to filtering
function removeMarkers([markers], map){
    marker1.setVisible(false);
}


//As of 7/27 This function works
function moveMap(location, map){
    map.setCenter(location)
}