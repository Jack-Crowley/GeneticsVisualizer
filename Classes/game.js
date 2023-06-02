class Game {
    constructor(score, board) {
        this.score = score;
        this.board = board;

        this.taskIDs = [];
    }

    start() {
        this.taskIDs.push(setInterval(this.frame, 10, this.board))
    }

    frame(board) {
        board.update()
    }

    end() {
        this.taskIDs.forEach((id) => {
            clearInterval(id)
        })
    }
}