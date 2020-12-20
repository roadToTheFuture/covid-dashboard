const BASE_URL = 'https://api.covid19api.com';
fetch(`${BASE_URL}/summary`)
.then((response) => {
  return response.json();
})
.then((data) => {
console.log(data);
return data;
});

