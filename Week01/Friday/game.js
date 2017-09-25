console.log("hello world");

var canvas = document.querySelector('#canvas');

function Game(canvas) {
  this.canvas = canvas;
  this.context = canvas.getContext("2d");
  this.canvasId = document.getElementById("canvas");
  this.width = canvas.clientWidth;
  this.height = canvas.clientHeight;
  this.ball = new Ball(300, 300, 8);
  this.paddle = new Paddle( 100, 10, 200, this.height-14);
  this.image = new Image();
  this.image.src = 'background.jpg';
  this.score;
  this.gameOver;
  this.brick = new Brick(15, 10, this.width, this.height);
  this.bricks = [];
  this.speed;
}

Game.prototype.createBricks = function(context) {
  var color = 'Green';
  for (var yPos = 15; yPos < 150; yPos+=30) {
    for (var xPos = 15; xPos <440; xPos+=60) {
       if      (yPos == 15)  {color = "#00ddff"} // RGB
       else if (yPos == 45)  {color = "#22ffff"} // RGB
       else if (yPos == 75)  {color = "#55ffff"} // RGB
       else if (yPos == 105) {color = "#88ffff"} // RGB
       else if (yPos == 135) {color = "#ccffff"} // RGB
       this.bricks.push(new Brick(yPos, xPos, true, color));
       }
    }
} // Ends createBricks

Game.prototype.renderBricks = function(context) {
  for (var aPos = 0; aPos < this.bricks.length; aPos++) {
    if (this.bricks[aPos].isAlive) {
       this.bricks[aPos].renderBrick(context);
    }
  }
}

Game.prototype.checkBricksCollisions = function() {
  // console.log("Collision Paddle", this.paddle.x, this.ball.x, this.height, this.width, this.paddle.y, this.paddle.x);
  for (var aPos = 0; aPos < this.bricks.length; aPos++) {
    if (this.bricks[aPos].isAlive) {
      if (this.ball.y+this.ball.radius <= this.bricks[aPos].y+35) {
        if (this.ball.x >= this.bricks[aPos].x-2 && this.ball.x <= this.bricks[aPos].x+53) {
//          console.log("Collision with Brick YES Ball-Pos X: " + this.ball.x + " - Brick-Pos X: " + this.bricks[aPos].x, aPos, this.bricks.length);
          this.bricks[aPos].isAlive = false;
          this.ball.changeDirection();
          this.score+=10;
          if      (this.score ==  80) { this.speed++;}
          else if (this.score == 160) { this.speed++;}
          else if (this.score == 240) { this.speed++;}
          else if (this.score == 320) { this.speed++;}
          break;
        }
      }
    }
  }
}

Game.prototype.checkBallOut = function() {
  if (this.ball.y+this.ball.radius >= this.height+20) {
     this.gameOver = true;
     prompt("Game Over\nYour Score " + this.score +"\nYour Name: ");
  }
}

Game.prototype.renderBackground = function() {
  this.context.drawImage(this.image, 0, 0, 500, 700);
} // renderBackground

Game.prototype.checkPaddleCollisions = function() {
  if (this.ball.y+this.ball.radius == this.paddle.y &&
     this.ball.x+this.ball.radius >= this.paddle.x && this.ball.x+this.ball.radius <= this.paddle.x+this.paddle.width) {
     this.ball.changeDirection();
  }
}

Game.prototype.printScore = function() {
  var oThis = this;
  this.context.font="20px Verdana";
  var gradient=this.context.createLinearGradient(0,0,oThis.canvasId.height,0);  // Create gradient
  gradient.addColorStop("0","magenta");
  gradient.addColorStop("0.5","blue");
  gradient.addColorStop("1.0","red");
  this.context.fillStyle=gradient;  // Fill with gradient
  this.context.fillText("SCORE " + this.score, 10, 580);
} // Ends printScore

Game.prototype.reset = function() {
  this.gameOver = false;
  this.score = 0;
  this.speed = 1;
  this.ball.ballX = 100;
  this.ball.ballY = 100;
}

Game.prototype.play = function() {
  var oThis = this;
  this.reset();
  this.createBricks();
  setInterval(function() {
    if (oThis.gameOver == true) {
       return;
    }
    oThis.renderBackground();
    oThis.ball.renderBall(oThis.context);
    oThis.ball.move(oThis.canvas, oThis.score);
    oThis.paddle.renderPaddle(oThis.context);
    oThis.paddle.movePaddle();
    oThis.renderBricks(oThis.context);
    oThis.checkPaddleCollisions();
    oThis.checkBricksCollisions();
    oThis.checkBallOut();
    oThis.printScore();
  }, 10)
} // ending play method


var game = new Game(canvas);

game.play();
