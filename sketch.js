
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var engine, world,ground;

var divisions=[]
var divisionHeight=300;
var plinko=[]
var particle=[]

function setup() 
{
  createCanvas(800,800);
  
  engine=Engine.create();
  world=engine.world;

  ground=new Ground(width/2,height,width,20);
 

  for(var k=0;k<=width ; k+=80)
        {

          divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));

        }

  for(var j=75;j<=width;j=j+50)
        {

          plinko.push(new Plinko(j,75));

        }

  for(var j=100;j<=width;j=j+50)
        {

          plinko.push(new Plinko(j,175));

        }

        for(var j=50;j<=width-10;j=j+50)
        {

          plinko.push(new Plinko(j,175));

        }
        for(var j=75;j<=width;j=j+50)
        {

          plinko.push(new Plinko(j,275));

        }
        for(var j=50;j<=width-10;j=j+50)
        {

          plinko.push(new Plinko(j,375));

        }
}
  
function draw() 
{
  background("green"); 
  Engine.update(engine);
  ground.display();

  

  if (frameCount%60===0)
        {

          particle.push(new Particle(random (width/2-30,width/2+30),10,10))

        }

  for( var k=0;k<divisions.length;k++)
        {

          divisions[k].display();

        }

  for(var j=0;j<plinko.length;j++)
        {

          plinko[j].display();

        }
        
  for(x=0;x<particle.length;x++)
        {

          particle[x].display();

        }
}