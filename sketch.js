const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;
var bar,thread1;
var bob1;











function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;

 bar=new Bar(700,100,500,40);
 
 bob1=new Bob(700,400,100);
 string1=new String(bob1.body,{x:700,y:100});
}

function draw() {
  background(255,255,255);  
  drawSprites();
  Engine.update(engine);

  bar.display();

  bob1.display();
  string1.display();

}
function keyPressed(){
  if(keyCode===49){
    this.bob1.position.x = mouseX;
      this.bob1.position.y = mouseY;
  }
}