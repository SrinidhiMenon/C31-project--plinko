class Particle{
constructor(x,y){
var options = {
    restitution: 0.4
}
    this.body = Bodies.circle(x, y, 10, options)
    this.color = color(random(0,255),random(0,255),random(0,255));
    World.add(world,this.body);
}
display(){
    fill (this.color);
    ellipse(this.body.position.x, this.body.position.y, 20, 20);
}

}