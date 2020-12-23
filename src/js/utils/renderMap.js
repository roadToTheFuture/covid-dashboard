import { createDomElement } from '@js/utils/createDomElement.js';
export default function renderMap(coordinates, casesInfo, countryName) {

  const oldMap = document.getElementById('mapid');
  oldMap.parentNode.removeChild(oldMap);

  const winMap = document.querySelector('.window__map');
  createDomElement('div', '', '', winMap, 'id', 'mapid');

  const mymap = L.map('mapid').setView(coordinates, 5);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibXlrb2xhLW5hemlta292IiwiYSI6ImNraXhnbHhuYTFyc3QzMm1tMzQ5eHA5ZHcifQ.I-eL5R52CFRxbUTbk79slQ', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, '
      + 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
  }).addTo(mymap);

  const circle = L.circle(coordinates, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: casesInfo / 15,
  }).addTo(mymap);
  circle.bindPopup(` Total confirmed Covid-19 ${casesInfo} peoples in ${countryName}`);
};
