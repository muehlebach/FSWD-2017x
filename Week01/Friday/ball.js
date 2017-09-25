function Ball(x, y, radius) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.moveX = 2;
  this.moveY = 2;
}

Ball.prototype.move = function(oCanvas, nScore) {
  this.x += this.moveX;
  if (this.x === canvas.width-10) {
    this.moveX = -this.moveX;
  }
  if (this.x === 10) {
    this.moveX = -this.moveX;
  }
  this.y += this.moveY;
//  if (this.y === canvas.height-10) {
  if (this.y === canvas.height+20) {
    this.moveY = -this.moveY;
  }
  if (this.y === 10) {
    this.moveY = -this.moveY;
  }
}

Ball.prototype.changeDirection = function(oCanvas) {
  this.moveY = -this.moveY;
}

Ball.prototype.renderBall = function(context) {
  context.beginPath();
//  context.arc(this.x, this.y, 8, 0, 2*Math.PI, false);
  context.arc(this.x, this.y, this.radius, 0, 2*Math.PI, false);
  context.fillStyle = "#ff6666"; // RGB
  context.fill();
} // renderBall
