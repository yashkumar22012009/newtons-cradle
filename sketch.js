
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(800,680,1600,20)
roof1= new Roof(800,175,width/7,20)
bob1=new Bob(820,180,20,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  roof1.display();
  bob1.display();


 
}



