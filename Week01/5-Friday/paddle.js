
function Paddle(width, height, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.cMovingPaddleLeft = 'N';   // N = Nothing - U = Up - D = Down
  this.cMovingPaddleRight = 'N';   // N = Nothing - U = Up - D = Down
} // End of Paddle Class

Paddle.prototype.renderPaddle = function(contwixt) {

  contwixt.fillStyle = "#dd33ff"; // RGB
  contwixt.fillRect(this.x, this.y, this.width, this.height);
}

Paddle.prototype.movePaddle = function(canvas) {
  var oThis = this;

  document.addEventListener('keydown', function(event) {
    if (event.keyCode == 37) { oThis.cMovingPaddle = 'L'; }   // Key Cursor Left for Left
  }) // End of EventListener
  document.addEventListener('keyup', function(event) {
    if (event.keyCode == 37) { oThis.cMovingPaddle = 'N'; }   // Key Cursor Left for Left
  }) // End of EventListener
  document.addEventListener('keydown', function(event) {
    if (event.keyCode == 39) { oThis.cMovingPaddle = 'R'; }   // Key Cursor Right for Right
  }) // End of EventListener
  document.addEventListener('keyup', function(event) {
    if (event.keyCode == 39) { oThis.cMovingPaddle = 'N'; }   // Key Cursor Right for Right
  }) // End of EventListener

  if (oThis.cMovingPaddle == 'L' && oThis.x >= 0) {
    oThis.x -= 5;
  }
  else if (oThis.cMovingPaddle == 'R' && oThis.x <= game.width-oThis.width) {
    oThis.x += 5;
  }

//  console.log("Down", oThis.y, oThis.cMovingPaddleLeft);
}
