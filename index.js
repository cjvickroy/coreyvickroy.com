

let map;


var campgrounds = [
  {
      name: "Promontory Camground",
      location: { lat: 45.22255, lng: -122.243481 },
      address: "40600 OR-224, Estacada, OR 97023",
      picture: "https://www.outdoorproject.com/sites/default/files/styles/hero_image_desktop/public/features/_mg_0568.jpg?itok=RTY44ZIJ",
      site: "https://www.outdoorproject.com/united-states/oregon/promontory-park-campground/",
      desc: "The Promontory Park Campground is a densely packed area just south of the Promontory Park marina and day use area.  There are 50 sites total, 13 of which are large canvas tents called “yomes” that offer bunk bed accommodation for four people. The campground offers three public kitchen areas, showers, and a fishing dock on North Fork Reservoir that is accessible via trail.  The entire campground is shaded and removed from the highway, and some of the best sites overlook the water.  The campground’s layout makes it ideal for groups, even if you are unable to reserve the two group sites.  Simply grabbing neighboring sites will keep a group together and sidestep the issue of crowding. Given the close proximity of some of the sites, those seeking a little more privacy should choose a yome or a trailer space if the option is available. The real benefit of staying at Promontory Park Campground is the excellent access to the Clackamas River, North Fork Reservoir, several hiking options, or the other day use areas Promontory Park has to offer.  Additionally, many of the campgrounds farther up the river don’t accept reservations, so when the season becomes crowded, this may be a good option.",
      rv: true,
      pets: true
  },

  {
      name: "Devils Lake RV Park",
      location: { lat: 44.995770, lng: -123.998100 },
      address: "4041 NE West Devils Lake Rd, Lincoln City, OR 97367",
      picture: "https://campnative-images.s3.us-west-2.amazonaws.com/campgrounds/8416/large/o.jpg",
      site: "https://www.devilslakervpark.com/",
      desc: "Devils Lake RV Park is a top-rated RV desination located at the North entrance to Lincoln City, on the scenic Oregon coast. We have 90 RV sites ranging from tiny homes to 80' pull through spaces.",
      rv: true,
      pets: true
  },

  {
      name: "Logan Road RV Park",
      location: { lat: 44.999580, lng: -124.003320 },
      address: "4800 NE Logan Rd, Lincoln City, OR 97367",
      picture: "https://loganroadrvpark.com/wp-content/uploads/2016/06/IMAGE12-1200x675.jpg",
      site: "https://loganroadrvpark.com/home/reservations-rates/",
      desc: "Logan Road RV Park is Lincoln City’s only RV Park west of Highway 101 where, “It’s Better at the Beach”. Amenities include access to Chinook Winds Casino Resort hotel spa and pool, free 24-hour shuttle service to Chinook Winds Casino Resort, Beach access only two blocks away, Chinook Winds Golf Course short drive away, free high speed Wi-Fi, free cable television and a grassy dog run.",
      rv: true,
      pets: true

  },

  {
      name: "B'Nai B'rith Camp",
      location: { lat: 44.992840, lng: -123.981880 },
      address: "3509 NE East Devils Lake Rd, Otis, OR 97368",
      picture: "https://bbcamp.org/wp-content/uploads/2020/05/dinning-hall.jpg",
      site: "https://bbcamp.org/lincolncity/",
      desc: "Anchored on the beautiful Devil’s Lake, BB Camp Retreat Center is a modern 13-acre lakefront facility, perfectly situated on the Oregon Coast! We offer friendly, professional, and affordable solutions for all your event and retreat needs for groups from 25 to 380 people. We are located just over two miles outside the coastal town of Lincoln City, which provides easy access to the beach, hiking trails, and many other outdoor attractions. After your adventures, the outlet malls and restaurants are just a stone’s throw away.",
      rv: false,
      pets: false

  },

  {
      name: "Tree 'n' Sea Trailer Park",
      location: { lat: 44.928300, lng: -124.017380 },
      address: "1015 Southwest 51st Street, Lincoln City, OR 97367",
      picture: "https://i4.ypcdn.com/blob/ebc56e22627d211451bf4b9eaf5d52fea54f2876_400x280_crop.jpg",
      site: "https://www.ohwy.com/or/t/trnsetrp.htm/",
      desc: "Located five miles from the junction of Hwys 18 and 101 in Lincoln City on SW 51st Street. Seven RV/Trailer sites (any length) with electricity, piped water and sewer hookups. Flush toilets and showers available. Nearby store, cafe, and laundry. Leashed pets allowed. Open year round.",
      rv: true,
      pets: false
  },

  {
      name: "Sea & Sand RV Park",
      location: { lat: 44.860880, lng: -124.039420 },
      address: "4985 N, US-101, Depoe Bay, OR 97341",
      picture: "https://i.ytimg.com/vi/GxXNFrb2h7I/maxresdefault.jpg",
      site: "https://seaandsandrvpark.com/",
      desc: "Sea & Sand RV Park is conveniently located on Highway 101 just three miles north of Depoe Bay on the central Oregon coastline and eight miles south of Lincoln City. There are spectacular beach and ocean views from our terraced ocean RV sites, as well as beautiful and cozy forested campground sites, all with easy beach access. The sunsets in the summers and the storms in the winters offer wonderful memories to all our guests, and their pets. Whether you love the grey whales, are storm watchers, sightseers, want to fish, try your luck at one of the casinos, shop the boutiques, or just be a beach bum or couch potato for a few days- – -Sea & Sand RV Park provides you with a home away from home that is quiet, peaceful, relaxing and conveniently located. Activities are numerous for all ages. The seven mile sandy beach provides a sand box of agates, shells, and sometimes Japanese floats. Sightings of the migrating grey whales are almost a daily happening in Depoe Bay, and there are charter fleets at Depoe Bay and Newport for deep sea fishing, crabbing and whale watching. Also, fresh water fishing, including steelhead, salmon, and trout are in the local rivers and streams. One mile away is the beautiful resort of Salishan providing an 18 hole golf course and excellent shopping. If you like aquariums, lighthouses, factory outlets, good restaurants, casino gaming, and breathtaking views of the ocean you will find it all between Newport and Lincoln City.",
      rv: true,
      pets: true
  }


]

