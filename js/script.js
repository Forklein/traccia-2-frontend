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
        link: 'https://goo.gl/maps/wYTg1t7khYFzCQdP9'
    },
    {
        coord: [45.5299763, 9.3666279],
        street: 'Via Togliatti, 2 - Milano',
        path: './assets/img/img2.png',
        link: 'https://goo.gl/maps/VxK6MM8zkEiBGqvb6'
    },
    {
        coord: [45.284973, 9.111306],
        street: 'Piazza 25 Aprile - Milano',
        path: './assets/img/img3.png',
        link: 'https://goo.gl/maps/dStKwhQApPTYoNox9'
    },
    {
        coord: [44.64763, 10.85401],
        street: 'Via Emilia Ovest, 1480 - Modena',
        path: './assets/img/img4.png',
        link: 'https://goo.gl/maps/rZaLcWfigvQ8xYFk9'
    },
    {
        coord: [44.6345866, 10.9552156],
        street: 'Via Emilia Est, 981 - Modena',
        path: './assets/img/img5.png',
        link: 'https://goo.gl/maps/uRjajZwYpBGkEXdk7'
    },
    {
        coord: [41.1080290, 16.8805320],
        street: 'Via Orabona, 4 - Bari',
        path: './assets/img/img6.png',
        link: 'https://goo.gl/maps/jWphTx717vDU2Q8S8'
    },
    {
        coord: [41.126959, 16.87183968931251],
        street: 'Piazza Ferrarese, 28 - Bari',
        path: './assets/img/img7.png',
        link: 'https://goo.gl/maps/ZFDmuMED4br23R898'
    },
];

markers.forEach((marker) => {
    const tempMarker = new L.Marker(marker.coord, { draggable: true });
    const popupContent = document.createElement("div");
    popupContent.classList.add('text-center');
    popupContent.innerHTML = `<div class="background mb-2" style="background-image: url('${marker.path}');"></div><a href="${marker.link}">${marker.street}</a>`;
    tempMarker.addTo(map).bindPopup(popupContent);
});






