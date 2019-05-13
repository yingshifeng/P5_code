var img;

function preload() {
  img1 = loadImage("bag.png");
  img2 = loadImage("Sun.png");
  img3 = loadImage("gui.png");
  img4 = loadImage("gui1.png");
  img5 = loadImage("dirtyocean.png");
  img6 = loadImage("ocean.png");

}

function setup() {
  createCanvas(500, 400);
  noCursor();
  noStroke();
}

function draw() {
  let x = mouseX;
  let y = mouseY;
  let ix = width - mouseX; // Inverse X
  let iy = height - mouseY; // Inverse Y

  if (mouseIsPressed) {
    imageMode(CORNER);

    background(img6);
    background(img3);
  } else {
    imageMode(CORNER);

    background(img5);

      background(img4);
  }



  imageMode(CENTER);
  image(img1, x, y);
  image(img2, ix, iy);



}
