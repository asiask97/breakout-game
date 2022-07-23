
// wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
  const startWindow = document.getElementById('startWindow');
  const gameWindow = document.getElementById("gameWindow");
  const playButton = document.getElementById("startGame");
  let round = 0;
  let questions = [];
  
  playButton.addEventListener('click', (e) =>{
    
    changeToResults(startWindow, gameWindow)
    // make sure questions loaded
    fetchQuestionsJSON().then(obj => {
      Object.values(obj)[0].forEach(element => {
        questions.push(element)
      });
      runGame(questions, round);
    });
     
  })

});



// show game screen and let user play game
function runGame(questions, round){  
  const optionOne = document.getElementById('choiceOneText');
  const optionTwo = document.getElementById("choiceTwoText");
  const gameWindow = document.getElementById("gameWindow");
  const statWindow = document.getElementById('statWindow');

  //display question based on round number
  optionOne.innerHTML= questions[round].optionOne
  optionTwo.innerHTML= questions[round].optionTwo

  let results=[];
  //if option one is picked
  optionOne.addEventListener('click', async (e) =>{
    let option = "one";
    results=[]
    changeToResults(gameWindow, statWindow);
    const response = postResults(round+1 , option).then(obj => {
      Object.values(obj).forEach(element => {
        results.push(element)
      });
      showResults(questions, round, results)
    });
   
  })

  //if option two is picked
  optionTwo.addEventListener('click', async (e) =>{
    let option = "two";
    results=[]
    changeToResults(gameWindow, statWindow);
    const response = postResults(round+1 , option).then(obj => {
      Object.values(obj).forEach(element => {
        results.push(element)
      });
      showResults(questions, round, results)
    });
  })


}



//disaplys results 
function showResults(questions, round, results){
  const gameWindow = document.getElementById("gameWindow");
  const statWindow = document.getElementById('statWindow');
  const nextQuestion = document.getElementById('nextQuestion');

  const resultOne = results[0].optionOne;
  const resultTwo = results[0].optionTwo;
  console.log(resultOne, resultTwo)


  if(round == 0){
    let resultsChart = new Chart("resultsChart", {
    type: "pie",
    data: {
      labels: ["Option One", "Option Two"],
      datasets: [{
        backgroundColor: ["#2F1F5B","#FFEBE5 "],
        borderColor:['#FFFFFF'],
        data: [resultOne, resultTwo]
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
  else{
    resultsChart.data.datasets[0].data = [resultOne, resultTwo];
    chartasks.update()
  }
  
  //if next game is clicked
  nextQuestion.addEventListener('click', (e) =>{
    runGame(questions, round+1);
    
    changeToResults(statWindow, gameWindow);
  })

}


/*  
===============================

       HELPER FUNCTIONS

===============================
*/
// fetch questions function 
async function fetchQuestionsJSON() {
  const response = await fetch('http://127.0.0.1:5000/');
  const questions = await response.json();
  return questions;
}

// post results to databse
async function postResults(round, option){
  const response = await fetch('http://127.0.0.1:5000/',{
    method: 'POST',
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "option": option,
      "question":round+1
    })
  });
  const res = await response.json();
  return res;
}

function changeToResults(toHide, toShow){
  
  //reset previous classes
  toHide.classList.remove('slideOut')
  //added time out to make smooth animations  
  toHide.classList.add('slideIn')
    
  setTimeout(function(){
    toHide.classList.add('hide')
    toShow.classList.add('slideOut')
  }, 970);

 setTimeout(function(){
    toShow.classList.remove('hide')
 }, 990);

};
