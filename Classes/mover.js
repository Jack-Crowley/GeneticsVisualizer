class Mover {
    constructor(type) {
        this.type = type;
        this.board = new Board();
        this.score = 0;
        this.shape = null;
        this.finished = false;
    }

    setShape(shape) {
        this.shape = shape; 
    }

    draw() {
        this.shape.draw()
    }

    update() {
        this.move()
        this.scoreField.textContent = this.score;
        this.finishedField.textContent = this.finished
        this.shape.update()
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