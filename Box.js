class Box extends ClassOperations{
    constructor(x, y, height,angle){
      super(x,y,40,height,angle);
      this.image = loadImage("Log.png");
      Matter.Body.setAngle(this.body, angle);
    }
  
  };