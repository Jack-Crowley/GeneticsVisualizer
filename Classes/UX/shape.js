class Shape {
    constructor(position,c,strokeColor,fillColor) {
        this.position = position;
        this.c = c;
        this.strokeColor = strokeColor;
        this.fillColor = fillColor;
        this.collisions = []
    }

    draw() {

    }

    update() {
        this.draw();
        this.position.applyVelocity()
        this.collisions.forEach((obj) => {collide(obj)})
    }

    collide(otherShape) {}
}