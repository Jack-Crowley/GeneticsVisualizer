class Rectangle extends Shape {

    constructor(name,board=null,position,width,height,strokeColor,{fillColor=null,onCollide=null,canLeaveEdge=true} = {}) {
        super(name,board,position,strokeColor,fillColor,onCollide,canLeaveEdge);
        this.width=width;
        this.height=height;
    }

    draw() {
        
    }

}