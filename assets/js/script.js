
// wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
  const startWindow = document.getElementById('startWindow');
  const gameWindow = document.getElementById("gameWindow");
  const playButton = document.getElementById("startGame");

  playButton.addEventListener('click', (e) =>{
    
    //added time out to make smooth animations  
    startWindow.classList.add('slideIn')
    setTimeout(function(){
      startWindow.classList.add('hide')
      gameWindow.classList.add('slideOut')
    }, 990);

    setTimeout(function(){
      gameWindow.classList.remove('hide')
    }, 980);

    //fetch questions from database

    runGame(0);
  })


});

// show game screen and let user play game
function runGame(round, questions){  
  
  const question = document.getElementById("question");
  const optionOne = document.getElementById('choiceOne');
  const optionTwo = document.getElementById("choiceTwo");
  
  //display question based on round number

  //if option one is picked
  optionOne.addEventListener('click', (e) =>{
    
    
  })

  //if option two is picked
  optionOne.addEventListener('click', (e) =>{
    
    
  })

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