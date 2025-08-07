class Ball{
    constructor(x,y,r,color){

        var options={
            restitution:1.3
        }
       this.body=Bodies.circle(x,y,r,options)
       World.add(world,this.body);

       this.r=r;
       this.color=color;
    }

    show(){
        var pos=this.body.position;
        fill (this.color)
        ellipse(pos.x,pos.y,this.r,this.r)
    }
}