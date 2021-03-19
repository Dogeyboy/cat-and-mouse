var cat, catImg1, cat_walk, catImg2;
var mouse, mouseImg1, mouse_pose, mouseImg2;
var garden;
function preload() {
    //load the images here
 catImg1 = loadAnimation("images/cat4.png");
 cat_walk = loadAnimation("images/cat2.png","images/cat3.png");
 catImg2 = loadAnimation("images/cat1.png");

 mouseImg1 = loadImage("images/mouse4.png");
 mouse_pose = loadAnimation("images/mouse3.png", "images/mouse2.png");
 mouseImg2 = loadImage("images/mouse1.png");

 garden = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create cat and mouse sprites here
    cat = createSprite(800,650,10,10);
    cat.addAnimation("cat1",catImg1);
    cat.scale = 0.2;
    mouse = createSprite(150,650,10,10);
    mouse.addAnimation("mouse1",mouseImg1);
    mouse.scale = 0.2;

}

function draw() {

    background(garden);
    //Write condition here to evalute if cat and mouse collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        mouse.addAnimation("mouse2",mouseImg2);
        mouse.changeAnimation("mouse2",mouseImg2);
        cat.addAnimation("cat2",catImg2);
        cat.changeAnimation("cat2",catImg2);
        cat.velocityX = 0;
    }
    drawSprites();
}


function keyPressed(){
  if(keyCode === LEFT_ARROW){
  //For moving and changing animation write code here
  cat.addAnimation("Catwalk",cat_walk);
  cat.changeAnimation("Catwalk",cat_walk);
  cat.velocityX = -5;
  
  mouse.addAnimation("posing",mouse_pose);
  mouse.changeAnimation("posing",mouse_pose);
 }
}
