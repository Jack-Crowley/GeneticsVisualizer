class Game {
    constructor(score, board) {
        this.score = score;
        this.board = board;

        this.interval = -1;
    }

    start() {
        this.interval = setInterval(this.frame, 10, this.board)
    }

    frame(board) {
        board.update()
    }

    end() {
        if (this.interval != -1) {
            clearInterval(this.interval);
        }
        this.interval = -1;
    }
}