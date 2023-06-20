class Rectangle extends Shape {

    constructor(name,board=null,position,l,w,strokeColor,{fillColor=null,onCollide=null,canLeaveEdge=true} = {}) {
        super(name,board,position,strokeColor,fillColor,onCollide,canLeaveEdge);
        this.l=l;
        this.w=w;
    }

    draw() {
        this.checkIfValidPos()

        ctx.lineWidth = 3;
        ctx.strokeStyle = this.strokeColor;

        if (this.fillColor == null) {
            ctx.strokeRect(this.position.xPos,this.position.yPos,this.w,this.l);
        }
        else {
            ctx.fillRect(this.position.xPos,this.position.yPos,this.w,this.l);
        }

        ctx.closePath();
    }

    cloneToBoard(board) {
        return new Rectangle(this.name,board,this.position.clone(),this.l,this.w,this.strokeColor,{fillColor:this.fillColor,onCollide:this.onCollide,canLeaveEdge:this.canLeaveEdge})
    }

    checkIfValidPos() {
        if (!this.canLeaveEdge) {
            if (this.position.xPos < 0) {
                this.position.xPos=0;
            }
            if (this.position.xPos > 500-this.w) {
                this.position.xPos=500-this.w;
            }

            if (this.position.yPos < 0) {
                this.position.yPos=0;
            }
            if (this.position.yPos > 500-this.l) {
                this.position.yPos=500-this.l;
            }

        }
    }

    collide(otherShape) {
        // temporary variables to set edges for testing
        let testX = otherShape.position.xPos;
        let testY = otherShape.position.yPos;

        // which edge is closest?
        if (otherShape.position.xPos < this.position.xPos)         testX = this.position.xPos;      // test left edge
        else if (otherShape.position.xPos > this.position.xPos+this.w) testX = this.position.xPos+this.w;   // right edge
        if (otherShape.position.yPos < this.position.yPos)         testY = this.position.yPos;      // top edge
        else if (otherShape.position.yPos > this.position.yPos+this.l) testY = this.position.yPos+this.l;   // bottom edge

        // get distance from closest edges
        let distX = otherShape.position.xPos-testX;
        let distY = otherShape.position.yPos-testY;
        let distance = sqrt( (distX*distX) + (distY*distY) );

        // if the distance is less than the radius, collision!
        if (distance <= otherShape.r) {
            return true;
        }
        return false;
    }

}