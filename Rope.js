class Rope {
    constructor(bodyA, bodyB, offsetX, offsetY)
    {
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options =
        {
            bodyA: bodyA,
            bodyB: bodyB,
            //stiffness: 0.04,
            //length: 10 
            pointB:{x:this.offsetX, y:this.offsetY}
        }
    
        this.Rope = Constraint.create(options);
        World.add(world,this.Rope);
    }
    display()
    {
        var pointA = this.Rope.bodyA.position;
        var pointB = this.Rope.bodyB.position;
        strokeWeight(3);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        //line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
    }
};
