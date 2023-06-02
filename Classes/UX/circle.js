class Circle extends Shape {

    constructor(position,r,strokeColor,fillColor=null,onCollide=null) {
        super(position,strokeColor,fillColor,onCollide);
        this.r=r;
    }

    draw() {
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

    collide(otherShape) {
        let x = Math.sqrt((otherShape.position.xPos-this.position.xPos)**2+(otherShape.position.yPos-this.position.yPos)**2) < Math.max(this.r, otherShape.r);
        if (x) board.deleteShape(this);
        return x;
    }

}