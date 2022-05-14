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
const streetFirstMilan = 'Piazza Luigi di Savoia, 1 - Milano';
const secondMilan = [45.5299763, 9.3666279];
const streetSecondMilan = 'Via Togliatti, 2 - Milano';
const thirdMilan = [45.284973, 9.111306];
//Modena
const firstModena = [44.64763, 10.85401];
const secondModena = [44.6345866, 10.9552156];
//Bari
const firstBari = [41.1080290, 16.8805320];
const secondBari = [41.126959, 16.87183968931251];

const coords = [firstMilan, secondMilan, thirdMilan, firstModena, secondModena, firstBari, secondBari];


coords.forEach((coord, i) => {
    const marker = new L.Marker(coord, { draggable: true });
    const src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Stack_Exchange_logo_and_wordmark.svg/375px-Stack_Exchange_logo_and_wordmark.svg.png';
    const popupContent = document.createElement("div");
    popupContent.innerHTML = `<img src="${src}" /> <a href="">Google Map Link</a>`;
    marker.addTo(map).bindPopup(popupContent);
});



