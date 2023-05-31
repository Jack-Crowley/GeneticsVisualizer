class Location {

    constructor() {
        this(0,0,0,0)
    }

    constructor(xPos, yPos, xAcceleration, yAcceleration) {
        this.setXPos(xPos)
        this.setXAcceleration(xAcceleration)
        this.setYPos(yPos)
        this.setYAcceleration(yAcceleration)
    }

    setXPos(newX) {
        this.xPos = newX;
    }

    setYPos(newY) {
        this.yPos = newY;
    }

    setXAcceleration(newX) {
        this.xPos = newX;
    }

    setYAcceleration(newY) {
        this.yPos = newY;
    }

    XPos() {
        return this.xPos;
    }

    YPos() {
        return this.yPos;
    }

    XAcceleration() {
        return this.xPos;
    }

    YAcceleration() {
        return this.yPos;
    }
}