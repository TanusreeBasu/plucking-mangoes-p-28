
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;
var tree;
var boy, boyimage;
var stone;
var launcher;
var man1, man2, man3, man4, man5, man6, man7, man8, man9, man10;

var chain;
function preload()
{
	boyimage = loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(800, 700);


engine = Engine.create();
world = engine.world;


ground = new Ground(400,690, 800,20);

var options={

  isStatic:true
}
boy = Bodies.rectangle (150,650,90,140,options);

World.add(world,boy);
boy.debug=true;


tree = new Tree (620,500,350,400 );


//stone = new Stone(35, 600, 30);
stone = new Stone(90,610,30)

// boy = createSprite(80, 620, 40,50);
// boy.addImage(boyimage);
// boy.scale = 0.1;

 

 


  man1 = new Mango(600, 440, 40);
  man2 = new Mango(670, 460, 40);
  man3 = new Mango(700, 490, 40);
  man4 = new Mango(740, 390, 40);
  man5 = new Mango(540, 390, 40);
  man6 = new Mango(510, 420, 40);
  man7 = new Mango(760,420 , 40);
  man8 = new Mango(700, 420, 40);
  man9 = new Mango(630,390 , 40);
  man10 = new Mango(600, 380, 40);
  
 launcher = new Launcher(stone.body,{x:90,y:610});
 Engine.update(engine);
}


function draw() {
 // rectMode(CENTER);
  
  background("lightblue");
 
  text("Press Space to get a second Chance to Play!!",50 ,50);
  ground.display();
  imageMode(CENTER);
  image(boyimage, boy.position.x, boy.position.y,200,190);
  tree.display();
  stone.display();
  man1.display();
  man2.display();
  man3.display();
  man4.display();
  man5.display();
  man6.display();
  man7.display();
  man8.display();
  man9.display();
  man10.display();
  launcher.display();
 
//  line(bodyA.x,bodyA.y,pointB.x,pointB.y);


  //detectollision(stone,man1);
//  detectollision(stone,man2);
 // detectollision(stone,man3);
 // detectollision(stone,man4);
 // detectollision(stone,man5);
 // detectollision(stone,man6);
//  detectollision(stone,man7);
//  detectollision(stone,man8);
//  detectollision(stone,man9);
 // detectollision(stone,man10);
 

 
}
function detectCollosion(){}


function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
  launcher.fly();
}
function keyPressed(){
if(keyCode ===32){
  Matter.Body.setPosition(stone.body,{x:stone.body.position.x,y:stone.body.position.y});
  launcher.attach(stone.body);
}
}
