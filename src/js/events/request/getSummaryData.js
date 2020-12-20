import { BASE_URL } from '@js/constants/urls.js';

const getSummaryData = function () {
  return fetch(BASE_URL)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => alert(error.message));
};

export { getSummaryData };
