var snowflake,snowflakeImg
var backgroundImg
function preload() {
  snowflakeImg = loadImage("snow4.webp");
  backgroundImg = loadImage("snow3.jpg");
}
function setup() {
  createCanvas(600,400); 
}
function draw() {
  background(backgroundImg);  
  drawSprites();
  createSnowflake();
}
function createSnowflake(){
  if(frameCount%25===0){
  snowflake = createSprite(random(0,800), 0, 50, 50);
  snowflake.addImage(snowflakeImg);
  snowflake.velocityX = -1.5;
  snowflake.velocityY = 3;
  snowflake.scale = 0.1
  }
}