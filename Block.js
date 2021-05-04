class Block{
  constructor(x, y, width, height) {
    
     this.image = loadImage("block.png");  
    this.Visiblity = 255;
    var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      
      
    }
    display(){
      // console.log(this.body.speed);
   if(this.body.speed < 3){
     imageMode(CENTER)
    image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
   }
   else{
     World.remove(world, this.body);
     push();
     tint(255,this.Visiblity);
     this.Visiblity = this.Visiblity - 5;
     image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
     pop();
   }
   
 }
}