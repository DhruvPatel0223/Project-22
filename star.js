class star{
    constructor(x, y) {
        var options = {
            'restitution':0,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        
        
        this.image = loadImage("images/star.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0);
        
      }
}