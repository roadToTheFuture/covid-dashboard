/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
export default function sumOfMoths(arr, type) {
  const indicator = type;
  const quantityForEachDayOfTheMonth = [];

  if (indicator === 'perHundred') {
    getFullYearInfo('cases', arr);
    return sumAllIndicatorsInMonth(true, quantityForEachDayOfTheMonth);
  }

  getFullYearInfo(indicator, arr);
  return sumAllIndicatorsInMonth(false, quantityForEachDayOfTheMonth);

  function getFullYearInfo(info, array) {
    const numberOfMonths = 12;
    const year = 20;

    array.forEach((element) => {
      let infoElement;

      if (info === 'cases') { infoElement = element.timeline.cases; }
      if (info === 'deaths') { infoElement = element.timeline.deaths; }
      if (info === 'recovered') { infoElement = element.timeline.recovered; }

      for (const key in infoElement) {
        for (let month = 1; month <= numberOfMonths; month += 1) {
          const daysInMonth = getNumberOfDaysInTheMonth(month);
          const date = `${month}/${daysInMonth}/${year}`;
          const monthInArray = quantityForEachDayOfTheMonth;

          if (key === date) {
            if (!monthInArray[month - 1]) { monthInArray[month - 1] = []; }
            monthInArray[month - 1].push(infoElement[key]);
          }
        }
      }
    });
  }

  function sumAllIndicatorsInMonth(isItPerHundred, array) {
    if (isItPerHundred) {
      return array.map((item) => item.reduce((acc, elem) => (acc + elem)) / 10);
    }
    return array.map((item) => item.reduce((acc, elem) => acc + elem));
  }

  function getNumberOfDaysInTheMonth(month) {
    const thirtyDays = '30';
    const twentyNineDays = '29';
    const thirtyOneDays = '31';

    if (month === 4 || month === 6 || month === 9 || month === 11) return thirtyDays;
    if (month === 2) return twentyNineDays;
    return thirtyOneDays;
  }
}
