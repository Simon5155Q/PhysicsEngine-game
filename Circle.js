
class Circle{
    constructor(x, y, width, height){
        var options = {
            'restituition' : 0.6,
            'density' : 1.0,
            'friction' : 1.0,
        }
        this.body = Bodies.circle(x, y, width, height);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }
    display(){
    //this.body.position.x = mouseX

    push();
    ellipseMode(RADIUS);
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    ellipse(0, 0, this.width, this.height);
    pop();
    }
}
