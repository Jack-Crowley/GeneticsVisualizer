class Mover {
    constructor(shape) {
        this.shape = shape;
    }

    move() {
        this.shape.update()
    }
}