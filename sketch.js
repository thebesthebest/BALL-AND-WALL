var fixedRect, movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "purple";
  fixedRect.debug = true;
  
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "white";
  movingRect.debug = true;
}

function draw() {
  background(255,255,255);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2){
     movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
     }
     if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
      movingRect.shapeColor = "red";
     fixedRect.shapeColor = "red";
      }
      if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
        movingRect.shapeColor = "yellow";
       fixedRect.shapeColor = "yellow";
        }
  else {
    movingRect.shapeColor = "white";
    fixedRect.shapeColor = "black";
  }
  
  drawSprites();
} 