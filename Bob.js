class Bob{
    constructor(x,y,diameter){
        var options={
            isStatic:true
        }
        this.body = Bodies.circle(x,y,diameter,options);
        this.diameter=diameter;
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        fill("silver");
        circle(pos.x,pos.y,this.diameter);
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
    }
        }
     
    
    