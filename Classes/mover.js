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

    binSearchForRange(x, start, end, min) {
        if (start > end) return false;

        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === x) return true;

        if (arr[mid] > x)
            return recursiveFunction(arr, x, start, mid - 1);
        else
            return recursiveFunction(arr, x, mid + 1, end);
    }

    update() {
        if (this.shape.position.xPos - this.shape.r <= 0 || this.shape.r + this.shape.position.xPos >= 500 || this.shape.position.yPos - this.shape.r <= 0 || this.shape.r + this.shape.position.yPos >= 500) { this.addScore(-5) }
        if (this.finished) { return }
        this.move()
        this.shape.update()
    }

    draw() {
        this.shape.draw()
    }

    addScore(score) {
        if (this.finished) { return }
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