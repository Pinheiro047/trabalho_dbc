let ctx = document.getElementById('grafico_linha')

// Configuração do gráfico 

// Chart.defaults.backgroundColor = '#abd8f5'
Chart.defaults.borderColor = '#fff'
Chart.defaults.color = '#fff'
Chart.defaults.font.size = 26
Chart.defaults.font.family = 'sans-serif'
Chart.defaults.font.weight = 'bold'


// https://www.chartjs.org/docs/latest/general/colors.html

const labels = [
"TVA",
"TP",
"TCF",
"OM",
"C",
"TCAF",
"TAG",
"SO",
"TEFG",
"VP",
"EDSG",
"OUTROS"]

const data = {
    labels,
    datasets: [{
        data: [16, 9, 9, 8, 5, 4, 4, 3, 3, 2, 2, 6],
        label: 'Setor econômico',
        fill: false,
        backgroundColor: 'whitesmoke',
        borderColor: '#white',
        borderWidth: 3,
        tension: 0.2
    }],
}

const config = {
    type: 'line',
    data,
    options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        color: 'darkblue',
        pointBackgroundColor: 'black',
        pointBorderColor: 'black',
      },
}

const graph = new Chart(ctx, config)

