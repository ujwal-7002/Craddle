
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Roof;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Roof = new roof(400,100,800,50);
	bobObject1=new bob(320,335,20);
	bobObject2=new bob(360,335,20);
	bobObject3 = new bob(400,335,20);
	bobObject4=new bob(440,335,20);
	bobObject5=new bob(480,335,20);
	rope1=new rope(bobObject1.body,Roof.body,-bobDiameter*2, 0);
	rope2=new rope(bobObject2.body,Roof.body,-bobDiameter* 2, 0);
	rope3=new rope(bobObject3.body,Roof.body,-bobDiameter*2, 0);
	rope4=new rope(bobObject4.body,Roof.body,-bobDiameter*2, 0); 
    rope5=new rope(bobObject5.body,Roof.body,-bobDiameter*2, 0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  Roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}



