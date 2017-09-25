console.log("hello world");

var canvas = document.querySelector('#canvas');

function Game(canvas) {
  this.canvas = canvas;
  this.context = canvas.getContext("2d");
  this.width = canvas.clientWidth;
  this.height = canvas.clientHeight;
  this.ball = new Ball(20, 20, 5);
  this.paddleLeft = new Paddle( 10, 100, 10, 200);
  this.paddleRight = new Paddle( 10, 100, this.width-14, 200);
}

Game.prototype.renderBackground = function() {
  this.context.fillStyle = "black";
  this.context.fillRect(10, 10, this.width, this.height);
} // renderBackground

Game.prototype.checkCollisions = function() {
  if (this.paddleLeft.x+10 == this.ball.x &&
      this.ball.y >= this.paddleLeft.y && this.ball.y <= this.paddleLeft.y+this.paddleLeft.height) {
    console.log("Collision Paddle Left", this.paddleLeft.x, this.ball.x);
  }

  /*  if (this.paddleRight.x+this.paddleRight.width-14 == this.ball.x &&
        this.ball.y >= this.paddleRight.y && this.ball.y <= this.paddleRight.y+this.paddleLeft.height) {
      console.log("Collision Paddle Right", this.paddleRight.x, this.ball.x);
    }*/
     if (this.paddleRight.x-10 == this.ball.x &&
       this.ball.y >= this.paddleRight.y && this.ball.y <= this.paddleRight.y+this.paddleLeft.height) {
        console.log("Collision Paddle Right", this.paddleRight.x, this.ball.x);
      }
}

Game.prototype.play = function() {
  var playMe = this;
  setInterval(function() {
    playMe.renderBackground();
    playMe.ball.renderBall(playMe.context);
    playMe.ball.move(playMe.canvas);
    playMe.paddleLeft.renderPaddle(playMe.context);
    playMe.paddleRight.renderPaddle(playMe.context);
    playMe.paddleLeft.movePaddleLeft();
    playMe.paddleRight.movePaddleRight();
    playMe.checkCollisions();
  }, 16.7)
} // ending play method


var game = new Game(canvas);
game.play();