markers = [];

function initMap() {

    document.getElementById("info_div").style.display = "none";

    

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
//This function will create a marker at a given point using the Google Maps API.
function createMarker(place) {
    var placeLoc = place.geometry.location;
    //The marker will now display on the map
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location
    });
    //Add a listener so that the marker responds when clicked on.
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
      });
      markers.push(marker);
    }

function markCampground(campgroundInfo){

    var marker = new google.maps.Marker({
        map: map,
        position: campgroundInfo.location,
        title: campgroundInfo.name,
    });

    markers.push(marker);
    console.log(length.markers)

    marker.addListener('click', function(){
        showCampgroundInfo(campgroundInfo);
    });

}

function reqListener(){
  console.log(this.responseText);
}

//Show the campground information
function showCampgroundInfo(campgroundInfo){

    var responseJSON;
    document.getElementById("info_div").style.display = "block";
    var infoDiv = document.getElementById('info_div');

    //Getting weather data using teammates microservice:
 
      var req = new XMLHttpRequest();
      req.open("POST", 'https://weathermicroservice.herokuapp.com/hourlyForecast', true);
      req.setRequestHeader('Content-Type', 'application/json');
  
      req.addEventListener('load', function(){
          if(req.status >= 200 && req.status < 400){
              var response = JSON.parse(req.responseText);
              
              //console.log(req.responseText);
              responseJSON = JSON.parse(req.responseText);
              info_div.innerHTML = 'Campground Name: '
              + campgroundInfo.name
              + '<br>Address: ' 
              + campgroundInfo.address  
              + '<br>' 
              + "<img src=" 
              + campgroundInfo.picture
              + ">"
              + '<br>'
              + 'Current Weather forecast: ' 
              + responseJSON.temperatureInfo[0].temp
              + ' degrees, '
              + responseJSON.temperatureInfo[0].weather
              + '<br>'
              + "<a href=\"" 
              + campgroundInfo.site 
              + "\" target=\"_blank\">Show More</a>" 
              + "<br><br>" 
              + campgroundInfo.desc;

              console.log(responseJSON);
              

              //console.log(response)
          } else {
              console.log("Error in network request: " + req.statusText);
          }
      });
      console.log('{"lat": ' + '"' + campgroundInfo.location.lat + '"' + ', "long": ' + '"' + campgroundInfo.location.lng + '"' + '}');
      req.send('{"lat": ' + '"' + campgroundInfo.location.lat + '"' + ', "long": ' + '"' + campgroundInfo.location.lng + '"' + '}');

  
 
}

//As of 7/27 This function works
function moveMap(location, map){
    map.setCenter(location)
}

function doFilterUpdate(){
  rv = document.getElementById("filter-rv"); //Grabbing the filter-rv element
  pets = document.getElementById("filter-pets");//Grabbing the filter-pets element
  rvValue = rv.options[rv.selectedIndex].value; //Grabbing the selected index of the filter-rv element
  petsValue = Pets.options[pets.selectedIndex].value; //Grabbing the selected index of the filter-pets element
  console.log(RVvalue);
  console.log("Update button clicked.")
  for (const x in campgrounds){
    console.log(campgrounds[x].rv)
   if ((RVvalue == "Yes") && (Pets == "Yes")){
    if ((campgrounds[x].rv == true) && (campgrounds[x].pets == true)){
       markers[x].setVisible(true);
    }
    else{
     markers[x].setVisible(false);
    }
  }
  if ((RVvalue == "No") && (PetsValue == "No")){
    if ((campgrounds[x].rv == true)&&(campgrounds[x].pets == true)){
       markers[x].setVisible(false);
    }
    else{
     markers[x].setVisible(true);
    }
  }
  
}

window.addEventListener('DOMContentLoaded', function () {

  var filterUpdateButton = document.getElementById('filter-update-button');
  if (filterUpdateButton) {
    filterUpdateButton.addEventListener('click', doFilterUpdate)
    
  }

})};