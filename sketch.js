const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var gameState = "onSling" 

function preload(){
  polygon_img=loadImage("polygon.png");
} 

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,40);
    stand1 = new Ground(550,350,250,10);
    stand2 = new Ground(800,200,200,10);

         
    block1 = new Block(460,325,30,40);
    block2 = new Block(490,325,30,40);
    block3 = new Block(520,325,30,40);
    block4 = new Block(550,325,30,40);
    block5 = new Block(580,325,30,40);
    block6 = new Block(610,325,30,40);
    block7 = new Block(640,325,30,40);
    block8 = new Block(490,285,30,40);
    block9 = new Block(520,285,30,40);
    block10 = new Block(550,285,30,40);
    block11 = new Block(580,285,30,40);
    block12 = new Block(610,285,30,40);
    block13 = new Block(520,245,30,40);
    block14 = new Block(550,245,30,40);
    block15 = new Block(580,245,30,40);
    block16 = new Block(550,205,30,40);
  

    Block1 = new Block(740,175,30,40);
    Block2 = new Block(770,175,30,40);
    Block3 = new Block(800,175,30,40);
    Block4 = new Block(830,175,30,40);
    Block5 = new Block(860,175,30,40);
    Block6 = new Block(770,135,30,40);
    Block7 = new Block(800,135,30,40);
    Block8 = new Block(830,135,30,40);
    Block9 = new Block(800,95,30,40);

    ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});
}

function draw(){
    background("black");
    Engine.update(engine);
    textSize(20);
  fill("lightYellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",280,30);

    ground.display();  
    stand1.display();
    stand2.display();

 fill("skyblue") ;
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    fill("pink");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    fill("turquoise");
    block13.display();
    block14.display();
    block15.display();
   fill("grey");
    block16.display();

fill("skyblue");
    Block1.display();
    Block2.display();
    Block3.display();
    Block4.display();
    Block5.display();
fill("turquoise");
    Block6.display();
    Block7.display();
    Block8.display();
fill("pink");
    Block9.display();

    fill("gold");
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingShot.display();
}

    
    function mouseDragged(){
      if(gameState!=="launched"){
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  }
  }
  
  function mouseReleased(){
      slingshot.fly();
      gameState = "launched"
  }
  
  function keyPressed(){
      if(keyCode === 32){
          slingshot.attach(ball.body);
      }
  }
