
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
   ground = new Ground(360,100,650,60);
   bob = new Bob(120,570,60,50);
   bob2 = new Bob(245,570,60,50)
   bob3 = new Bob(370,570,60,50)
   bob4 = new Bob(495,570,60,50)
   bob5 = new Bob(620,570,60,50)

  
  

	engine = Engine.create();
	world = engine.world;
    


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  ground.display();
  bob.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  drawSprites();
 
}



