let ctx = document.getElementById('grafico_barras')

// Configuração do gráfico 

// Chart.defaults.backgroundColor = '#abd8f5'
Chart.defaults.borderColor = '#fff'
Chart.defaults.color = '#fff'
Chart.defaults.font.size = 26
Chart.defaults.font.family = 'sans-serif'
Chart.defaults.font.weight = 'bold'


// https://www.chartjs.org/docs/latest/general/colors.html

const labels = ["18-24 anos", "25-29 anos", "30-34 anos", "35-39 anos", "40-44 anos", "45-49 anos", "50-54 anos", "60+ anos"]

const data = {
    labels,
    datasets: [{
        data: [22, 9, 14, 7, 2, 3, 7, 6],
        label: 'Idade dos escravos',
        backgroundColor: 'darkblue',
        borderColor: 'darkblue',
        borderWidth: 3
    }],
}

const config = {
    type: 'bar',
    data,
    options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        color: 'white',
        pointBackgroundColor: 'white',
        pointBorderColor: 'white',
      },
}

const graph = new Chart(ctx, config)

