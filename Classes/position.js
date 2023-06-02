class Position {

    constructor(xPos=0, yPos=0, xAcceleration=0, yAcceleration=0) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.xAcceleration = xAcceleration;
        this.yAcceleration = yAcceleration;
    }

    applyVelocity() {
        this.xPos+=this.xAcceleration
        this.yPos+=this.yAcceleration
    }
}