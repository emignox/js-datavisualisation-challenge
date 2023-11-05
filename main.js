const containerDiv = document.createElement('div');
containerDiv.id = 'container';
const canvasElement = document.createElement('canvas');
canvasElement.id = 'canvas';

canvasElement.style.height = '800px';

containerDiv.appendChild(canvasElement);

document.body.appendChild(containerDiv);

// Trova l'elemento h3 nel tuo HTML
const h3Element = document.getElementById(
  'Crimes_et_d.C3.A9lits_enregistr.C3.A9s_par_les_services_de_police',
);

// Trova il contenitore padre dell'elemento h3
const parentContainer = h3Element.parentElement;

// Inserisci il nuovo div subito dopo l'elemento h3
parentContainer.insertBefore(containerDiv, h3Element.nextSibling);

/// /////canvas

document.addEventListener('DOMContentLoaded', () => {
  const labels = [];
  const data = [];

  const table = document.getElementById('table1');
  const rows = table.querySelectorAll('tbody tr');

  rows.forEach((row, index) => {
    const cols = row.querySelectorAll('td');
    if (cols.length > 1) {
      labels.push(cols[0].textContent); // Cambiato da cols[1] a cols[0]
      data.push(
        Array.from(cols)
          .slice(1)
          .map((col) => parseFloat(col.textContent.replace(',', '.'))),
      );
    }
  });

  const ctx = document.getElementById('canvas').getContext('2d');
  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012,
      ],

      datasets: data.map((values, index) => ({
        label: labels[index],
        data: values,
        borderColor: `rgb(${Math.random() * 255},${Math.random() * 255},${
          Math.random() * 255
        })`,
        borderWidth: 1,
        fill: false,
      })),
    },
    options: {
      responsive: true,
      scales: {
        x: {
          type: 'category',
          position: 'bottom',
        },
        y: {
          type: 'logarithmic',
          min: 0,
        },
      },
    },
  });

  const observer = new MutationObserver(() => {
    labels.length = 0;
    data.length = 0;
    rows.forEach((row, index) => {
      const cols = row.querySelectorAll('td');
      if (cols.length > 1) {
        labels.push(cols[0].textContent);
        data.push(
          Array.from(cols)
            .slice(2)
            .map((col) => parseFloat(col.textContent.replace(',', '.'))),
        );
      }
    });
    chart.update();
  });

  observer.observe(table, {
    subtree: true,
    childList: true,
  });
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

  const labels = [];
  const datasets = [];

  const table = document.getElementById('table2');
  const rows = table.querySelectorAll('tbody tr');

  rows.forEach((row) => {
    const country = row.querySelector('td:nth-child(2)').innerText;
    labels.push(country);

    const data = [];
    row.querySelectorAll('td:nth-child(n+3)').forEach((cell) => {
      data.push(parseInt(cell.innerText));
    });

    datasets.push({
      label: country,
      data,
      backgroundColor: getRandomColor(),
      borderWidth: 1,
      fill: false,
    });
  });

  const newData = {
    labels: ['2007–09', '2010–12'],
    datasets,
  };

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
              size: 16,
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

//DERNIER CANVAS /////////

const yourNewContainerDiv = document.createElement('div');
yourNewContainerDiv.id = 'yourNewContainer'; // Cambia l'ID in quello che desideri
const yourNewCanvasElement = document.createElement('canvas');
yourNewCanvasElement.id = 'yourNewCanvas'; // Cambia l'ID in quello che desideri
yourNewContainerDiv.appendChild(yourNewCanvasElement);

document.body.appendChild(yourNewContainerDiv);

const yourNewH1Element = document.getElementById('firstHeading'); // Cambia l'ID in quello che desideri

const yourNewParentContainer = yourNewH1Element.parentElement;

yourNewParentContainer.insertBefore(
  yourNewContainerDiv,
  yourNewH1Element.nextSibling,
);

// GRAFICO
document.addEventListener('DOMContentLoaded', function () {
  var dataPoints = [];
  var chart;

  async function fetchData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Errore nella richiesta:', error);
      return null;
    }
  }

  async function initializeChart() {
    const initialData = await fetchData("https://canvasjs.com/services/data/datapoints.php?");

    if (initialData) {
      initialData.forEach(function(value) {
        dataPoints.push({x: value[0], y: parseInt(value[1])});
      });

      chart = new Chart("yourNewCanvas", {
        type: "line",
        data: {
          datasets: [{
            label: "Dati in tempo reale",
            data: dataPoints,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: false,
          }],
        },
        options: {
          scales: {
            x: {
              type: 'linear',
              position: 'bottom',
            },
            y: {
              min: -15,
              max: 60,
            },
          },
        },
      });

      updateChart();
    }
  }

  async function updateChart() {
    const newData = await fetchData(`https://canvasjs.com/services/data/datapoints.php?xstart=${dataPoints.length + 0}&ystart=${dataPoints[dataPoints.length - 1].y}&length=1&type=json`);

    if (newData) {
      newData.forEach(function(value) {
        dataPoints.push({x: parseInt(value[0]), y: parseInt(value[1])});
      });

      chart.data.datasets[0].data = dataPoints;
      chart.update();
    }

    setTimeout(updateChart, 1000);
  }

  initializeChart();
});
