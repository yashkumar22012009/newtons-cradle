class rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.rope1 = loadImage('sprites/sling1.png');
        this.rope2 = loadImage('sprites/sling2.png');
        this.rope3 = loadImage('sprites/sling3.png');
        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.rope.bodyA=body
    }

    fly(){
        this.rope.bodyA = null;
    }

    display(){
        image(this.rope1,200,20);
        image(this.rope2,170,20);
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            if(pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.sling3,pointA.x -30, pointA.y -10,15,30);
            }
            else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.sling3,pointA.x + 25, pointA.y -10,15,30);
            }
           
            
            pop();
        }
    }
    
}