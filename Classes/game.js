class Game {
    constructor(score, board) {
        this.score = score;
        this.board = board;

        console.log(this.board)
        this.interval = -1;
    }

    start() {
        this.interval = setInterval(this.frame, 100, this.board)
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