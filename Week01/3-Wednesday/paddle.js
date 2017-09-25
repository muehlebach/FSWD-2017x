
function Paddle(width, height, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.cMovingPaddleLeft = 'N';   // N = Nothing - U = Up - D = Down
  this.cMovingPaddleRight = 'N';   // N = Nothing - U = Up - D = Down
} // End of Paddle Class

Paddle.prototype.renderPaddle = function(contwixt) {

  contwixt.fillStyle = "white";
  contwixt.fillRect(this.x, this.y, this.width, this.height);
}

Paddle.prototype.movePaddleLeft = function(canvas) {
  var oThis = this;

  document.addEventListener('keydown', function(event) {
    if (event.keyCode == 89) { oThis.cMovingPaddleLeft = 'D'; }   // Key S for Up
  }) // End of EventListener
  document.addEventListener('keyup', function(event) {
    if (event.keyCode == 89) { oThis.cMovingPaddleLeft = 'N'; }   // Key S for Up
  }) // End of EventListener
  document.addEventListener('keydown', function(event) {
    if (event.keyCode == 83) { oThis.cMovingPaddleLeft = 'U'; }   // Key Y for Down
  }) // End of EventListener
  document.addEventListener('keyup', function(event) {
    if (event.keyCode == 83) { oThis.cMovingPaddleLeft = 'N'; }   // Key Y for Down
  }) // End of EventListener

  if (oThis.cMovingPaddleLeft == 'D' && oThis.y <= game.height-oThis.height) {
    oThis.y += 5;
  }
  else if (oThis.cMovingPaddleLeft == 'U' && oThis.y >= 10) {
    oThis.y -= 5;
  }

//  console.log("Down", oThis.y, oThis.cMovingPaddleLeft);
}

Paddle.prototype.movePaddleRight = function(canvas) {
  var oThis = this;

  document.addEventListener('keydown', function(event) {
    if (event.keyCode == 40) { oThis.cMovingPaddleRight = 'D'; }   // Cursor Down
  }) // End of EventListener
  document.addEventListener('keyup', function(event) {
    if (event.keyCode == 40) { oThis.cMovingPaddleRight = 'N'; }   // Cursor Down
  }) // End of EventListener
  document.addEventListener('keydown', function(event) {
    if (event.keyCode == 38) { oThis.cMovingPaddleRight = 'U'; }   // Cursor Down
  }) // End of EventListener
  document.addEventListener('keyup', function(event) {
    if (event.keyCode == 38) { oThis.cMovingPaddleRight = 'N'; }   // Cursor Down
  }) // End of EventListener

  if (oThis.cMovingPaddleRight == 'D' && oThis.y <= game.height-oThis.height) {
    oThis.y += 5;
  }
  else if (oThis.cMovingPaddleRight == 'U' && oThis.y >= 10) {
    oThis.y -= 5;
  }

//  console.log("Down", oThis.y, oThis.cMovingPaddleLeft);
}
