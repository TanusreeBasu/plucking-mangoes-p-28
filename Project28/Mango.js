class Mango{
    constructor(x,y,radius){
        var options={
            isStatic: true,
            restitution:0,
            frriction:1,
           // density:1.2
        }
        this.body = Bodies.circle(x,y,radius, options);
        this.radius = radius;
        this.image = loadImage("Plucking mangoes/mango.png");
        World.add(world,this.body);
    }
    display(){
         var pos = this.body.position;
         push()
       
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
       imageMode(CENTER)
        image(this.image,0,0, this.radius, this.radius);
        pop ();
    }
}