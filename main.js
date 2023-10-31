const containerDiv = document.createElement('div');
containerDiv.id = 'container';
const canvasElement = document.createElement('canvas');
canvasElement.id = 'canvas';

canvasElement.style.height = '600';

containerDiv.appendChild(canvasElement);

document.body.appendChild(containerDiv);

// Trova l'elemento h3 nel tuo HTML
const h3Element = document.getElementById('Crimes_et_d.C3.A9lits_enregistr.C3.A9s_par_les_services_de_police');

// Trova il contenitore padre dell'elemento h3
const parentContainer = h3Element.parentElement;

// Inserisci il nuovo div subito dopo l'elemento h3
parentContainer.insertBefore(containerDiv, h3Element.nextSibling);

// GRAPHICS1//////////////

document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('canvas').getContext('2d');

  const countries = [
    'Belgium', 'Bulgaria', 'Czech Republic', 'Denmark', 'Germany', 'Estonia(⁹)',
    'Ireland', 'Greece(⁴)', 'Spain(⁹)', 'France', 'Croatia', 'Italy(⁴)',
    'Cyprus', 'Latvia(⁵)', 'Lithuania', 'Luxembourg', 'Hungary', 'Malta',
    'The Netherlands(⁶)', 'Austria', 'Poland', 'Portugal', 'Romania', 'Slovenia',
    'Slovakia', 'Finland(⁷)', 'Sweden', 'Iceland(⁸)', 'Liechtenstein', 'Norway',
    'Switzerland(⁷)', 'Montenegro', 'Macedonia', 'Serbia', 'Turkey(⁹)',
  ];

  const data = {
    labels: [
      '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012',
    ],
    datasets: [],
  };

  const countryData = [
    [1012.8, 1007.8, 1013.7, 999.4, 1022.8, 1034.4, 1043.6, 1067.3, 1072.0, 1111.0, 1073.8],
    [146.9, 143.9, 142.1, 137.8, 136.4, 134.7, 126.7, 138.1, 147.0, 128.6, 120.6],
    [372.3, 357.7, 351.6, 344.1, 336.4, 357.4, 343.8,	332.8,	313.4,	317.2,	304.5],
    [491.5,	486.2,	474.4,	432.7,	425.1,	445.3,	477.0,	491.8,	471.1,	466.8,	440, 8],
    [6507.4,	6572.1,	6633.2,	6391.7,	6304.2,	6284.7,	6114.1,	6054.3,	5933.3,	5990.7,	5997, 0],
    [53.3,	53.6,	53.0,	52.9,	51.8,	50.4,	51.0,	48.4,	48.3,	42.6,	40.8],
    [106.4,	103.5,	99.2,	102.2,	103.2],
    [441.1,	441.8,	405.6,	456.0,	463.8,	423.4,	417.4,	386.9,	334.0,	194.0,	194.1],
    [2183.5,	2144.2,	2141.3,	2230.9,	2267.1,	2309.9,	2396.9,	2339.2,	2297.5,	2285.5,	2268.9],
    [4113.9, 3974.7,	3825.4,	3775.8,	3725.6,	3589.3,	3558.3,	3521.3],
    [77.9,	80.4,	85.4,	79.9,	81.0,	75.9,	74.6,	73.5,	73.3,	75.6,	72.2],
    [2231.6,	2456.9,	2417.7,	2579.1,	2771.5,	2933.1,	2709.9,	2629.8,	2621.0,	2763.0,	2818.8],
    [4.8,	7.3,	7.6,	7.2,	7.9,	7.6,	7.3,	7.1,	8.4,	8.5,	8.0],
    [49.3,	51.8,	62.2,	51.4,	62.3,	55.6,	57.5,	56.7,	51.1,	51.6,	49, 9],
    [72.6,	79.1,	84.1,	82.1,	75.5,	68.0,	72.0,	76.3,	70.6,	72.1,	75.3],
    [26.0,	26.2,	26.9,	25.3,	25.9,	28.3,	28.2,	32.4,	30.5,	35.7,	37.6],
    [420.8,	413.3,	418.8,	436.5,	425.9,	426.9,	408.4,	394.0,	447.2,	451.4,	472.2],
    [17.0,	17.7,	18.4,	18.6,	16.5,	15.0,	13.8,	12.0,	13.3,	14.2,	15.6],
    [1401.9,	1369.3,	1319.5,	1348.3,	1311.8,	1303.8,	1277.8,	1254.5,	1194.0,	1194.1,	1139.7],
    [591.6,	643.3,	643.6,	605.3,	589.5,	594.2,	572.7,	591.6,	535.0,	548.0],
    [1404.2,	1466.6,	1461.2,	1380.0,	1287.9,	1153.0,	1082.1,	1129.6,	1151.2,	1159.6,	1119.8],
    [391.6,	417.4,	416.4,	392.7,	399.6,	398.6,	430.5,	426.0,	422.6,	413.7,	403.2],
    [312.2,	276.8,	231.6,	208.2,	232.7,	281.5,	289.3,	299.9,	292.7,	258.9,	308.5],
    [77.2,	76.6,	86.6,	84.4, 90.4,	88.2,	81.9,	87.5,	89.5,	88.7,	91.4],
    [107.4,	111.9,	131.2,	123.6, 115.2,	110.8,	104.8,	104.9,	95.3,	92.9,	90.4],
    [435.0,	443.5,	445.5,	432.3,	416.1,	435.8,	440.7,	441.4,	431.6,	458.3,	425.4],
    [1234.8,	1255.4,	1248.7,	1241.8,	1225.0,	1306.3,	1377.9,	1405.6,	1370.4,	1416.3,	1402.6],
    [19.9,	17.5,	16.6,	12.0,	13.5,	13.0,	14.6,	16.0,	14.9,	12.6,	11.7],
    [1.0,	1.1,	1.0,	1.1,	1.2,	1.1,	1.1,	1.2,	1.0,	1.1,	1.1],
    [319.5,	303.8,	287.8,	275.7, 77.0,	271.7,	264.2,	277.1,	270.7,	264.2,	273.5],
    [356.8,	379.3,	389.4,	352.7,	335.2,	326.2,	323.2,	676.3,	656.9,	693.0,	750, 4],
    [8.9,	8.6,	8.2,	9.6,	9.6,	9.3,	8.3,	8.1,	7.0,	6.1,	5.8],
    [18.3,	22.5,	22.7,	22.6,	22.0,	26.2,	28.3,	27.3,	28.5,	29.5],
    [95.6,	90.4,	99.9,	102.1,	99.2,	104.9,	106.0,	102.4,	101.1,	99.5,	96.1],
    [438.7,	472.2,	507.5,	667.8,	975.1,	970.6,	1012.3,	1288.1, 1521.7, 1652.8, 1904.5],

  ];

  for (let i = 0; i < countries.length; i++) {
    data.datasets.push({
      label: countries[i],
      data: countryData[i],
      borderColor: getRandomColor(),
      borderWidth: 1,
      fill: false,
    });
  }

  const config = {
    type: 'line',
    data,
    options: {
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: 'Anno',
          },
        },
        y: {
          type: 'logarithmic',
          display: true,
          title: {
            display: true,
            text: 'Numero (in migliaia)',
          },
        },
      },
      plugins: {
        tooltip: {
          callbacks: {
            label(context) {
              let label = context.dataset.label || '';
              if (label) {
                label += ': ';
              }
              label += `${context.parsed.y}K`;
              return label;
            },
          },
        },
        legend: {
          labels: {
            font: {
              size: 16,
            },
          },
        },
      },
    },
  };

  new Chart(ctx, config);

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});
// DUXIEME CANVAS //////////////

