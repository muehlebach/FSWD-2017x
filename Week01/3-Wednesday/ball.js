function Ball(x, y, radius) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.moveX = 2;
  this.moveY = 2;
}

Ball.prototype.move = function(oCanvas) {
  this.x += this.moveX;
  if (this.x === canvas.width-20) {
    this.moveX = -this.moveX;
  }
  if (this.x === 20) {
    this.moveX = -this.moveX;
  }
  this.y += this.moveY;
  if (this.y === canvas.height-20) {
    this.moveY = -this.moveY;
  }
  if (this.y === 20) {
    this.moveY = -this.moveY;
  }
}

Ball.prototype.renderBall = function(context) {
  context.beginPath();
  context.arc(this.x, this.y, 8, 0, 2*Math.PI, false);
  context.fillStyle = "White";
  context.fill();
} // renderBall
