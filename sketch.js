
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint
var roof;
var bob1,bob2,bob3,bob4,bob5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = createSprite(400,50,250,50);
	bob1 = new Bob(400,250,30);
	bob2 = new Bob(420,250,30);
	bob3 = new Bob(440,250,30);
	bob4 = new Bob(460,250,30);
	bob5 = new Bob(480,250,30)
	chain1 = new Rope(bob1.body,roof);
	chain2 = new Rope(bob2.body,roof);
	chain3 = new Rope(bob3.body,roof);
	chain4 = new Rope(bob4.body,roof);
	chain5 = new Rope(bob5.body,roof);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  drawSprites();
 
}



