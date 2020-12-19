fetch('https://api.covid19api.com/summary')
.then((response) => {
  return response.json();
})
.then((data) => {
console.log(data);
});