const newContainerDiv = document.createElement('div');
newContainerDiv.id = 'newContainer';
const newCanvasElement = document.createElement('canvas');
newCanvasElement.id = 'newCanvas';
newCanvasElement.style.width = '400';
newCanvasElement.style.height = '200';

newContainerDiv.appendChild(newCanvasElement);

document.body.appendChild(newContainerDiv);

const newH4Element = document.getElementById('Homicides');

const newParentContainer = newH4Element.parentElement;

newParentContainer.insertBefore(newContainerDiv, newH4Element.nextSibling);
// GRAPHIC2///////

document.addEventListener('DOMContentLoaded', () => {
  const newCtx = document.getElementById('newCanvas').getContext('2d');

  const newCountries = [
    'Latvia', 'Lithuania', 'Estonia', 'Czech Republic', 'Poland', 'Slovakia',
    'Hungary', 'England and Wales (UK)', 'Scotland (UK)', 'Spain', 'Romania',
    'Malta', 'Bulgaria', 'Luxembourg', 'Portugal', 'Croatia', 'Italy',
    'Greece', 'France', 'Austria', 'Belgium', 'Northern Ireland (UK)',
    'The Netherlands', 'Germany', 'Ireland', 'Cyprus', 'Denmark',
    'Sweden', 'Slovenia', 'Finland',
  ];

  const newData = {
    labels: ['2007–09', '2010–12'],
    datasets: [],
  };

  const newCountryData = [
    [312, 312],
    [247, 307],
    [266, 253],
    [198, 217],
    [228, 214],
    [159, 197],
    [148, 169],
    [151, 154],
    [150, 154],
    [158, 152],
    [132, 150],
    [126, 143],
    [132, 132],
    [139, 126],
    [106, 120],
    [108, 116],
    [98, 113],
    [105, 112],
    [99, 106],
    [101, 104],
    [93, 101],
    [84, 91],
    [90, 84],
    [89, 84],
    [76, 80],
    [84, 78],
    [66, 72],
    [74, 71],
    [66, 65],
    [63, 60],
  ];

  for (let i = 0; i < newCountries.length; i++) {
    newData.datasets.push({
      label: newCountries[i],
      data: newCountryData[i],
      backgroundColor: getRandomColor(),
      borderWidth: 1,
      fill: false,
    });
  }

  const newConfig = {
    type: 'bar',
    data: newData,
    options: {
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: 'Year',
          },
        },
        y: {
          type: 'linear',
          display: true,
          title: {
            display: true,
            text: 'Value',
          },
        },
      },
      plugins: {
        tooltip: {
          callbacks: {
            label(context) {
              let label = context.dataset.label || '';
              if (label) {
                label += ': ';
              }
              label += context.parsed.y;
              return label;
            },
          },
        },
        legend: {
          labels: {
            font: {
              size: 18,
            },
          },
        },
      },
    },
  };

  new Chart(newCtx, newConfig);

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});
