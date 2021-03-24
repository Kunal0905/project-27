class Rope{
    constructor(body1,body2,ptx){
        var op = {
            bodyA : body1,
            bodyB : body2,
            length : 50,
            stiffness : 0.05
        }
        this.body = Matter.Constraint.create(op)
        World.add(world,this.body)
        this.ptx = ptx;
    }
    display(){
        const a = this.body.bodyA.position
        const b = this.body.bodyB.position
        push()
        stroke("white")
        line(a.x + this.ptx,a.y,b.x,b.y)
        pop()
    }
}