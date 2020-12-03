class Bob extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
      this.body = Bodies.circle(x, y,options);
    }
  
    display() {
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      super.display();
    }
  }