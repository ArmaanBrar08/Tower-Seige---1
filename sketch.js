const World = Matter.World;
var engine, world;

function setup() {
  createCanvas(800,400);
  
  engine = Matter.Engine.create()
  world = engine.world;

  //Bodies

  //Bodies.level2
  box1 = new Box(330, 235, 30, 40);
  box2 = new Box(360, 235, 30, 40);
  box3 = new Box(390, 235, 30, 40);
  box4 = new Box(420, 235, 30, 40);
  box5 = new Box(450, 235, 30, 40);
  //Bodies.level3
  box6 = new Box(360, 195, 30, 40);
  box7 = new Box(390, 195, 30, 40);
  box8 = new Box(420, 195, 30, 40);
  //Bodies.top1
  box9 = new Box(390, 155, 30, 40);

  //Ground
  ground1 = new Ground(-10, 370, 500, 10);
  ground2 = new Ground(315, 215, 150, 10);

  //PolyGon
  polyGon = Bodies.circle(50, 200, 20)
  World.add(world, polyGon)

  //slingShot
  slinghot = new SlingShot(this.polygon, {x : 100, y : 200});
}

function draw() {
  background(255,255,255);  
  Matter.Engine.update(engine)

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  drawSprites();
}
 
