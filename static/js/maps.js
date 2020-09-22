/*jshint esversion: 6 */

const beaches = [
    {lat: 53.365, lng: -6.174},
    {lat: 53.334, lng: -6.213},
    {lat: 53.417, lng: -6.119}
];

const parks = [
    {lat: 53.371, lng: -6.179},
    {lat: 53.401, lng: -6.250},
    {lat: 53.372, lng: -6.271}    
];

const labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Initialize and add the map
function initMap(locations = []) {
    // The location of Dublin
    const dublin = {lat: 53.345149, lng: -6.264};

    // The map, centered at Dublin
    let map = new google.maps.Map(
        document.getElementById('map'), {zoom: 10, center: dublin});

    if (locations.length > 0) {
        const markers = locations.map((location, i) => {
            return new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
            });
        });
    
        let markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
    }
}

document.querySelector('#beaches-btn').addEventListener('click', () => {
    initMap(beaches);
});

document.querySelector('#parks-btn').addEventListener('click', () => {
    initMap(parks);
});

