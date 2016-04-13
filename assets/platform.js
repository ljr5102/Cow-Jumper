var Platform = function() {
  this.type = "Platform";
  this.posX = 0;
  this.posY = 350;
  this.width = 800;
  this.height = 50;
  this.markForRemoval = false;
};

Platform.prototype.draw = function(ctx) {
  ctx.fillStyle = 'green';
  ctx.fillRect(this.posX, this.posY, this.width, this.height);
};

Platform.prototype.move = function(delta) {
  return;
};

Platform.prototype.isCollidedWith = function(obj2) {
  return;
};
