var Obstacle = function(speed, fill) {
  this.type = "Obstacle";
  this.posX = 800;
  this.posY = 300;
  this.width = 50;
  this.height = 50;
  this.speed = speed;
  this.fill = fill;
  this.collision = false;
  this.markForRemoval = false;
};

Obstacle.createRandomObstacles = function(level) {
  var speed;
  var obstc;
  var src2 = "images/cow_picture.png";
  var colors = ["red", "orange", "black"];
  var random3 = Math.floor(Math.random() * (3)) + 0;
  var color = colors[random3];
  if(level === 1 || level === 2) {
    speed = Math.floor(Math.random() * (51)) + 100;
    obstc = new Obstacle(speed, color);
    return obstc;
  }
  if(level === 3 || level === 4) {
    speed = Math.floor(Math.random() * (71)) + 120;
    obstc = new Obstacle(speed, color);
    return obstc;
  }
  if(level === 5 || level === 6) {
    speed = Math.floor(Math.random() * (91)) + 140;
    obstc = new Obstacle(speed, color);
    return obstc;
  }
  if(level === 7 || level === 8) {
    speed = Math.floor(Math.random() * (111)) + 160;
    obstc = new Obstacle(speed, color);
    return obstc;
  }
  if(level === 9 || level === 10) {
    speed = Math.floor(Math.random() * (131)) + 180;
    obstc = new Obstacle(speed, color);
    return obstc;
  }
  if(level > 10) {
    speed = Math.floor(Math.random() * (151)) + 200;
    obstc = new Obstacle(speed, color);
    return obstc;
  }
};

Obstacle.prototype.draw = function(ctx) {
  var img = new Image();
  img.src = "images/cow_picture.png";
  ctx.fillStyle = this.fill;
  ctx.drawImage(img, this.posX, this.posY, this.width, this.height);
};

Obstacle.prototype.move = function(delta) {
  this.posX = this.posX - (this.speed / delta);
};

Obstacle.prototype.isCollidedWith = function(obj2) {
  if (obj2.type === "Ball") {
    if (this.posY > obj2.posY + obj2.radius) {
      return false;
    } else {
      if (this.posX < obj2.posX + obj2.radius && obj2.posX + obj2.radius < this.posX + this.width) {
        this.collision = true;
      } else if (this.posX < obj2.posX - obj2.radius && obj2.posX - obj2.radius < this.posX + this.width) {
        this.collision = true;
      }
    }
    return false;
  }
};
