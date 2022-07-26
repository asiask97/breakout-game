let chart
let round = 0

// wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
  const startWindow = document.getElementById('startWindow');
  const gameWindow = document.getElementById("gameWindow");
  const playButton = document.getElementById("startGame");
  //let round = 0;
  let questions = [];
  
  playButton.addEventListener('click', (e) =>{
    e.stopImmediatePropagation();
    e.stopPropagation();
    changeToResults(startWindow, gameWindow)
    // make sure questions loaded
    fetchQuestionsJSON().then(obj => {
      Object.values(obj)[0].forEach(element => {
        questions.push(element)
      });
      runGame(questions, round)
    });
     
  })

});



// show game screen and let user play game
function runGame(questions, round){  
  const buttonOne = document.getElementById('choiceOne');
  const buttonTwo = document.getElementById('choiceTwo');
  const optionOne = document.getElementById('choiceOneText');
  const optionTwo = document.getElementById("choiceTwoText");
  const gameWindow = document.getElementById("gameWindow");
  const statWindow = document.getElementById('statWindow');

  //display question based on round number
  optionOne.innerHTML= questions[round].optionOne
  optionTwo.innerHTML= questions[round].optionTwo

  
 async function handlerOne(){
  buttonOne.removeEventListener('click', handlerOne, false);
  buttonTwo.removeEventListener('click', handlerTwo, false);

  let option = "one";
  results=[]
  changeToResults(gameWindow, statWindow);
  postResults(round+1 , option).then(obj => {
    Object.values(obj).forEach(element => {
      results.push(element)
    });
    showResults(questions, round, results)
    console.log('one')

  });
 }


  //if option one is picked
  buttonOne.addEventListener('click',  handlerOne, false)

  async function handlerTwo(){
    buttonTwo.removeEventListener('click', handlerTwo, false);
    buttonOne.removeEventListener('click', handlerOne, false);

    let option = "two";
    results=[]
    changeToResults(gameWindow, statWindow);
    postResults(round+1 , option).then(obj => {
      Object.values(obj).forEach(element => {
        results.push(element)
      });
      showResults(questions, round, results)
     
      console.log('two')

    });

  }
  //if option two is picked
  buttonTwo.addEventListener('click', handlerTwo, false) 
    //e.stopImmediatePropagation();
    

}

//disaplys results 
function showResults(questions, round, results){
  const gameWindow = document.getElementById("gameWindow");
  const statWindow = document.getElementById('statWindow');
  const endWindow = document.getElementById('endWindow');
  const nextQuestion = document.getElementById('nextQuestion');
  const resultsChart = document.getElementById("resultsChart");

  const resultOne = results[0].optionOne;
  const resultTwo = results[0].optionTwo;
  console.log(resultOne, resultTwo, round)
  
  if(!chart){
     chart = new Chart(resultsChart, {
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
  }else{
    chart.data.datasets[0].data = [resultOne, resultTwo];
    chart.update()
  }
  //if next game is clicked
  nextQuestion.addEventListener('click', function handler(e){
    //e.stopImmediatePropagation()
    if(round+1 == questions.length){
      changeToResults(statWindow, endWindow);
    }else{
      runGame(questions, round+1)
      changeToResults(statWindow, gameWindow);
    }
    console.log('next game', round)
    nextQuestion.removeEventListener('click', handler);
  })
  
}


/*  ===============================  */

        // HELPER FUNCTIONS //

/*  ===============================  */

// fetch questions function 
async function fetchQuestionsJSON() {
  const response = await fetch('https://wouldyouratherflask.herokuapp.com/');
  const questions = await response.json();
  return questions;
}

// post results to databse
async function postResults(round, option){
  const response = await fetch('https://wouldyouratherflask.herokuapp.com/',{
    method: 'POST',
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "option": option,
      "question":round
    })
  });
  const res = await response.json();
  return res;
}

function changeToResults(toHide, toShow){
  
  //reset previous classes
  toHide.classList.remove('slideOut')
  toHide.classList.remove('slideIn')
  toShow.classList.remove('slideOut')
  toShow.classList.remove('slideIn')
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
