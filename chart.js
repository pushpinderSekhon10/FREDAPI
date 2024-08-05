document.getElementById('genChart').addEventListener('click', async () => {


        const ctx = document.getElementById('myChart');
      
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              borderWidth: 2
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: false
              }
            }
          }
        })})
