
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bottom=createSprite(400, height-50, 200,20);
	bottom.shapeColor=color("red");

	side1=createSprite(295, 610, 20,100);
	side1.shapeColor=color("red");

	side2=createSprite(495, 610, 20,100);
	side2.shapeColor=color("red");
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



