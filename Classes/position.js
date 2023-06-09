class Position {

    constructor(xPos=0, yPos=0, vector=new Vector()) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.vector = vector;
    }

    applyVelocity() {
        this.xPos+=this.vector.x
        this.yPos+=this.vector.y
    }

    setVector(v1) {
        this.vector = v1;
    }

    clone() {
        return new Position(this.xPos, this.yPos, this.vector.clone())
    }
}

class Vector {

    constructor(x=0, y=0) {
        this.x = x;
        this.y = y;
    }

    add(v1) {
       this.x += v1.x;
       this.y += v1.y;
    }

    clear() {
        this.x = 0;
        this.y = 0;
    }

    clone() {
        return new Vector(this.x,this.y);
    }

    
}