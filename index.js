    // Dados para o gráfico de gênero
    var genderData = {
        labels: ["Homens", "Mulheres"],
        datasets: [{
          data: [64, 7],
          backgroundColor: ["rgba(255, 99, 132, 0.6)", "rgba(54, 162, 235, 0.6)"],
          borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
          borderWidth: 1
        }]
      };
  
      var genderOptions = {
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      };
  
      // Inicializa o gráfico de gênero
      var genderChart = new Chart(document.getElementById('genderChart'), {
        type: 'pie',
        data: genderData,
        options: genderOptions
      });

      //
    