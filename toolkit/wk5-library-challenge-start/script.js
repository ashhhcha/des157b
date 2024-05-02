(function(){
    'use strict';

    // add your script here
    var map = L.map('map').setView([51.505, -0.09], 13);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([40.728779, -73.988701]).addTo(map);

    var circle = L.circle([40.726509, -73.986656], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 50
    }).addTo(map);

    var polygon = L.polygon([
        [37.79, -122.4083732995261],
        [37.81, -122.4083733995261],
        [37.81, -122.4083734995261]
    ]).addTo(map);

    marker.bindPopup("Best Taiwanese food in The States").openPopup();
    circle.bindPopup("Favorite place for udon");
    polygon.bindPopup("Place to get good eggtarts");

    
}());