var ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
function preload()
{
	ground= new ground (width/2,670,width, 20)
	leftSide =new ground (1100, 600,20,120)
}

function setup() {
	createCanvas(800, 700);
var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0  ,
	density:1.2,

}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball=Bodies.circle(100,670,30)
World.add(world,ball)
ground=Bodies.rectangle(300,400,670,800,10)
World.add(world,ball)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display()
  ground.display()
  drawSprites();
 
}
function keyPressed (){
	if (keycode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0 , y:0 },{x:0.05, y:-0.05})
	}
}



