
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var backgroundImage,background
var survivalTime

function preload(){
  
  backgroundImage = loadImage("jungle-1.jpg")
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}

function setup() {
  
createCanvas(400,400);
  
  background = createSprite(0,0,200,200)
  background.addImage(backgroundImage);
  
  
  monkey = createSprite(50,320,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.13;
  monkey.velocityY= 40
  
  ground = createSprite(400,380,800,10);
  ground.velocityX = -5;
 
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
  score = 0
  
  
}


function draw() {
   
   groundVisibility = false
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
    if(keyDown("space")&& monkey.y >= 260) {
        monkey.velocityY = -15; 
      
    }
  
  
      if (FoodGroup.isTouching(monkey)){
      FoodGroup.destroyEach();
      score=score+1
    }
  
    if(obstacleGroup.isTouching(monkey)){
      monkey.scale = 0.12
      
    }
   monkey.velocityY = monkey.velocityY + 0.8
  
   monkey.collide(ground);

 drawSprites(); 
  
  stroke("white")
  textSize(23)
  textFont("cambria")
  fill("white")
  text("SCORE: "+ score,30,40)
  
  stroke("white")
  textSize(23);
  fill("white");
  textFont ("cambria")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("SURVIVAL TIME : " + survivalTime,165,40);
  
  food();
  rocks();
}

function food(){
  if (frameCount % 80 === 0){
    banana = createSprite(400,200,20,200);
    banana.y = Math.round(random(80,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;
    banana.setLifetime = 80;
    
    FoodGroup.add(banana);
    
   
        
  }
}
  
  function rocks(){
  if (frameCount % 200 === 0){
    rock = createSprite(400,357,20,20);
    rock.addImage("rock",obstaceImage)
    rock.scale = 0.1;
    rock.velocityX = -4;
    rock.seLifetime = 80;
    
    obstacleGroup.add(rock);
    
  }
   
}
