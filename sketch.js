var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  leafImg = loadImage("leaf.png");
  appleImg = loadImage("apple.png");
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
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  createApples()
  drawSprites();

}
function createApples(){
  
  var select_sprites = Math.round(random(1,2));
  if (frameCount % 80 == 0){ 
    if (select_sprites == 1 ){
      apple = createSprite(random(50,350),40,10,10);
      apple.velocityY=3;
      apple.addImage(appleImg)
      apple.scale=0.05;
      
    }
  else {
  leaf = createSprite(random(50,350),40,10,10);
    leaf.velocityY=3;
    leaf.addImage(leafImg);
    leaf.scale=0.05;
  }
  }
}