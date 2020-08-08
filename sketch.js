const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var world, engine;
engine = Engine.create(),
world = engine.world;

var plinkos = [];
var particles = [];
var div = [];

function setup() {
  Engine.run(engine)
  createCanvas(480,800);

  ground = new Ground(width/2, height-5, width, 20);

  for (var i = 0; i <= width; i = i + 60)
  {
    div.push(new Division(i));
  }

  for (var i = 50; i <= 500; i = i + 100)
  {
    for (var j = 40; j <= 440; j = j + 40)
    {
      plinkos.push(new Plinko(j, i));
    }
  }
  for (i = 100; i <= 550; i = i + 100)
  {
    for (var j = 20; j <= 460; j = j + 40)
    {
      plinkos.push(new Plinko(j, i));
    }
  }
}

function draw() {

  background(0);  

  ground.display();

  for (var i = 0; i < div.length; i ++)
  {
    div[i].display();
  }

  for (var i = 0; i < plinkos.length; i ++)
  {
    plinkos[i].display();
  }

  if (frameCount % 20 === 0)
  {
    particles.push(new Particle());    
  }
  for (var i = 0; i < particles.length; i++)
  {
    particles[i].display();
  }
}

