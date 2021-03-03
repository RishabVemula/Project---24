
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, hammer, stone, rubber;





function preload()
{
	
}





function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 690, 800, 20)
	hammer = new Hammer(10,100,50,50)
	stone = new Stone(200,200,50,50)
	rubber = new Rubber(500,200,30)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  


	ground.display()
	hammer.display()
	stone.display()
	rubber.display()

  drawSprites();
 
}



