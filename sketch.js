const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var world,engine;
var ground1, ground2, ground3;
var box1, box2, box3, box4, box5, box6, box7, box8, box9;
var box10, box11, box12, box13, box14, box15, box16, box17, box18;
var polygon, slingShot;


var score = 0;

function setup() {
  var canvas = createCanvas(1700,900);
  
  engine = Engine.create();
  world = engine.world;

  polygon = new Polygon(100,100,50);

  slingShot = new SlingShot(polygon.body, {x:200, y:150});
  ground1 = new Ground(0,850,3600,20);
  ground2 = new Ground(660,500,250,20);
  ground3 = new Ground(1280,300,250,20);

  box1 = new Box(580,300,40,40);
  box2 = new Box(620,300,40,40);
  box3 = new Box(660,300,40,40);
  box4 = new Box(660,300,40,40);
  box5 = new Box(620,300,40,40);
  box6 = new Box(660,300,40,40);
  box7 = new Box(700,300,40,40);
  box8 = new Box(700,300,40,40);
  box9 = new Box(740,300,40,40);

  box10 = new Box(1200,100,40,40);
  box11 = new Box(1240,100,40,40);
  box12 = new Box(1240,100,40,40);
  box13 = new Box(1280,100,40,40);
  box14 = new Box(1280,100,40,40);
  box15 = new Box(1280,100,40,40);
  box16 = new Box(1320,100,40,40);
  box17 = new Box(1320,100,40,40);
  box18 = new Box(1360,100,40,40);
}

function draw() {

  background(0);
  Engine.update(engine);
  polygon.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
 
  slingShot.display();
  ground1.display();
  ground2.display();
  ground3.display();

  drawSprites();

  
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(polygon.body);
  }
}

