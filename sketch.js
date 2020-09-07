var paddle,ball,edge1,edge2,edge3,gameState;
function setup() {
  createCanvas(800,400);
  paddle=createSprite(395,395,200,10);
  paddle.shapeColor="blue";
  edge1=createSprite(1,395,10,1000);
  edge1.shapeColor="black";
  edge2=createSprite(1,5,10000,10);
  edge2.shapeColor="black";
  edge3=createSprite(795,1,10,1000);
  edge3.shapeColor="black";
  ball=createSprite(400,200,15,15);
  ball.shapeColor="white";
  gameState="PLAY"
}

function draw() {
  background("black");
  ball.velocityY=5;
  ball.velocityX=5;
  ball.bounceOff(paddle);
  ball.bounceOff(edge1);
  ball.bounceOff(edge2);
  ball.bounceOff(edge3);
  paddle.x=mouseX;
  if(ball.y>400){
    ball.x=400;
    ball.y=200;
  }
  drawSprites();
}
