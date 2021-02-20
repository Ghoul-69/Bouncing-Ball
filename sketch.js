const Bodies=Matter.Bodies
const World=Matter.World
const Engine=Matter.Engine

var engine,world;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world

  var groundOptions={
   isStatic:true
  }
  ground=Bodies.rectangle(200,390,200,20,groundOptions)
  World.add(world,ground)
  var ballOptions={
    restitution:1
  }
 ball=Bodies.circle(200,100,20,ballOptions)
 World.add(world,ball)
}

function draw() {
  background(255,255,255);  

 Engine.update(engine)
 fill("BROWN")
 rectMode(CENTER)
 rect(ground.position.x,ground.position.y,400,20)
 fill("RED")

ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,20,20)
}