
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1,ball2,ball3,ball4,ball5,roof1,rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
 ball1 = new Ball(235,300)
 roof1 = new Roof(400,100)
 rope1 = new Rope(roof1.roof,ball1.body,-160)
 ball2 = new Ball(315,300)
 rope2 = new Rope(roof1.roof,ball2.body,-80)
 ball3 = new Ball(395,300)
 rope3 = new Rope(roof1.roof,ball3.body,0)
 ball4 = new Ball(475,300)
 rope4 = new Rope(roof1.roof,ball4.body,80)
 ball5 = new Ball(555,300)
 rope5 = new Rope(roof1.roof,ball5.body,160)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball1.display()
  roof1.display();
  rope1.display();
  ball2.display();
  rope2.display();
  ball3.display();
  rope3.display();
  ball4.display();
  rope4.display();
  ball5.display();
  rope5.display();
  drawSprites();
 
}



