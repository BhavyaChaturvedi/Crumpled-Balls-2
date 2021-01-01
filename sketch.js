const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render
function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	  paper = new Paper(100, 450, 50);
	  ground = new Ground(400, 500, 800, 20)
	  dustbin1 = new Dustbin(450, 424, 20, 130);
	  dustbin3 = new Dustbin(600, 424, 20, 130);
	  dustbin2 = new Dustbin(520, 480, 180, 20);
	  
	//   var render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } });
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);

paper.display();
ground.display();
dustbin1.display();
dustbin2.display();
dustbin3.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:85, y:-85});
	
	}
}



