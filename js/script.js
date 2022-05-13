//!Info pdv
// - Piazza Luigi di Savoia 1 	- Milano
// - Via Togliatti, 2 	- Milano
// - piazza Venticinque Aprile 	- Milano
// - via Emilia Ovest 1480 	- Modena
// - via Emilia Est 981 	- Modena
// - via Orabona 4 	- Bari
// - piazza Ferrarese 28 - Bari	




const mapOptions = {
    center: [42.36, 12.02],
    zoom: 5.5
}
const map = new L.map('map', mapOptions);

//Tile Layer
const layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);


//Milan
const firstMilan = [45.4862737, 9.2063373];
const marker = new L.Marker(firstMilan);
marker.addTo(map);
marker.bindPopup('Piazza Luigi di Savoia 1, Milano');



