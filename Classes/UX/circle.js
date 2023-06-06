class Circle extends Shape {

    constructor(name,board=null,position,r,strokeColor,{fillColor=null,onCollide=null,canLeaveEdge=true} = {}) {
        super(name,board,position,strokeColor,fillColor,onCollide,canLeaveEdge);
        this.r=r;
    }

    draw() {
        this.checkIfValidPos()

        ctx.beginPath();
        ctx.arc(this.position.xPos, this.position.yPos, this.r, 0, 2 * Math.PI);
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
            if (this.position.xPos > canvas.width-this.r) {
                this.position.xPos=canvas.width-this.r;
            }

            if (this.position.yPos < this.r) {
                this.position.yPos=this.r;
            }
            if (this.position.yPos > canvas.height-this.r) {
                this.position.yPos=canvas.height-this.r;
            }

        }
    }

    collide(otherShape) {
        let x = Math.sqrt((otherShape.position.xPos-this.position.xPos)**2+(otherShape.position.yPos-this.position.yPos)**2) < Math.max(this.r, otherShape.r);
        if (x) this.board.deleteShape(this);
        return x;
    }

}