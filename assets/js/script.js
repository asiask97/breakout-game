
// wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
  const startWindow = document.getElementById('startWindow');
  const gameWindow = document.getElementById("gameWindow");
  const playButton = document.getElementById("startGame");

  playButton.addEventListener('click', (e) =>{
    gameWindow.classList.remove('hide');
    startWindow.classList.add('hide');
    runGame(0);
  })


});

// show game screen and let user play game
function runGame(round){

  

}

//disaplys results 
function showResults(){



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
            },
        },
    }
});

}