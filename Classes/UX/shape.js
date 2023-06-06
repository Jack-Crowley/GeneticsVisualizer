class Shape {
    constructor(name,board,position,strokeColor,fillColor,onCollide,canLeaveEdge) {
        this.name = name;
        this.board = board;
        this.position = position;
        this.strokeColor = strokeColor;
        this.fillColor = fillColor;
        this.onCollide = onCollide;
        this.canLeaveEdge = canLeaveEdge;
        this.collisions = []
    }

    draw() {}

    update() {
        this.position.applyVelocity()
        this.collisions.forEach((obj) => {
            if (this.collide(obj) && this.onCollide!=null) {
                this.onCollide()
            }
        })
    }

    collide(otherShape) {}
}