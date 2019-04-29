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
  createCanvas(600, 480);
  // background(img2,0,0);
  imageMode(CENTER);
  // noLoop;
}


function draw() {
  fill(value);
  background(value);
  
  stroke(255);
  fill(value,0,0);
  ellipse(100,100,100);
 
   // image(img2,10,10,580,100);
  

stroke(255);

  line(30, 200, 50, 500);
  line(50, 200, 100, 500);
  line(100, 200, 150, 500);
  line(150, 200, 200, 500);
  line(200, 200, 250, 500);
  line(300, 200, 350, 500);
  line(350, 200, 400, 500);
  line(400, 200, 450, 500);
  line(450, 200, 500, 500);
  line(500, 200, 550, 500);

  image(img3,mouseX,mouseY);
  
    fill(value/1.9,value/1.9,value/1.9);
  noStroke();
  ellipse(450,150,100,50);
  ellipse(300,150,100,30);
  ellipse(250,150,100,50);
   fill(value+255,value+255,value);
    
  noStroke();
  translate(480, 50);
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 15, 10, 50);
    rotate(PI/3);
  
 
  
  }
}

function mousePressed() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}