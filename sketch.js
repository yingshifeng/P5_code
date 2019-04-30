var img1;
var img2;
var img3;
let value=0;

function preload(){
  img1 = loadImage('flash.jpg');
  img2 = loadImage('sky.jpg');
  img3 = loadImage('aircraft.png');
}

function setup() {
  createCanvas(1400, 650);
  // background(img2,0,0);
  imageMode(CENTER);
  // noLoop;
}


function draw() {
  fill(value);
  background(value);

  stroke(255);
  fill(value,value,0);
  ellipse(100,100,150);

   // image(img2,10,10,580,100);


stroke(255);

  line(130, 200, 150, 500);
  line(150, 200, 200, 500);
  line(200, 200, 250, 500);
  line(250, 200, 300, 500);
  line(300, 200, 450, 500);
  line(400, 200, 550, 500);
  line(550, 200, 600, 500);
  line(600, 200, 750, 500);
  line(750, 200, 800, 500);
  line(800, 200, 950, 500);

  image(img3,mouseX,mouseY);

    fill(value/1.25,value/1.11,value);
  noStroke();
  ellipse(450,150,100,50);
  ellipse(400,150,100,30);
  ellipse(500,150,100,50);
  ellipse(480,130,60,50);

  ellipse(750,160,100,50);
  ellipse(730,160,100,30);
  ellipse(800,160,100,50);
  ellipse(780,150,60,50);

   fill(value+255,value+255,value);

  noStroke();
  translate(780, 50);
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 15, 10, 50);
    rotate(PI/2);



  }
}

function mousePressed() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}
