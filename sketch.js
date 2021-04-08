const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var circle1, box;
function setup() {
  createCanvas(windowWidth,windowHeight);

    engine = Engine.create();
    world = engine.world;

    circle1 = new Circle(200, 200, 15, 15);
    box = createSprite(mouseX, 200, 30, 30);
   
}

function draw() {
  background("black");  

  Engine.update(engine);
  if (frameCount % 60 === 0){
    circle1.display();
  }

  drawSprites();
}