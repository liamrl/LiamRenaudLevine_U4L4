const years = []
const temps = []

async function getData() {
    const response = await fetch("full.csv");
    const data = await response.text();
    const rows = data.split("\n").slice(1);
    rows.forEach((elem) => {
              const row = elem.split(",");
              const year = row[0];
              years.push(year);
              const temp = 14 + parseFloat(row[2]);
              temps.push(temp);
              console.log(year, temp);
            });

    createChart()
}

getData();



console.log(years)
console.log(temps)

function createChart(){
  const ctx = document.getElementById('myChart');
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: years,
            datasets: [{
              label: 'Global Average Temperature',
              data: temps,
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                min: 13.0,
                max: 16.0,
              }
            }
          }
        });
      }
