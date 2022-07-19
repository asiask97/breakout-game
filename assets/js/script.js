



let resultsChart = new Chart("resultsChart", {
    type: "pie",
    data: {
      labels: ["Option One", "Option Two"],
      datasets: [{
        backgroundColor: ["#2F1F5B","#FFEBE5 "],
        borderColor:['#FFFFFF'],
        data:  [12, 18]
      }]
    },
    options: {
        plugins:{
            legend:{
                display: false,
                fontColor: 'white'
            },
        },
    }
});
