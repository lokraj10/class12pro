var garden,rabbit;
var gardenImg,rabbitImg;
var apples, appleImg;
var leaves, GreenleavesImg, redleaf, orangeleaf; 
var apple_count = 0
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  GreenleavesImg = loadImage("leaf.png")
  redleaf = loadImage("redImage.png")
  orangeleaf = loadImage("orangeLeaf.png")
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
  text("Apple Count:" + apple_count, 0, 15 )

}


function draw() {
  background(0);
  var select_fucntion = Math.round(random(1,2))
  rabbit.x = mouseX
  edges = createEdgeSprites();
  rabbit.collide(edges);
  console.log(apple_count)
  

  if(frameCount % 80 === 0 ){
    if(select_fucntion == 1){
        spawnleaves();
    }
    else{
      spawnApples();
    }
  }
  drawSprites();
};

function spawnApples(){
  if(frameCount % 80 === 0){  
  apples = createSprite(random(50,350),40,10,10)

  if(rabbit.collide(apples)){
    apple_count = apple_count + 1 
 }
  apples.velocityY = 6
  apples.lifetime = 300
  apples.addImage(appleImg)
  apples.scale = .05
  }
}

function spawnleaves(){
  leaves = createSprite(random(50,350),40,10,10)
  leaves.velocityY = 6
  leaves.lifetime = 300
  leaves.addImage(GreenleavesImg)
  var rand = Math.round(random(1,3))
    switch(rand){
      case 1: leaves.addImage(GreenleavesImg)
            break;
      case 2: leaves.addImage(redleaf)
            break;
      case 3: leaves.addImage(orangeleaf)
            break;
      default: break;
    }
  leaves.scale = .05
}