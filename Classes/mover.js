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
        if (this.finished) {return}
        this.move()
        this.shape.update()
    }

    draw() {
        this.shape.draw()
    }

    addScore(score) {
        this.score += score;
        this.scoreField.textContent = this.getScore();
    }

    getScore() {
        return this.score;
    }

    resetScore() {
        this.score = 0;
    }

    endSimulation() {
        this.finished = true
        this.finishedField.textContent = this.finished;
    }
}