
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var cannon, cannon_Base;
var cannon_ball;
var Mountain;



function preload(){
  Mountain = loadImage("Mountain.png");
  cannon_ball = loadImage("cannonball.png");
  cannon_Base = loadImage("cannonBase.png");
}


function setup() {
  createCanvas(2000,800);
  
  engine = Engine.create();
  world = engine.world;
  
}


function draw() 
{
  background("#65cbe8");
  image(Mountain,200,300)
  Engine.update(engine);
  
}



