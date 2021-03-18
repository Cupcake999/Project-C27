class Bob{
    constructor(x,y,radius){
        var options ={
            isStatic : true
        }
    this.body = Bodies.circle(x,y,radius)
    this.radius = radius;
    World.add(world,this.body);
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS)
        fill("pink")
        ellipse(0,0,this.radius);
        pop();
    }
}