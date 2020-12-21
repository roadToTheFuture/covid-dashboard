// const getSummaryData = function () {
//   return fetch( BASE_URL )
//     .then((response) => response.json())
//     .then((data) => data)
//     .catch((error) => alert(error.message));
// };

async function getData(dataUrl) {
  try {
    const url = dataUrl;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

export { getData };
