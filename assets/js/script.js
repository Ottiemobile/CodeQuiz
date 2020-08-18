
//creates varables
var start = document.getElementById("start");
var questionEl = document.getElementById("question");
var submit = document.querySelector("button.submit");
var time = document.getElementById("time");
var remainingTime = (questions.length * 20 + 1);
var userName;
var ansSelect = document.getElementById("choices");
var userScore = document.getElementById("userScore");
var submitScore = document.querySelector("#submitScore");
var questionNum = 0;
var ans;
var timerId;


function timer(){
   remainingTime--;

   time.textContent = remainingTime;

   if (remainingTime <= 0){
      stopQuiz();
   }
   
}



// shows the current score

function showScore() {
   var name = nameEl.value.trim();

   if(name !== "") {
      var hiScore =
         JSON.parse(window.localStorage.getItem("hiScore")) || [];
      
      var newHi = {
         score: remainingTime,
         name: name
      };

      hiScore.push(newHi);
      window.localStorage.setItem("hiScore", JSON.stringify(hiScore));

      window.location.href = ("hiScores.html");
      
   }

}

// calls the function to set the timer

function startQuiz() {
   var homepageEl = document.getElementById('homepage');
   homepage.setAttribute("class", "hide");
   questionEl.removeAttribute("class");

   timerId = setInterval(timer, 5000);

   time.textContent = remainingTime;

   pullQuestion();

}

function stopQuiz() {
   clearInterval(timerId);


}

// creates the action when clicking on an answer
function clickedChoice() {
 if(this.value !== question[questionNum].answer){
   remainingTime -= 5;

   if (remainingTime < 0) {
      time = 0;
   }

   time.textContent = remainingTime;

   
 }  

 questionNum++;

 if (questionNum === questions.length){
    stopQuiz();
 
 } else {
    pullQuestion();
 }
}

// calls in a question

function pullQuestion() {
   //grab new question once it is answered/ quiz started
   var newQuestion = questions[questionNum];

   // shows question's title
   var QtsEl = document.getElementById("question-title");
   QtsEl = textContent = newQuestion.title;

   ansSelect.innerHTML = ""; // clears out old questions

   newQuestion.choices.forEach(function(choice, i){
      var choiceNode = document.createElement("button");
      choiceNode.setAttribute("class", "choices");
      choiceNode.setAttribute("value", choices);

      choiceNode.textContent = i+1+". "+ choice;

      choiceNode.onclick = clickedChoice;
      choices.appendChild(choiceNode);


   });

}
//------------end of question pull function-----------------------------------------------------



//   // We start the game with a score of 0.
//   var score = 0;

//   // Loop over every question object
//   for (var i = 0; i < questions.length; i++) {
//     // Display current question to user and ask OK/Cancel
//     var answer = confirm(questions[i].q);

//     // Compare answers
//     if (
//       (answer === true && questions[i].a === 't') ||
//       (answer === false && questions[i].a === 'f')
//     ) {
//       // Increase score
//       score++;
//       alert('Correct!');
//     } else {
//       alert('Wrong!');
//     }
//   }

//   // Show total at end
//   alert('You got ' + score + '/' + questions.length);
// when timer runs outgit add .

start.onclick = startQuiz();