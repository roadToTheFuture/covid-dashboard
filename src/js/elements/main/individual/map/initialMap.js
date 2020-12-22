/* eslint-disable no-undef */
const initialMap = function () {
  const mymap = L.map('mapid').setView([0.00, 15.00], 2);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibXlrb2xhLW5hemlta292IiwiYSI6ImNraXhnbHhuYTFyc3QzMm1tMzQ5eHA5ZHcifQ.I-eL5R52CFRxbUTbk79slQ', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
  }).addTo(mymap);

  fetch('https://raw.githubusercontent.com/Nazimkov-1984/timerJs/master/countries.json')
    .then((response) => response.json())
    .then((data) => {
      fetch('https://api.covid19api.com/summary')
        .then((response) => response.json())
        .then((digit) => {
          const allCountryName = [];
          const allCovidCountry = [];
          const filteredName = [];
          for (let i = 0; i < data.length; i++) {
            allCountryName.push(data[i].name);
          }
          for (let i = 0; i < digit.Countries.length; i++) {
            allCovidCountry.push(digit.Countries[i].Country);
          }
          for (let i = 0; i < digit.Countries.length; i++) {
            for (let j = 0; j < data.length; j++) {
              if (allCovidCountry[i] === allCountryName[j]) {
                filteredName[i] = data[j];
              }
            }
          }

          for (let i = 0; i < filteredName.length; i++) {
            let circle = L.circle([`${filteredName[i].latlng[0]}`, `${filteredName[i].latlng[1]}`], {
              color: 'red',
              fillColor: '#f03',
              fillOpacity: 0.5,
              radius: `${digit.Countries[i].TotalConfirmed}` / 15,
            }).addTo(mymap);
            circle.bindPopup(` Total confirmed Covid-19 ${digit.Countries[i].TotalConfirmed} peoples in ${filteredName[i].name}`);
          }
        });
    });
};

export { initialMap };
