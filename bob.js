class Bob{
    constructor(x,y,radius){
        var options={
            
        }
        this.x = x;
        this.y = y;
        this.radius= radius
       
          this.body = Bodies.circle(this.x,this.y,this.radius/2,options)
         
           
         
        }
        display(){
            var ballpos = this.body.position;
            push()
            translate(ballpos.x,ballpos.y);
            fill("pink");
            ellipseMode(RADIUS)
            
            ellipse(0,0,this.radius,this.radius)
            pop();
        }
}