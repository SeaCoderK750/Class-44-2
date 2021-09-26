class Player extends ClassOperations {
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("Player.png");
    }
  
    display() {
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      super.display();
    }
     keyPressed(){
        if(keyCode===32){
            Matter.Body.setVelocity(player,{x:2,y:-12})
    
            
        }
        
    
        
    }
     jump(event){
        var x = event.keyCode
        if(x==32){
            player.velocityX = 0;
            player.velocityY = -12;
            
        }
    }
  }
  