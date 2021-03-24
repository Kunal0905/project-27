class Roof{
    constructor(x,y){
        var op = {
           isStatic : true
        }
    this.roof = Bodies.rectangle(x,y,400,30,op);
    World.add(world,this.roof);
    }
    display(){
        var pos = this.roof.position
        rectMode(CENTER)
        rect(pos.x,pos.y,400,30)
    }
    
}