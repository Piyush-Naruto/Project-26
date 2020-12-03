class Rope{
    constructor(bodyA,bodyB,offsetY,offsetX){
        var options={ 
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        this.Rope = Constraint.create(options);
        World.add(world,this.Rope);
    }

    display(){
       var pointA = this.Rope.bodyA.position 
       var pointB = this.Rope.bodyB.position 
       strokeWeight(4);
       line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}