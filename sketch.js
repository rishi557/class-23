const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
box1=new Box(200,100,50,10);
box2=new Box(170,200,30,30);
ground= new Ground(200,390,400,20);
console.log(box1)
}

//box1 = new Box();

function draw(){
    background(0);
    Engine.update(engine);
    
box1.display()
box2.display()
ground.display()    


  
}

//box1.width
//box