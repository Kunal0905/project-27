class Ball{
    constructor(x,y){

     var op = {
         restitution : 0.8,
         friction : 0.5,
         density : 0.5,
         isStatic : true
     }
     this.body = Bodies.circle(x,y,20,op)
     World.add(world,this.body)
    }
display(){
    var pos = this.body.position
    ellipseMode(RADIUS)
    ellipse(pos.x,pos.y,20)
}
}