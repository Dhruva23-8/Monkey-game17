
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  monkey = createSprite(40,350,10,10); 
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;  
  
  ground = createSprite(300,385,1200,10);
  ground.velocityX=-4;
  
  foodGroup = new Group();
  var survivalTime=0;
  score=0;
}

function draw() {
  background("lightblue");
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  console.log(monkey.y)
  if(keyDown("space")&&monkey.y>=349){
    monkey.velocityY=-11;
  }
  monkey.velocityY = monkey.velocityY+0.8;
  monkey.collide(ground);
  food();
  obstacles();
  //score=score+Math.round(getFrameRate()/60);
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50);
  
}

function food(){
  if(frameCount%80===0){
    banana=createSprite(550,280,10,10);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX = -5;
    banana.lifetime = 650;
    monkey.depth = banana.depth+1;
    banana.y = random(250,300);
    foodGroup.add(banana);
  }
}

function obstacles(){
  if(frameCount%300===0){
    obstacle=createSprite(550,350,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-5;
    obstacle.scale=0.2;
  }
}

