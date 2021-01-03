class Bob{
    constructor(x, y, r) {
        var options = {
            'restitution':1.0,
            'friction':0.0,
            'density':0.8
        }
        this.x=x
        this.y=y
        this.r=r
        
        this.body = Bodies.circle(x, y, this.r/2,  options);
       
        World.add(world, this.body);
      }
      display(){
        
        push();
        translate(this.body.position.x, this.body.position.y);
       
        ellipseMode(CENTER);
        ellipse( 0, 0, this.r, this.r);
        pop();
      }
}