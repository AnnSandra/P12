var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

  rabbit.x=mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  createApples();
  createLeaves();

  drawSprites();
}

function createApples(){


  if(frameCount%80 === 0){
    var apple= createSprite(100,-10,10,10)
    apple.velocityY=2;
    apple.lifetime=200;
    apple.x=Math.round(random(10,350));
  }


}

function createLeaves(){

  if(frameCount%120 === 0){
    var leaf= createSprite(100,-10,10,10)
    leaf.velocityY=2;
    leaf.lifetime=200;
    leaf.x=Math.round(random(10,350));
  }
  
}