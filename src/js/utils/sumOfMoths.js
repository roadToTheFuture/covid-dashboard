export default function sumOfMoths(arr, type) {
  const result = [[], [], [], [], [], [], [], [], [], [], [], []];
  const months = [];

  if (type === 'cases') sumCases(arr);
  if (type === 'deaths') sumDeaths(arr);
  if (type === 'recovered') sumRecovered(arr);
  if (type === 'perHundred') {
    sumCases(arr);
    result.forEach((item) => months.push((item.reduce((acc, elem) => (acc + elem))) / 10));
    return months;
  }

  result.forEach((item) => months.push(item.reduce((acc, elem) => acc + elem)));
  return months;

  function sumCases(x) {
    x.forEach((element) => {
      for (const key in element.timeline.cases) {
        switch (key) {
          case '1/31/20':
            result[0].push(element.timeline.cases[key]);
            break;
          case '2/29/20':
            result[1].push(element.timeline.cases[key]);
            break;
          case '3/31/20':
            result[2].push(element.timeline.cases[key]);
            break;
          case '4/30/20':
            result[3].push(element.timeline.cases[key]);
            break;
          case '5/31/20':
            result[4].push(element.timeline.cases[key]);
            break;
          case '6/30/20':
            result[5].push(element.timeline.cases[key]);
            break;
          case '7/31/20':
            result[6].push(element.timeline.cases[key]);
            break;
          case '8/31/20':
            result[7].push(element.timeline.cases[key]);
            break;
          case '9/30/20':
            result[8].push(element.timeline.cases[key]);
            break;
          case '10/31/20':
            result[9].push(element.timeline.cases[key]);
            break;
          case '11/30/20':
            result[10].push(element.timeline.cases[key]);
            break;
          case '12/22/20':
            result[11].push(element.timeline.cases[key]);
            break;
        }
      }
    });
  }

  function sumDeaths(x) {
    x.forEach((element) => {
      for (const key in element.timeline.deaths) {
        switch (key) {
          case '1/31/20':
            result[0].push(element.timeline.deaths[key]);
            break;
          case '2/29/20':
            result[1].push(element.timeline.deaths[key]);
            break;
          case '3/31/20':
            result[2].push(element.timeline.deaths[key]);
            break;
          case '4/30/20':
            result[3].push(element.timeline.deaths[key]);
            break;
          case '5/31/20':
            result[4].push(element.timeline.deaths[key]);
            break;
          case '6/30/20':
            result[5].push(element.timeline.deaths[key]);
            break;
          case '7/31/20':
            result[6].push(element.timeline.deaths[key]);
            break;
          case '8/31/20':
            result[7].push(element.timeline.deaths[key]);
            break;
          case '9/30/20':
            result[8].push(element.timeline.deaths[key]);
            break;
          case '10/31/20':
            result[9].push(element.timeline.deaths[key]);
            break;
          case '11/30/20':
            result[10].push(element.timeline.deaths[key]);
            break;
          case '12/22/20':
            result[11].push(element.timeline.deaths[key]);
            break;
        }
      }
    });
  }

  function sumRecovered(x) {
    x.forEach((element) => {
      for (const key in element.timeline.recovered) {
        switch (key) {
          case '1/31/20':
            result[0].push(element.timeline.recovered[key]);
            break;
          case '2/29/20':
            result[1].push(element.timeline.recovered[key]);
            break;
          case '3/31/20':
            result[2].push(element.timeline.recovered[key]);
            break;
          case '4/30/20':
            result[3].push(element.timeline.recovered[key]);
            break;
          case '5/31/20':
            result[4].push(element.timeline.recovered[key]);
            break;
          case '6/30/20':
            result[5].push(element.timeline.recovered[key]);
            break;
          case '7/31/20':
            result[6].push(element.timeline.recovered[key]);
            break;
          case '8/31/20':
            result[7].push(element.timeline.recovered[key]);
            break;
          case '9/30/20':
            result[8].push(element.timeline.recovered[key]);
            break;
          case '10/31/20':
            result[9].push(element.timeline.recovered[key]);
            break;
          case '11/30/20':
            result[10].push(element.timeline.recovered[key]);
            break;
          case '12/22/20':
            result[11].push(element.timeline.recovered[key]);
            break;
        }
      }
    });
  }
}
