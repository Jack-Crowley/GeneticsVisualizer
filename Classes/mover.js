class Mover {
    constructor() {
        this.board = new Board();
        this.score = 0;
        this.shape = null;
    }

    setShape(shape) {
        this.shape = shape; 
    }

    move() {
        this.shape.update()
        this.shape.draw()
    }

    addScore(score) {
        this.score += score;
    }

    getScore() {
        return this.score;
    }

    resetScore() {
        this.score = 0;
    }
}