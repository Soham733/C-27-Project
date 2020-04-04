class String{
    constructor(bodyA, pointB){
        var options = {
            bodyA:bodyA,
            pointB: pointB,
            stiffness:5,
            length:4

        }
        this.pointB=pointB;
        this.string=Constraint.create(options);
        World.add(world,this.string);
    }
    display(){
        var pointA=this.string.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}