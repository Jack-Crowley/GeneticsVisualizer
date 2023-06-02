class Location {

    constructor(xPos=0, yPos=0, xAcceleration=0, yAcceleration=0) {
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