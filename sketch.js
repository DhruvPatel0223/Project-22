
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var fairy, fairyImg;
var star1;


function preload()
{
   //preload the images here
   fairyImg = loadImage("images/fairy1.png");
   bgImg = loadImage("images/starnight.png")
}

function setup() {
	createCanvas(800, 750);
  engine = Engine.create();
  world = engine.world;

  fairy = createSprite(200,200,10,10);
  fairy.addImage("fairyImage", fairyImg);

  star1 = new star(300,700);
}


function draw() {
  background(bgImg);
  Engine.update(engine);

  if (keyDown(LEFT_ARROW)) {
    fairy.x=fairy.x+1;
    star1.display();
  }
}
