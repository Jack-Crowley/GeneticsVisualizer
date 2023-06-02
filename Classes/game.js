class Game {
    constructor(score, board) {
        this.score = score;
        this.board = board;
        this.interval = -1;
    }

    start() {
        this.interval = setInterval(this.frame, 100)
    }

    frame() {
        this.board.clear();
    }

    end() {
        if (this.interval == -1) {
            clearInterval(this.interval);
        }
    }
}