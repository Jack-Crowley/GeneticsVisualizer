class Shape {
    constructor(name,board,position,strokeColor,fillColor,onCollide,canLeaveEdge) {
        this.name = name;
        this.board = board;
        this.position = position;
        this.positionToPlayer = null;
        this.strokeColor = strokeColor;
        this.fillColor = fillColor;
        this.onCollide = onCollide;
        this.canLeaveEdge = canLeaveEdge;
        this.collision = null
    }

    draw() {}

    update() {
        this.position.applyVelocity()
    }

    checkCollision() {
        if (this.collide(this.collision) && this.onCollide!=null) {
            this.onCollide()
        }
    }

    collide(otherShape) {}

    static compareTo(a,b) {
        return b.positionToPlayer-a.positionToPlayer;
    }
}