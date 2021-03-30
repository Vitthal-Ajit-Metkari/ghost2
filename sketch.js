var border,borderImage;
var bow , trishul,  background, gh1, gh2, gh3 ,gh4 ,trishulGroup;
var bowImage, trishulImage, ghost2Image, ghost1Image, ghost3Image ,ghost4Image, backgroundImage;
var shivmani,shivmaniImage;
var ghostSound, gameState;
var END = 0;
function preload(){
          
  backgroundImage = loadImage("night2.png");
  
  trishulImage = loadImage("trishul1.png");
  bowImage = loadImage("bow1.png");
  ghost1Image = loadImage("ghost4.png");
  ghost2Image = loadImage("ghost2.png");
  ghost3Image = loadImage("ghost3.png");
  ghost4Image = loadImage("ghost4.png");
  borderImage = loadImage("border.png");
  shivmaniImage = loadImage("diamond1.png");
  ghostSound = loadSound("ghost.mp3");
  
}

function setup() {
  createCanvas(700, 600);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 0.16;
  
  

  border =createSprite(540,300,10,600);
  border.addImage(borderImage);
  border.scale = 0.20
  
  shivmani = createSprite(620,300,20,20);
  shivmani.addImage(shivmaniImage);
  shivmani.scale = 0.2;
  
   score = 0  
 // making a groups 
  gh1= new Group();
  gh3= new Group();
  gh4= new Group();
  gh2= new Group();
  trishulGroup= new Group();
  
 
}

function draw() {

  // moving ground
    background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
      // ghostSound.play();
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createTrishul();
  }
  if (gh1.isTouching(border)){
   gameState = END;
  }
 
  if (gh2.isTouching(border)){
   gameState = END;
  }
  
 if (gh3.isTouching(border)){
   gameState = END;
  }
  
  if (gh4.isTouching(border)){
   gameState = END;
  }
 
 
  //creating continous enemies
  var select_ghost = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_ghost == 1) {
      ghost_1();
    } else if (select_ghost == 2) {
      ghost_2();
    } else if (select_ghost == 3) {
      ghost_4();
    } else {
      ghost_3();
    }
  }
  
  if (trishulGroup.isTouching(gh1)){
   gh1.destroyEach();
   trishulGroup.destroyEach();
   score=score+5;
  }
  
   if (trishulGroup.isTouching(gh2)){
   gh2.destroyEach();
   trishulGroup.destroyEach();
   score=score+2;
  }
  
   if (trishulGroup.isTouching(gh3)){
   gh3.destroyEach();
   trishulGroup.destroyEach();
   score=score+3;
  }
  
  if (trishulGroup.isTouching(gh4)){
   gh4.destroyEach();
   trishulGroup.destroyEach();
   score=score+4;
  }
  
  if (gameState === END) {
 
    
    //set velcity of each game object to 0
    background.velocityX = 0;
    bow.velocityY = 0;
    trishul.velocityY = 0;
    trishul.velocityX = 0;
    gh1.setVelocityXEach(0);
    gh4.setVelocityXEach(0);
    gh3.setVelocityXEach(0);
    gh2.setVelocityXEach(0);

    
    
    //set lifetime of the game objects so that they are never destroyed
  trishulGroup.setLifetimeEach(-1);
   gh1.setLifetimeEach(-1);
   gh2.setLifetimeEach(-1);
   gh3.setLifetimeEach(-1);
   gh4.setLifetimeEach(-1);
  }
    
  drawSprites();
    text("Score: "+ score, 500,50);
}


function ghost_1() {
  var g = createSprite(0,Math.round(random(20, 370)), 10, 10);
  g.addImage(ghost1Image);
  g.velocityX = 3;
  g.lifetime = 180;
  g.scale = 1;
  gh1.add(g);     
  return g
  
}

function ghost_4() {
  var h = createSprite(0,Math.round(random(20, 370)), 10, 10);
  h.addImage(ghost4Image);
  h.velocityX = 3;
  h.lifetime = 180;
  h.scale = 0.5;
   gh4.add(h);     
  return h;
}

function ghost_2() {
  var o = createSprite(0,Math.round(random(20, 370)), 10, 10);
  o.addImage(ghost2Image);
  o.velocityX = 3;
  o.lifetime = 180;
  o.scale = 0.3;
  gh3.add(o);     
  return o;   
}

function ghost_3() {
  var s = createSprite(0,Math.round(random(20, 370)), 10, 10);
  s.addImage(ghost3Image);
  s.velocityX = 3;
  s.lifetime = 180;
  s.scale = 0.4;
  gh2.add(s);     
  return s;
}


// Creating  arrows for bow
 function createTrishul() {
  var trishul= createSprite(600, 200, 60, 10);
  trishul.addImage(trishulImage);
  trishul.x = 360;
  trishul.y=bow.y;
  trishul.velocityX = -4;
  trishul.lifetime = 80;
  trishul.scale = 0.2;
  trishulGroup.add(trishul);
  return trishul;
   

}