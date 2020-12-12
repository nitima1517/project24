
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,ball,box

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

      ground=new Ground(600,680,1200,30)

      ball=new Ball(100,600,25)

	box1=new Box(1000,590,20,130);
	box2=new Box(910,655,200,20);
	box3=new Box(820,590,20,130);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  box1.display();
  box3.display();
  box2.display();

  ground.display();
  ball.display();


  drawSprites();
 
}

function keyPressed(){
  if (keyCode===UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:120,y:-120})
    ball.body.velocity.x=0;
    ball.body.velocity.y=0;
  }
}

