class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
     
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      stroke(3);
      strokeWeight(4)
      fill("grey");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };