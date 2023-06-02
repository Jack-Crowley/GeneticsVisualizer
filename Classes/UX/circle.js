class Circle extends Shape {

    constructor(position,c,r,strokeColor,fillColor=null,onCollide=null) {
        super(position,c,strokeColor,fillColor,onCollide);
        this.r=r;
    }

    draw() {
        this.c.beginPath();
        this.c.arc(this.position.xPos, this.position.yPos, this.r, 0, 2 * Math.PI);
        this.c.lineWidth = 3;
        this.c.strokeStyle = this.strokeColor;

        if (this.fillColor == null) {
            this.c.stroke();
        }
        else {
            this.c.fillStyle = this.fillColor;
            this.c.fill();
        }

        this.c.closePath();
    }

    collide(otherShape) {
        let x = Math.sqrt((otherShape.position.xPos-this.position.xPos)**2+(otherShape.position.yPos-this.position.yPos)**2) < Math.max(this.r, otherShape.r);
        if (x) {this.fillColor = "#f0f0f0"
        this.position.xPos = 1000}
        return x;
    }

}