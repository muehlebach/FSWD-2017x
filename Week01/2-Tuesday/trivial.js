class Game {
  constructor(questions) {
    this.players = [];
    this.questions = questions;
    this.isRunning = true;
  }

  addPlayer(player) {
    this.players.push(player);
  }

  askQuestion(n, player) {
    var a = prompt("Question for " + player.name + " " + this.questions[n].question, this.questions[n].answers);

    if (a == null) {
      this.isRunning = false;
    }
    else if (a != this.questions[n].correctAnswer) {
      alert("Wrong answer, try again");
      this.askQuestion(n, player);
      this.errors++;
      switch (this.questions[n].categorie) {
        case "science":
          player.scienceErrors++
          break;
        case "literature":
          player.literatureErrors++
          break;
        case "geography":
          player.geographyErrors++
          break;
        default:
      }
    }
    else {
      player.score++;
      alert("You are a little genius!");
    }
  }

  play() {
    var questionIndex = 0;
    var playerIndex = 0;
    while(questionIndex < this.questions.length && this.isRunning) {
      this.askQuestion(questionIndex, this.players[playerIndex]);
      playerIndex++;
      if (playerIndex >= this.players.length) {
        playerIndex = 0;
      }
      questionIndex++;
    }

    if (this.isRunning) {
      this.players.forEach(function(player){alert(`${player.name} made ${player.name} mistakes (scienceErrors: ${player.scienceErrors}, literatureErrors: ${player.literatureErrors}, geographyErrors: ${player.geographyErrors})`)});
    }
    else {
      alert("You stopped the game. Goodbye.");
    }
  }
}

class QuestionObj {
  constructor(question, answers, correctAnswer, categorie) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
    this.categorie = categorie;
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.errors = 0;
    this.scienceErrors = 0;
    this.literatureErrors = 0;
    this.geographyErrors = 0;
  }
}

var quest1 = new QuestionObj("What is Air?", ["A","B","C","D"], "B", "science");
var quest2 = new QuestionObj("What is Love?", ["A","B","C","D"], "C", "literature");
var quest3 = new QuestionObj("What is Hate?", ["A","B","C","D"], "D", "geography");
var quest4 = new QuestionObj("What is D-Day?", ["A","B","C","D"], "A", "science");
var quest5 = new QuestionObj("What is the EU?", ["A","B","C","D"], "A", "literature");
var quest6 = new QuestionObj("What is Brexit?", ["A","B","C","D"], "C", "science");
var quest7 = new QuestionObj("What is Greece?", ["A","B","C","D"], "B", "geography");
var listOfQuestions = [quest1, quest2, quest3, quest4, quest5, quest6, quest7];

var game = new Game(listOfQuestions);
var player1 = new Player("Juerg");
var player2 = new Player("Julya");
game.addPlayer(player1);
game.addPlayer(player2);
game.play();
