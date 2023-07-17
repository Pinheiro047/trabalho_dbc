let ctx = document.getElementById('grafico_barras1')

// Configuração do gráfico 

// Chart.defaults.backgroundColor = '#abd8f5'
Chart.defaults.borderColor = '#fff'
Chart.defaults.color = '#fff'
Chart.defaults.font.size = 26
Chart.defaults.font.family = 'sans-serif'
Chart.defaults.font.weight = 'bold'


// https://www.chartjs.org/docs/latest/general/colors.html

const labels = [
"Não completou 5º ano",
"6º ao 9º ano incompleto",
"Analfabetos",
"Até o 5º ano incompleto",
"Ensino Médio Completo",
"Ensino Médio Incompleto",
"Fundamental Completo",
"Ensino Superior Completo",
"Ensino Superior Incompleto"
]

const data = {
    labels,
    datasets: [{
        data: [9.3, 18.6, 5.1, 18.6, 4.2, 12.5, 14.0, 0.7, 1.4],
        label: 'Escolaridade dos escravos',
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