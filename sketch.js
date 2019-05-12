var x = 200;
var speedX = 2;

var y = 100;
var speedY = 2;

var a = 0;
var speedA = 1;

var b = 0;
var speedB = 1;

function preload() {
  moon = loadImage('moon.png');
  sun = loadImage('sun.png');
  stars = loadImage('stars.jpg');
  sky = loadImage('sky.jpg');
  city = loadImage('city.png');
  ocean = loadImage('ocean.png');
}

function setup() {
  createCanvas(600, 500);

}

function draw() {

  if ((mouseX <= 300) && (mouseY <= 500)){
  noTint();
  background(255);
  background(sky);

  //sun
  image(sun, a, b, 110, 110);

  a = a + speedA;
  b = b + speedB;

  if (a > width - 110){
  	speedA = -1;
  }

  if (a < 0){
    speedA = 1;
  }

  if (b > height - 110){
  	speedB = -1;
  }

  if (b < 0){
    speedB = 1;
  }

    tint('lightBlue');
  image(city, 0, 205);

  tint('pink');
  image(ocean, 0, 225);
  }

  else {

  noTint();
  background(0);
  background(stars);

    //moon
  image(moon, x, y, 110, 110);

  x = x + speedX;
  y = y + speedY;

   if (x > width - 110){
  	speedX = -2;
  }

   if (x < 0){
    speedX = 2;
  }

   if (y > height - 110){
  	speedY = -2;
  }

   if (y < 0){
    speedY = 2;
  }

  tint('orange');
  image(city, 0, 205);

  tint('brown');
  image(ocean, 0, 225);

  }

}
