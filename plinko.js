class Plinko {

    constructor(x,y){

        var options={

                isStatic:true,
                restitution:1.0,
                friction:0
        }
        this.radius=10;
        this.color=255;
        this.body=Bodies.circle(x,y,10,options)        
        World.add(world,this.body);
    }

    display(){
        push ();
        translate (this.body.position.x,this.body.position.y);
        rotate (this.body.angle);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        fill (this.color)
        pop ();

    }
}