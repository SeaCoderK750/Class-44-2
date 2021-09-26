const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var player, world, engine; 

var log1, log2, log3, log4, log5, log6, log7, log8, log9, log10, ground


function preload(){
    backgroundImg = loadImage("Background.png");
}

function setup(){

    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height, 1200,20);
    player = new Player(100,100);
    log1 = new Box(200,250,80,PI/2)
    log2 = new Box(300,150,30,PI/2)
    log3 = new Box(400,150,80,PI/2)
    log4 = new Box(500,280,50,PI/2)
    log5 = new Box(600,270,80,PI/2)
    log6 = new Box(700,210,30,PI/2)
    log7 = new Box(800,220,20,PI/2)
    log8 = new Box(900,240,100,PI/2)
    log9 = new Box(1000,260,20,PI/2)
    log10 = new Box(1100,310,10,PI/2)

    
    



}

function draw(){
    if(backgroundImg)

    
    background(backgroundImg);
    Engine.update(engine);
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    log5.display();
    log6.display();
    log7.display();
    log8.display();
    log9.display();
    log10.display();
    ground.display();
    player.display();
    player.jump(event);
    

    



}

    






