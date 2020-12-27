const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world,box1,ground;
function setup() {
  createCanvas(800,400);
engine = Engine.create();
world = engine.world;
ground = new Ground(400,390,800);
box1 = new Box(400,200,70,70);
}

function draw() {
  background("black");  
  Engine.update(engine);
  ground.display();
  box1.display();
}