var readlineSync = require("readline-sync");

var score =0;
// welcome section
var userName = readlineSync.question("What is Your Name ! : ");
console.log("Welcome " + userName);

// function section

function play(question,answer){
  userAnswer = readlineSync.question(question);
  if(userAnswer=== answer){
    score = score +1;
    console.log("correct")
  }
  else{
    console.log("Sorry! Wrong answer")
  }
  console.log("Current Score is : " + score);
  console.log("------------------")
}
// play("where do I live: ","srinagar")
// play("Do I Know Tanay? : ","yes")

// array of questions

var questions =[{question:"Where Do I Live: ",
                answer: "srinagar"},
                {question:"What Do I do? : ",
                answer: "teacher"},
                {question:"What do I like to do in spare time: ",
                answer: "photography"},
                {question:"Am I married: ",
                answer: "yes"},
                {question:"what color of my hair have: ",
                answer: "blonde"},
               ]
for(var i=0; i<questions.length; i++)
  {
    currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
  }

console.log("So finally! you have scrored " + score + " points")