class Shape {
    constructor(position,c,strokeColor,fillColor,onCollide) {
        this.position = position;
        this.c = c;
        this.strokeColor = strokeColor;
        this.fillColor = fillColor;
        this.onCollide = onCollide
        this.collisions = []
    }

    draw() {

    }

    update() {
        this.draw();
        this.position.applyVelocity()
        this.collisions.forEach((obj) => {
            if (this.collide(obj) && this.onCollide!=null) {
                this.onCollide()
            }
        })
    }

    collide(otherShape) {}
}