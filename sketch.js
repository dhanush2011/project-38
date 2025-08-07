
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var bottomGround,topGround,leftGround,rightGround;
var ball,ball2,ball3,ball4,ball5;
var right,left,up,down;



function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  right=createImg("right.png")
  right.position(300,50)
  right.size(50,50)
  right.mouseClicked(rightforce)
  left=createImg("left.png")
  left.position(250,50)
  left.size(50,50)
  left.mouseClicked(leftforce)
  up=createImg("up.png")
  up.position(200,50)
  up.size(50,50)
  up.mouseClicked(upforce)
  down=createImg("down.png")
  down.position(150,50)
  down.size(50,50)
  down.mouseClicked(downforce)

  bottomGround= new Ground(200,390,400,20);
  topGround=new Ground(200,10,400,20);
  leftGround=new Ground(10,200,20,400);
  rightGround=new Ground(390,200,20,400);
  
  ball=new Ball(50,10,10,"yellow")
  ball2=new Ball(100,40,15,"green")
  ball3=new Ball(30,40,20,"purple")
  ball4=new Ball(90,10,15,"aqua")




 
  

  


  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background("white");
  Engine.update(engine);


  bottomGround.show()
  topGround.show()
  leftGround.show()
  rightGround.show()
  ball.show();
  ball2.show()
  ball3.show();
  ball4.show()
  
 
}


function rightforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:1,y:0})
}
function leftforce() {
  Matter.Body.applyForce(ball2,{x:0,y:0},{x:-1,y:0})
}
function upforce() {
  Matter.Body.applyForce(ball3,{x:0,y:0},{x:0,y:1})
}
function downforce() {
  Matter.Body.applyForce(ball4,{x:0,y:0},{x:0,y:-1})
}