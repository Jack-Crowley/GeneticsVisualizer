class Circle extends Shape {

    constructor(position,c,r,strokeColor,fillColor=null) {
        super(position,c,strokeColor,fillColor);
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

    update() {
        this.position.applyVelocity()
        super.update()
    }

}