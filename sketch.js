var fixedRect;
var movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(400, 100, 50, 50);
  fixedRect.shapeColor= "green";
  fixedRect.debug= true;
 // fixedRect.velocityY= 3;

  movingRect = createSprite(400,400,50,50);
  movingRect.shapeColor = "blue";
  movingRect.debug= true;  
  //movingRect.velocityY= -3;
}
 
function draw() {
  background(0);  
  
  movingRect.y = mouseY;
  movingRect.x = mouseX;

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }

  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }


  

  
  drawSprites();
}