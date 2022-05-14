const mapOptions = {
    center: [42.36, 12.02],
    zoom: 5.5
}
const map = new L.map('map', mapOptions);

//Tile Layer
const layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

//Construct object markers

const markers = [
    {
        coord: [45.4862737, 9.2063373],
        street: 'Piazza Luigi di Savoia, 1 - Milano',
        path: './assets/img/img1.png',
        link: '',
    },
    {
        coord: [45.5299763, 9.3666279],
        street: 'Via Togliatti, 2 - Milano',
    },
    {
        coord: [45.284973, 9.111306],
        street: 'Piazza 25 Aprile - Milano'
    },
    {
        coord: [44.64763, 10.85401],
        street: 'Via Emilia Ovest, 1480 - Modena'
    },
    {
        coord: [44.6345866, 10.9552156],
        street: 'Via Emilia Est, 981 - Modena'
    },
    {
        coord: [41.1080290, 16.8805320],
        street: 'Via Orabona, 4 - Bari'
    },
    {
        coord: [41.126959, 16.87183968931251],
        street: 'Piazza Ferrarese, 28 - Bari'
    },
];

markers.forEach((marker) => {
    const tempMarker = new L.Marker(marker.coord, { draggable: true });
    const popupContent = document.createElement("div");
    const path = './assets/img/img1.png';
    popupContent.innerHTML = `<div class="background" style="background-image: url('${marker.path}');"></div><a href="${marker.url}">${marker.street}</a>`;
    tempMarker.addTo(map).bindPopup(popupContent);
});






