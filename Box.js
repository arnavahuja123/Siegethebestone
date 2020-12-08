class Box{
    constructor(x, y, width, height){
      var options = {
        restitution:0.4,
        friction:1.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visibility = 255;
      World.add(world, this.body);
    }
  
    
  
    display(){
      //console.log(this.body.speed);
   
      
        var pos =this.body.position;
        var angle = this.body.angle;
  
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("yellow");
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
      }
      
    }
  