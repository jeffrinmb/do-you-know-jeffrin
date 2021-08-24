var readlineSync = require("readline-sync");
var chalk = require("chalk");

var score = 0;

var questions = [
  {
    question: "Where am I from? ",
    answer: "Kerala",
  },
  {
    question: "Where am I working? ",
    answer: "TCS",
  },
  {
    question: "What is my favourite food? ",
    answer: "Biriyani",
  },
  {
    question: "What is the color of my cycle? ",
    answer: "Green",
  },
  {
    question: "Who is my favourite cricketer? ",
    answer: "Sachin",
  },
];

var highScores = [
  {
    name: "Jeffrin",
    score: 5,
  },
  {
    name: "Alex",
    score: 4,
  },
];

var userName = readlineSync.question(chalk.cyan("Please enter your name "));
console.log(
  chalk.magenta(
    "Welcome " + userName + " to " + chalk.bold.cyan("Do You Know Jeffrin Quiz")
  )
);

function playGame(question, answer) {
  var userAnswer = readlineSync.question(chalk.yellow(question));
  console.log(chalk.blue("You have entered: " + userAnswer));
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    score += 1;
    console.log(chalk.green("You are right!"));
  } else {
    console.log(chalk.red("Sorry, Wrong Answer!"));
  }
}

function printHighScores() {
  console.log(chalk.blue("High Scores"));
  for (var i = 0; i < highScores.length; i++) {
    console.log(
      chalk.blue("Name:", highScores[i].name, "Score:", highScores[i].score)
    );
  }
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    playGame(questions[i].question, questions[i].answer);
  }
  if (score > 0) {
    console.log(chalk.green("YAY, You have scored " + score + " points"));
  } else {
    console.log(chalk.red("Please try again!"));
  }
}

function checkNewHighScore() {
  for (var i = 0; i < highScores.length; i++) {
    if (highScores[i].score < score) {
      console.log(
        chalk.yellow(
          "Congratulations Again!\nYou have marked High Score in the Quiz.\nKindly share me a screenshot of the score to update the High Score List."
        )
      );
      break;
    }
  }
}

game();
printHighScores();
checkNewHighScore();
