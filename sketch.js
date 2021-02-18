var gardenImage, garden;
var catImage, cat, mouseImage, mouse;
var catAnimation, mouseAnimation;
var catLastImage, mouseLastImage;


function preload() {
//load the images here
    gardenImage=loadImage("images/garden.png");
    catImage=loadImage("images/cat1.png");
    mouseImage=loadImage("images/mouse1.png");

    catAnimation=loadAnimation("images/cat2.png","images/cat3.png");
    mouseAnimation=loadAnimation("images/mouse2.png","images/mouse3.png");

    catLastImage=loadAnimation("images/cat4.png");
    mouseLastImage=loadAnimation("images/mouse4.png");

}


function setup(){
    createCanvas(1000,800);

    //create tom and jerry sprites here
    garden=createSprite(500,400);
    garden.addImage("forest",gardenImage);
  
    cat=createSprite(850,600);
    cat.addImage("tom",catImage);
    cat.scale=0.15;

    mouse=createSprite(150,600);
    mouse.addImage("jerry",mouseImage);
    mouse.scale=0.15;

}


function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x < cat.width/2 - mouse.width/2){
      cat.addAnimation("catLast",catLastImage);
      cat.changeAnimation("catLast");
      cat.velocityX=0;
      cat.x=230;

      mouse.addAnimation("mouseLast",mouseLastImage);
      mouse.changeAnimation("mouseLast");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
     if(keyCode===LEFT_ARROW){
        cat.velocityX=-4;
        cat.addAnimation("catRunning",catAnimation);
        cat.changeAnimation("catRunning");

        mouse.addAnimation("mouseTeasing",mouseAnimation);
        mouse.changeAnimation("mouseTeasing");
     }


}
