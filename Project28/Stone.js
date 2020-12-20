class Stone{
    constructor(x,y,radius){
        var options={
            isStatic: false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.x =x;
        this.y=y;
        this.radius = radius;
        this.body = Bodies.circle(this.x,this.y,this.radius, options);
       
        this.image = loadImage("Plucking mangoes/stone.png");
        World.add(world,this.body);
     
    }
    display(){
      //  boy.depth = stone.depth;
      //  stone.depth=stone.depth+1;
         var pos = this.body.position; 
         push()
      translate(pos.x,pos.y);
        ellipseMode(RADIUS);
       imageMode(CENTER)
        image(this.image,0,0, this.radius*2, this.radius*2);
        pop ();
    }
}