class Circle extends Shape {

    constructor(name,board=null,position,r,strokeColor,{fillColor=null,onCollide=null,canLeaveEdge=true} = {}) {
        super(name,board,position,strokeColor,fillColor,onCollide,canLeaveEdge);
        this.r=r;
    }

    draw() {
        console.log("test")

        this.checkIfValidPos()

        ctx.beginPath();
        ctx.arc(this.calculatePoint(this.position.xPos), this.calculatePoint(this.position.yPos), this.r, 0, 2 * Math.PI);
        ctx.lineWidth = 3;
        ctx.strokeStyle = this.strokeColor;

        if (this.fillColor == null) {
            ctx.stroke();
        }
        else {
            ctx.fillStyle = this.fillColor;
            ctx.fill();
        }

        ctx.closePath();
    }

    cloneToBoard(board) {
        return new Circle(this.name,board,this.position.clone(),this.r,this.strokeColor,{fillColor:this.fillColor,onCollide:this.onCollide,canLeaveEdge:this.canLeaveEdge})
    }

    checkIfValidPos() {
        if (!this.canLeaveEdge) {
            if (this.position.xPos < this.r) {
                this.position.xPos=this.r;
            }
            if (this.position.xPos > 500-this.r) {
                this.position.xPos=500-this.r;
            }

            if (this.position.yPos < this.r) {
                this.position.yPos=this.r;
            }
            if (this.position.yPos > 500-this.r) {
                this.position.yPos=500-this.r;
            }

        }
    }

    collide(otherShape) {
        let x;
        if (otherShape instanceof Circle) {
            x = Math.sqrt((otherShape.position.xPos-this.position.xPos)**2+(otherShape.position.yPos-this.position.yPos)**2) < Math.max(this.r, otherShape.r);
        }
        else {
            let x;
            let testX = this.position.xPos;
            let testY = this.position.yPos;

            // which edge is closest?
            if (this.position.xPos < otherShape.position.xPos)         testX = otherShape.position.xPos;      // test left edge
            else if (this.position.xPos > otherShape.position.xPos+otherShape.w) testX = otherShape.position.xPos+otherShape.w;   // right edge
            if (this.position.yPos < otherShape.position.yPos)         testY = otherShape.position.yPos;      // top edge
            else if (this.position.yPos > otherShape.position.yPos+otherShape.l) testY = otherShape.position.yPos+otherShape.l;   // bottom edge

            // get distance from closest edges
            let distX = this.position.xPos-testX;
            let distY = this.position.yPos-testY;
            let distance = sqrt( (distX*distX) + (distY*distY) );

            // if the distance is less than the radius, collision!
            if (distance <= this.r) {
                x = true;
            }
            else x = false;
        }

        if (x) {
            this.board.deleteShape(this);
            this.onCollide()
            this.board.draw()
        }
    }

}