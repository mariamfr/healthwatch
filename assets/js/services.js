// Creando el map en el contenedor
//setView configura la posiciones del mapa aca son las de chapinero
const map = L.map('map').setView([4.6482837, -74.0642103], 13);

//Mostrando el mapa con el enlace de openstreetmap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 25,
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);
