var path,mainCyclist;
var pathImg,mainRacerImg1,mainRacerImg2;
var cycleBell,cycleBellSound,pinkCG,pinkCGImage,  yellowCG,yellowCGImage,redCG,redCGImage;
var GameOverImage;
var pinkCGImage2,redCGImage2,yellowCGImage2;
var obstacle1,obstacle2,obstacleGroup;

var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;

function preload(){
  pathImg = loadImage("images/Road.png");
  mainRacerImg1 = loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
  mainRacerImg2= loadAnimation("images/mainPlayer3.png");
  cycleBellSound=loadSound("bell.mp3");
pinkCGImage=
  loadAnimation("images/opponent1.png","images/opponent2.png");
 pinkCGImage2=loadAnimation("images/opponent3.png");
 redCGImage=
   loadAnimation("images/opponent7.png","opponent8.png");
  redCGImage2=loadAnimation("images/opponent9.png");
  yellowCGImage=
    loadAnimation("images/opponent4.png","opponent5.png")
 yellowCGImage2=loadAnimation("images/opponent6.png")
  GameOverImage=loadAnimation("images/gameOver.png")
  obstacle1=loadImage("obstacle1.png");
  obstacle2=loadImage("obstacle2.png");


}
function setup(){
  
createCanvas(500,300);
  
// Moving background
path=createSprite(100,150);
path.addImage(pathImg);
path.velocityX = -5;

//creating boy running
mainCyclist  = createSprite(70,150,20,20);
mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
mainCyclist.scale=0.07;
pinkCG=createSprite(70,200,20,20);
yellowCG=createSprite(70,250,20,20);
  
  pinkCG.createGroup();
  yellowCG.createGroup();
  redCG.createGroup();
  obstacleGroup.createGroup();
  
  path.velocityX=-(6+2*distance/150);
  
}

function draw() {
  background("white");
  
 
  textSize(20);
  fill(255);
  text("Distance: "+ distance,350,30);
  distance=distance+Math.round(getFrameRate()/50);
  
  if(gameState===PLAY){
    gameOver.visible=false;
  pinkCyclist();
   redCyclist();
    yellowCyclist();
   mainCyclist.y = World.mouseY;
  
   edges= createEdgeSprites();
   mainCyclist .collide(edges);
  
  //code to reset the background
  if(path.x < 0 ){
    path.x = width/2;
  }
    
 }
  if(keydown("space")){
     cycleBell.addSound(cycleBellSound);
     }
  if(mainCyclist.isTouching(pinkCG)){
    gameState=END;
    pinkCG.destroyEach();
    path.velocityX=0;
    mainCyclist.velocityX=0;
    pinkCG.setLifetime=-1;
    pinkCG.setVelocityX=0;
    gameState=END;
  }
  if(mainCyclist.isTouching(redCG)){
    gameState=END;
    redCG.destroyEach();
    path.velocityX=0;
    mainCyclist.velocityX=0;
    redCG.setLifetime=-1;
    redCG.setVelocityX=0;
  }
  if(mainCyclist.isTouching(yellowCG)){
    gameState=END;
    yellowCG.destroyEach();
    path.velocityX=0;
    mainCyclist.velocityX=0;
    yellowCG.setLifetime=-1;
    yellowCG.setVelocityX=0;
  }
  if(mainCyclist.isTouching(obstacleGroup)){
    gameState=END;
    obstacleGroup.destroyEach();
    path.velocityX=0;
    mainCyclist.velocityX=0;
    obstcaleGroup.setLifetime=-1;
    obstacleGroup.setVelocityX=0;
  }
  
  if(GameState==END){
    gameOver=createSprite(250,150,20,20);
    gameOver.addImage(GameOverImage);
    gameover.scale=0.06;
    if (keyDown("upArrow")){
      reset();
    }
    
    
  }
  
     drawSprites();
}
var select_oppPlayer = Math.round(random(1,3))

if (World.frameCount % 150 ==0){
  if(select_oppPlayer==1){
   pinkCyclist();
    } if(select_oppPlayer==2){
       redCyclist();
    } if(select_oppPlayer==3){
      yellowCyclist();
    }
}
function pinkCyclist(){ 
 player1=
 createSprite(1100,Math.round(random(50,250)),10,10)
 player1.addAnimation("opponent",PinkCGImage);
 player1.scale=0.06;
 player1.setLifetime=170;
 pinkCG.add(player1);   
 pinkCG.velocityX=-(6+2*distance/150);               
}
function redCyclist(){
 player2=
 createSprite(1100,Math.round(random(50,250)),10,10)
 player2.addAnimation("opponent2",redCGImage);
 player2.scale=0.06;
 player2.setLifetime=170;
 redCG.add(player2);
 redCG.velocityX=-(6+2*distance/100);
}
function yellowCyclist(){
 player3=
  createSprite(1100,Math.round(random(50,250)),10,10)
 player3.addAnimation("opponent2",yellowCGImage);
 player3.scale=0.06;
 player3.setLifetime=170;
 yellowCG.add(player3);
 yellowCG.velocityX=-(6+3*distance/100);
}
function reset(){
  gameOver=PLAY
  pinkCG.destroyEach();
  redCG.destroyEach();
  yellowCG.destroyEach();
  distance=0;
}

if(World.frameCount % 200==0){
  createSprite(1100,Math.round(random(50,250)),10,10)
  obstacle.velocityX=-7;
  
  var obstacle_select=Math.round(random(1,2))
  if(obtacle==1){
    obstacle.addImage(obstacle1);
  } if(obtsacle==2){
    obstacle.addImage(obstacle2);
  }
  obstacleGroup.add(obstacle);  
  
}