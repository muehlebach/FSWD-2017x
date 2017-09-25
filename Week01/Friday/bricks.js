function Brick (y, x, isAlive, color) {  // x & y are the position of the bricks
  this.y = y;
  this.x = x;
  this.isAlive = isAlive;
  this.width = 50;
  this.height = 20;
  this.color = color;

}

Brick.prototype.renderBrick = function(context) {
  context.fillStyle = this.color;
  context.fillRect(this.x, this.y, this.width, this.height);
}
