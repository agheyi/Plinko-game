class Plinko
{
    constructor(x, y)
    {
        var options = 
        {
            isStatic:true
        }
        this.body = Bodies.circle(x, y, 10, options);
        World.add(world, this.body);
        this.x = x;
        this.y = y;
        this.radius = 10;
    }
    display()
    {
        noStroke();
        fill("white");
        ellipse(this.x, this.y, this.radius, this.radius);
    }
}